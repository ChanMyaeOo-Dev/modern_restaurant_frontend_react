import axios from "axios";

const API_URL = "http://localhost:5001";

export const fetchTableByNumber = async (tableNo) => {
  try {
    const response = await axios.get(`${API_URL}/tables`);
    const tables = response.data;
    const tableNoAsNumber = Number(tableNo);

    const table = tables.find((t) => t.tableNo === tableNoAsNumber);
    console.log("Found table:", table);

    return table;
  } catch (err) {
    console.error("Error fetching table data:", err);
    throw err;
  }
};

export const updateTableOrders = async (tableId, updatedOrders) => {
  try {
    await axios.patch(`${API_URL}/tables/${tableId}`, {
      orders: updatedOrders,
    });
  } catch (err) {
    console.error("Error updating table orders:", err);
    throw err;
  }
};
