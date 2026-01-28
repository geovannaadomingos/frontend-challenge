import styles from './Home.module.scss';
import { useNFTList } from '@/hooks/useNFTList';
import { NFTGrid } from '@/components/NFTGrid/NFTGrid';
import { NFTCard } from '@/components/NFTCard/NFTCard';

export default function Home() {
  const { data, isLoading, error } = useNFTList({
    page: 1,
    rows: 8,
    sortBy: 'name',
    orderBy: 'ASC',
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar NFTs</div>;

  return (
    <main className={styles.main}>
      <NFTGrid>
        {data?.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </NFTGrid>
    </main>
  );
}
