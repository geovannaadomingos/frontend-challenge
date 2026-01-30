export interface NFT {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  createdAt: string;
}

export interface NFTListResponse {
  products: NFT[];
  count: number;
}

export interface UseNFTListParams {
  page: number;
  rows: number;
  sortBy: string;
  orderBy: string;
}
