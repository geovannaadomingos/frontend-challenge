import { useQuery } from '@tanstack/react-query';
import { fetchNFTList } from '@/services/nft-api';
import { UseNFTListParams, NFTListResponse } from '@/types/nft.types';

export const useNFTList = ({
  page,
  rows,
  sortBy,
  orderBy,
}: UseNFTListParams) => {
  const { data, isLoading, error } = useQuery<NFTListResponse>({
    queryKey: ['nft-list', page, rows, sortBy, orderBy],
    queryFn: () => fetchNFTList(page, rows, sortBy, orderBy),
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,
  });

  return {
    products: data?.products ?? [],
    totalCount: data?.count ?? 0,
    isLoading,
    error,
  };
};
