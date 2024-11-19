const tableReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TABLE':
            return {
                ...state,
                tableNo: action.payload,
            };
        case 'SET_CURRENT_TABLE_DATA':
            return {
                ...state,
                currentTableData: action.payload,
            };
        case 'ADD_ORDER_TO_TABLE':
            return {
                ...state,
                currentTableData: {
                    ...state.currentTableData,
                    orders: [...state.currentTableData.orders, ...action.payload]
                },
                // orderList: [...state.orderList, action.payload],
            };
        default:
            return state;
    }
};

export default tableReducer;
