import { createSlice } from '@reduxjs/toolkit';
import { NFT } from '@/types/nft.types';
interface CartItem extends NFT {
    quantity: number;
}

interface CartState {
    items: CartItem[];
    isOpen: boolean;
    purchaseFinished: boolean;
}

const initialState: CartState = {
    items: [],
    isOpen: false,
    purchaseFinished: false,
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
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },

        removeItem(state, action: { payload: number }) {
            state.items = state.items.filter(i => i.id !== action.payload);
        },

        toggleCart(state) {
            state.isOpen = !state.isOpen;
        },

        finalizePurchase(state) {
            state.purchaseFinished = true;
        },

        closeCart(state) {
            state.isOpen = false;
            if (state.purchaseFinished) {
                state.items = [];
                state.purchaseFinished = false;
            }
        },
    },

});

export const {
    addItem,
    removeItem,
    toggleCart,
    closeCart,
    finalizePurchase,
} = cartSlice.actions;
export default cartSlice.reducer;
