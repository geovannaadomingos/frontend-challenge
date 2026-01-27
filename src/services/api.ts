import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-challenge.starsoft.games/api/v1',
});

export interface NFT {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  createdAt: string;
}

export const fetchNFTs = async (page: number, rows: number, sortBy: string, orderBy: string): Promise<NFT[]> => {
  const response = await api.get('/products', { params: { page, rows, sortBy, orderBy } });
  return response.data.products;
};

export default api;