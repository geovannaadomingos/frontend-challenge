import { useQuery } from '@tanstack/react-query';
import { fetchNFTList } from '@/services/nft-api';
import { UseNFTListParams, NFT } from '@/types/nft.types';

export const useNFTList = ({
  page,
  rows,
  sortBy,
  orderBy,
}: UseNFTListParams) => {
  const { data, isLoading, error } = useQuery<NFT[]>({
    queryKey: ['nft-list', page, rows, sortBy, orderBy],
    queryFn: () => fetchNFTList(page, rows, sortBy, orderBy),
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,
  });

  return { data, isLoading, error };
};
