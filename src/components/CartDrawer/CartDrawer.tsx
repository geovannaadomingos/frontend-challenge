import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { closeCart } from '@/store/cartSlice';
import { CartItem } from '@/components/CartItem/CartItem';
import styles from './CartDrawer.module.scss';

export function CartDrawer() {
    const dispatch = useDispatch();
    const { items, isOpen } = useSelector((state: RootState) => state.cart);
    if (!isOpen) return null;

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
                    <button className={styles.checkout}>
                        FINALIZAR COMPRA
                    </button>
                </footer>
            </aside>
        </div>
    );
}
