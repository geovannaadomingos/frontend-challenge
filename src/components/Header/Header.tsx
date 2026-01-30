import { RootState } from '@/store/store';
import Image from 'next/image';
import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '@/store/cartSlice';

export function Header() {
    const dispatch = useDispatch();

    const itemsCount = useSelector(
        (state: RootState) =>
            state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
    );

    return (
        <header className={styles.header}>
            <Image src="/assets/starsoft-logo.svg" alt="Logo" height={38} width={0} style={{ width: 'auto' }} />

            <button
                className={styles.cart}
                onClick={() => dispatch(toggleCart())}
            >
                <Image src="/assets/bag-icon.svg" alt="Carrinho" height={33} width={0} style={{ width: 'auto' }} />
                <span className={styles.badge}>{itemsCount}</span>
            </button>
        </header>
    );
}
