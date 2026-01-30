import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Image from 'next/image';
import styles from './Header.module.scss';

export function Header() {
    const itemsCount = useSelector(
        (state: RootState) => state.cart.items.length
    );


    return (
        <header className={styles.header}>
            <Image
                src="/assets/starsoft-logo.svg"
                alt="Logo"
                height={38}
                width={0}
                style={{ width: 'auto' }}
            />
            <div className={styles.cart}>
                <Image
                    src="/assets/bag-icon.svg"
                    alt="Carrinho"
                    height={33}
                    width={0}
                    style={{ width: 'auto' }}
                />
                <span className={styles.badge}> {itemsCount > 0 ? itemsCount : 0}</span>
            </div>
        </header>
    );
}
