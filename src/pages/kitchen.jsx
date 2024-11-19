import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Loading from "../components/Loading/Loading";
import OrderCard from "../components/Kitchen/OrderCard";
import { API_URL } from "../services/API_URL";
import EmptyState from "../components/Kitchen/EmptyState";
import notificationSound from "../components/Kitchen/sound/notification.mp3";
import SnackBar from "../components/Kitchen/SnackBar";
import SoundPermissionModal from "../components/Kitchen/SoundPermissionModal";

const Kitchen = () => {
  const [kitchenData, setKitchenData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [canPlaySound, setCanPlaySound] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const previousOrdersCount = useRef(0);

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(notificationSound);
  }, []);

  const enableSoundNotifications = () => {
    setCanPlaySound(true);
    setShowModal(false);
  };

  const declineSoundNotifications = () => {
    setCanPlaySound(false);
    setShowModal(false);
  };

  const playNotificationSound = () => {
    if (canPlaySound) {
      audioRef.current.play().catch((err) => {
        console.log("Audio play was prevented:", err);
        setCanPlaySound(false);
      });
    }
  };

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/all_orders`);
      const newOrders = response.data.orders;

      if (newOrders.length > previousOrdersCount.current) {
        playNotificationSound();
        setShowSnackbar(true);
      }

      setKitchenData(newOrders);
      previousOrdersCount.current = newOrders.length;
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();

    const interval = setInterval(() => {
      fetchOrders();
    }, 300000);

    return () => clearInterval(interval);
  }, [canPlaySound]);

  const handleCompleted = (id) => {
    axios
      .post(`${API_URL}/orderDone`, {
        order_id: id,
      })
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        fetchOrders();
      })
      .catch((error) => {
        alert("Error sending data:", error);
      });
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  if (loading) return <Loading />;
  if (error) return <div>Error: {error.message}</div>;
  if (kitchenData.length === 0) return <EmptyState fetchOrders={fetchOrders} />;

  return (
    <main className="flex overflow-hidden flex-col bg-gray-100 h-[100vh]">
      <div className="xl:columns-5 lg:columns-4 md:columns-2 columns-1 p-4 !gap-4">
        {kitchenData.map((order, index) => {
          return (
            <div key={index} className="flex flex-col flex-1 mb-4">
              <OrderCard order={order} handleCompleted={handleCompleted} />
            </div>
          );
        })}
      </div>
      <footer className="flex overflow-hidden flex-col mt-28 w-full text-base text-black bg-white max-md:mt-10 max-md:max-w-full fixed bottom-0">
        <div className="flex relative flex-wrap gap-2 justify-between items-center p-4 w-full min-h-[56px] max-md:max-w-full">
          <div className="self-stretch my-auto font-semibold">
            {kitchenData.length} Orders
          </div>

          <div className="self-stretch my-auto absolute left-[50%] translate-x-[-50%]">
            Kitchen View Min Lan (Parami)
          </div>

          {/* Refresh Button */}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={fetchOrders}
          >
            Refresh Orders
          </button>
        </div>
      </footer>

      {showModal && (
        <SoundPermissionModal
          onAccept={enableSoundNotifications}
          onDecline={declineSoundNotifications}
        />
      )}

      {/* Snackbar Component */}
      {showSnackbar && (
        <SnackBar
          message="New orders received!"
          onClose={handleSnackbarClose}
        />
      )}
    </main>
  );
};

export default Kitchen;
