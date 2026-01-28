import { useNFTList } from '@/hooks/useNFTList';
import { NFTGrid } from '@/components/NFTGrid/NFTGrid';

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
    <main>
      <h1>NFTs</h1>

      <NFTGrid>
        {data?.map((nft) => (
          <div key={nft.id}>
            {nft.name}
          </div>
        ))}
      </NFTGrid>
    </main>
  );
}
