import axios from 'axios';
import { NFT } from '@/types/nft.types';

const api = axios.create({
  baseURL: 'https://api-challenge.starsoft.games/api/v1',
});

export const fetchNFTList = async (page: number, rows: number, sortBy: string, orderBy: string): Promise<NFT[]> => {
  const response = await api.get('/products', { params: { page, rows, sortBy, orderBy } });
  return response.data.products;
};

export default api;