import axios from 'axios';
import { fetchNFTList } from './nft-api';
import { NFTListResponse } from '@/types/nft.types';

jest.mock('axios', () => {
  const mockGet = jest.fn();

  return {
    __esModule: true,
    default: {
      create: jest.fn(() => ({
        get: mockGet,
      })),
    },
  };
});

describe('fetchNFTList', () => {
  it('should fetch NFT list with correct params and return data', async () => {
    const mockResponse: NFTListResponse = {
      products: [
        {
          id: 1,
          name: 'NFT Test',
          description: 'Test NFT',
          image: 'image.png',
          price: '182.00000000',
          createdAt: '2024-01-01',
        },
      ],
      count: 1,
    };

    const mockGet = (axios.create as jest.Mock).mock.results[0].value.get;

    mockGet.mockResolvedValueOnce({ data: mockResponse });

    const result = await fetchNFTList(1, 8, 'name', 'ASC');

    expect(mockGet).toHaveBeenCalledWith('/products', {
      params: {
        page: 1,
        rows: 8,
        sortBy: 'name',
        orderBy: 'ASC',
      },
    });

    expect(result).toEqual(mockResponse);
  });
});
