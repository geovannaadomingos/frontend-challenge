import { createSlice } from '@reduxjs/toolkit';
import { NFT } from '@/types/nft.types';
interface CartItem extends NFT {
    quantity: number;
}

interface CartState {
    items: CartItem[];
    isOpen: boolean;
}

const initialState: CartState = {
    items: [],
    isOpen: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: { payload: NFT }) {
            const item = state.items.find(i => i.id === action.payload.id);

            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
        },
        removeItem(state, action: { payload: number }) {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        toggleCart(state) {
            state.isOpen = !state.isOpen;
        },
        closeCart(state) {
            state.isOpen = false;
        },
        clearCart(state) {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart, toggleCart, closeCart } = cartSlice.actions;
export default cartSlice.reducer;
