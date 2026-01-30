import { NFT } from '@/types/nft.types';
import styles from './CartItem.module.scss';
import Image from 'next/image';

interface CartItem extends NFT {
  quantity: number;
}

export function CartItem({ nft }: { nft: CartItem }) {

  return (
    <div className={styles.cartItem}>
      <img className={styles.image} src={nft.image} alt={nft.name} />

      <div className={styles.content}>
        <strong className={styles.title}>ITEM {nft.id}</strong>
        <p className={styles.description}>{nft.description}</p>

        <div className={styles.price}>
          <Image
            src="/assets/eth-logo.svg"
            alt="ETH"
            width={29}
            height={29}
          />
          <span>{nft.price} ETH</span>
        </div>

        <div className={styles.footer}>
          <div className={styles.quantityControl}>
            <button>-</button>
            <span style={{ margin: '0 8px' }}>{nft.quantity}</span>
            <button >+</button>
          </div>

          <button
            className={styles.trashButton}
          >
            <img src="/assets/trash-icon.svg" alt="Remover item do carrinho" />
          </button>
        </div>

      </div>
    </div>
  );
}
