import styles from './NFTCard.module.scss';
import { NFT } from '@/types/nft.types';
import Image from 'next/image';

interface NFTCardProps {
    nft: NFT;
}

export function NFTCard({ nft }: NFTCardProps) {
    return (
        <article className={styles.card}>
            <img
                className={styles.image}
                src={nft.image}
                alt={nft.name}
            />

            <div className={styles.content}>
                <h2 className={styles.title}>{nft.name}</h2>

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

                <button className={styles.button}>COMPRAR</button>
            </div>
        </article>
    );
}
