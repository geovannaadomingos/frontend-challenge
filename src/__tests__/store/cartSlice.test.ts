import cartReducer, {
    addItem,
    removeItem,
    toggleCart,
    closeCart,
    finalizePurchase,
} from '@/store/cartSlice';
import { NFT } from '@/types/nft.types';

const nftMock: NFT = {
    id: 1,
    name: 'NFT Test',
    description: 'NFT Description',
    image: 'image.png',
    price: '10.00000000',
    createdAt: '2024-01-01',
};

describe('cartSlice', () => {
    it('should return the initial state', () => {
        const state = cartReducer(undefined, { type: 'unknown' });

        expect(state).toEqual({
            items: [],
            isOpen: false,
            purchaseFinished: false,
        });
    });

    it('should add an item to the cart', () => {
        const state = cartReducer(undefined, addItem(nftMock));

        expect(state.items.length).toBe(1);
        expect(state.items[0].id).toBe(nftMock.id);
        expect(state.items[0].quantity).toBe(1);
    });

    it('should increase quantity when adding the same item again', () => {
        const stateWithOne = cartReducer(undefined, addItem(nftMock));
        const stateWithTwo = cartReducer(stateWithOne, addItem(nftMock));

        expect(stateWithTwo.items.length).toBe(1);
        expect(stateWithTwo.items[0].quantity).toBe(2);
    });

    it('should remove an item from the cart', () => {
        const stateWithItem = cartReducer(undefined, addItem(nftMock));
        const stateAfterRemove = cartReducer(
            stateWithItem,
            removeItem(nftMock.id)
        );

        expect(stateAfterRemove.items.length).toBe(0);
    });

    it('should toggle cart open state', () => {
        const state = cartReducer(undefined, toggleCart());

        expect(state.isOpen).toBe(true);
    });

    it('should finalize purchase', () => {
        const state = cartReducer(undefined, finalizePurchase());

        expect(state.purchaseFinished).toBe(true);
    });

    it('should clear cart when closing after purchase is finished', () => {
        const stateWithItem = cartReducer(undefined, addItem(nftMock));
        const stateFinished = cartReducer(stateWithItem, finalizePurchase());
        const stateClosed = cartReducer(stateFinished, closeCart());

        expect(stateClosed.items.length).toBe(0);
        expect(stateClosed.purchaseFinished).toBe(false);
        expect(stateClosed.isOpen).toBe(false);
    });

    it('should NOT clear cart when closing without finishing purchase', () => {
        const stateWithItem = cartReducer(undefined, addItem(nftMock));
        const stateClosed = cartReducer(stateWithItem, closeCart());

        expect(stateClosed.items.length).toBe(1);
        expect(stateClosed.purchaseFinished).toBe(false);
    });
});
