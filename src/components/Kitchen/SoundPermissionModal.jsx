import React from "react";

const SoundPermissionModal = ({ onAccept, onDecline }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[320px]">
        <h2 className="text-xl font-semibold mb-3">
          Enable Sound Notifications?
        </h2>
        <p className="mb-6 text-gray-500">
          We would like to send you sound notifications for new orders.
        </p>
        <div className="flex justify-center gap-2">
          <button
            onClick={onAccept}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Enable
          </button>
          <button
            onClick={onDecline}
            className="bg-gray-200 text-black px-4 py-2 rounded-md"
          >
            No Thanks
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoundPermissionModal;
