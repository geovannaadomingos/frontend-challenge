import styles from './NFTCard.module.scss';
import { NFT } from '@/types/nft.types';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '@/store/cartSlice';
import { RootState, AppDispatch } from '@/store/store';
interface NFTCardProps {
    nft: NFT;
}

export function NFTCard({ nft }: NFTCardProps) {
    const dispatch = useDispatch<AppDispatch>();

    const isInCart = useSelector((state: RootState) =>
        state.cart.items.some(item => item.id === nft.id)
    );

    function handleClick() {
        if (isInCart) {
            dispatch(removeItem(nft.id));
        } else {
            dispatch(addItem(nft.id));
        }
    }

    return (
        <article className={styles.card}>
            <img className={styles.image} src={nft.image} alt={nft.name} />

            <div className={styles.content}>
                <h2 className={styles.title}>{nft.name}</h2>
                <p className={styles.description}>{nft.description}</p>

                <div className={styles.price}>
                    <Image
                        src="/assets/eth-logo.svg"
                        alt="ETH"
                        width={24}
                        height={24}
                    />
                    <span>{nft.price} ETH</span>
                </div>

                <button
                    onClick={handleClick}
                    className={`${styles.button} ${isInCart ? styles.added : ''}`}
                >
                    {isInCart ? 'ADICIONADO AO CARRINHO' : 'COMPRAR'}
                </button>
            </div>
        </article>
    );
}
