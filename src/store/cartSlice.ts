import { createSlice } from '@reduxjs/toolkit';

interface CartState {
    items: number[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: { payload: number }) {
            state.items.push(action.payload);
        },
        removeItem(state, action: { payload: number }) {
            state.items = state.items.filter(id => id !== action.payload);
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
