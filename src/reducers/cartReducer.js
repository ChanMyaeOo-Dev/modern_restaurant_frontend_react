const cartReducer = (state, action) => {
    switch (action.type) {

        case 'ADD_TO_CART': {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);

            if (itemIndex !== -1) {
                // If the item is already in the cart, update its quantity
                const updatedItem = {
                    ...state[itemIndex],
                    quantity: action.payload.quantity // Set to the new quantity
                };
                return [
                    ...state.slice(0, itemIndex),
                    updatedItem,
                    ...state.slice(itemIndex + 1)
                ];
            } else {
                // If the item is not in the cart, add it
                return [...state, action.payload];
            }
        }

        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload);

        case 'INCREASE_QUANTITY':
            return state.map(item =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

        case 'DECREASE_QUANTITY':
            return state.map(item =>
                item.id === action.payload
                    ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
                    : item
            ).filter(item => item.quantity > 0);

        case 'CLEAR_CART':
            return [];

        default:
            return state;
    }
};

export default cartReducer;
