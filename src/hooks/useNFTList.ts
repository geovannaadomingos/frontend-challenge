import { useQuery } from '@tanstack/react-query';
import { fetchNFTList } from '@/services/nft-api';
import { UseNFTListParams } from '@/types/nft.types';

export const useNFTList = ({ page, rows, sortBy, orderBy }: UseNFTListParams) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['nft-list', page, rows, sortBy, orderBy],
    queryFn: () => fetchNFTList(page, rows, sortBy, orderBy),
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isLoading, error };
};