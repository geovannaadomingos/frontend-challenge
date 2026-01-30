import { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { useNFTList } from '@/hooks/useNFTList';
import { NFTGrid } from '@/components/NFTGrid/NFTGrid';
import { NFTCard } from '@/components/NFTCard/NFTCard';
import { Header } from '@/components/Header/Header';
import { LoadMore } from '@/components/LoadMore/LoadMore';
import { Footer } from '@/components/Footer/Footer';
import { NFT } from '@/types/nft.types';

const ROWS = 8;

export default function Home() {
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState<NFT[]>([]);

  const {
    products,
    totalCount,
    isLoading,
    error,
  } = useNFTList({
    page,
    rows: ROWS,
    sortBy: 'name',
    orderBy: 'ASC',
  });

  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  useEffect(() => {
    if (!products?.length) return;

    setAllProducts((prev) => {
      const newItems = products.filter(
        (p) => !prev.some((item) => item.id === p.id)
      );

      const updatedList = [...prev, ...newItems];

      if (updatedList.length >= totalCount) {
        setHasReachedEnd(true);
      }

      return updatedList;
    });
  }, [products, totalCount]);

  const loadedItems = allProducts.length;

  const progress = totalCount
    ? Math.min((loadedItems / totalCount) * 100, 100)
    : 0;


  if (page === 1 && isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar NFTs</div>;

  return (
    <>
      <Header />

      <main className={styles.main}>
        <NFTGrid>
          {allProducts.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </NFTGrid>

        <LoadMore
          progress={progress}
          hasMore={!hasReachedEnd}
          onLoadMore={() => setPage((prev) => prev + 1)}
        />
      </main>

      <Footer />
    </>
  );
}
