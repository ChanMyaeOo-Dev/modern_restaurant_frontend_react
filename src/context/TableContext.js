import React, { createContext, useReducer, useEffect } from "react";
import tableReducer from "../reducers/tableReducer";
import useFetch from "../hooks/useFetch";
import {
  fetchTableByNumber,
  updateTableOrders,
} from "../services/tableService";

const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const initialState = {
    tableNo: null,
    currentTableData: null,
  };

  const [state, dispatch] = useReducer(tableReducer, initialState);

  const { data: tableData, loading, error } = useFetch("/tableData.json");

  useEffect(() => {
    if (tableData && state.tableNo !== null) {
      const filteredTableData = tableData.find(
        (table) => table.tableNo === parseInt(state.tableNo, 10)
      );

      dispatch({ type: "SET_CURRENT_TABLE_DATA", payload: filteredTableData });
    }
  }, [tableData, state.tableNo]);

  const setTable = (tableNo) => {
    if (tableNo !== state.tableNo) {
      dispatch({ type: "SET_TABLE", payload: tableNo });
    }
  };

  const addOrderToTable = async (order) => {
    if (state.tableNo && state.currentTableData) {
      try {
        // Fetch current table data
        const table = await fetchTableByNumber(state.tableNo);
        console.log("Fetched table:", table);

        if (table) {
          console.log("Table ID:", table.id);
          // Update orders
          const updatedOrders = [...table.orders, order];
          await updateTableOrders(table.id, updatedOrders);

          // Update local state
          dispatch({ type: "ADD_ORDER_TO_TABLE", payload: order });
        } else {
          console.error("Table not found");
        }
      } catch (err) {
        console.error("Failed to add order to table:", err);
      }
    } else {
      console.error("Table number or current table data is not set");
    }
  };

  return (
    <TableContext.Provider value={{ table: state, setTable, addOrderToTable }}>
      {children}
    </TableContext.Provider>
  );
};

export default TableContext;
