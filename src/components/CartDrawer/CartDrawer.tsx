import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { closeCart, finalizePurchase } from '@/store/cartSlice';
import { CartItem } from '@/components/CartItem/CartItem';
import styles from './CartDrawer.module.scss';
import Image from 'next/image';

export function CartDrawer() {
    const dispatch = useDispatch();

    const { items, isOpen, purchaseFinished } = useSelector(
        (state: RootState) => state.cart
    );

    if (!isOpen) return null;

    const totalValue = items.reduce((total, item) => {
        const price = Number(item.price);
        return total + price * item.quantity;
    }, 0);


    return (
        <div className={styles.overlay} onClick={() => dispatch(closeCart())}>
            <aside
                className={styles.drawer}
                onClick={(e) => e.stopPropagation()}
            >
                <header className={styles.header}>
                    <button
                        className={styles.closeButton}
                        onClick={() => dispatch(closeCart())}
                    >
                        <img src="/assets/close-icon.svg" alt="Fechar carrinho" />
                    </button>
                    <h2 className={styles.title}>Mochila de Compras</h2>
                </header>

                <div className={styles.items}>
                    {items.length === 0 && (
                        <p className={styles.empty}>Seu carrinho está vazio!</p>
                    )}

                    {items.map(item => (
                        <CartItem
                            key={item.id}
                            nft={item}
                        />
                    ))}
                </div>

                <footer className={styles.footer}>
                    <div className={styles.totalPrice}>
                        <p>TOTAL</p>
                        <div className={styles.price}>
                            <Image
                                src="/assets/eth-logo.svg"
                                alt="ETH"
                                width={34}
                                height={34}
                            />
                            <span>{totalValue.toFixed(0)} ETH</span>
                        </div>
                    </div>

                    <button
                        className={styles.button}
                        onClick={() => dispatch(finalizePurchase())}
                        disabled={purchaseFinished || items.length === 0}
                    >
                        {purchaseFinished ? 'COMPRA FINALIZADA!' : 'FINALIZAR COMPRA'}
                    </button>
                </footer>
            </aside>
        </div>
    );
}
