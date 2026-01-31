import { render, screen, fireEvent } from '@testing-library/react';
import { NFTCard } from '@/components/NFTCard/NFTCard';
import { NFT } from '@/types/nft.types';
import { addItem, removeItem } from '@/store/cartSlice';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

jest.mock('@/store/cartSlice', () => ({
  addItem: jest.fn(),
  removeItem: jest.fn(),
}));

import { useSelector } from 'react-redux';

describe('NFTCard', () => {
  const nftMock: NFT = {
    id: 1,
    name: 'NFT Test',
    description: 'Descrição do NFT',
    image: '/nft.png',
    price: '182.00000000',
    createdAt: '2024-01-01',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders NFT data correctly', () => {
    (useSelector as unknown as jest.Mock).mockReturnValue(false);

    render(<NFTCard nft={nftMock} />);

    expect(screen.getByText('NFT Test')).toBeInTheDocument();
    expect(screen.getByText('Descrição do NFT')).toBeInTheDocument();
    expect(screen.getByText('182 ETH')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /comprar/i })).toBeInTheDocument();
  });

  it('dispatches addItem when clicking buy button', () => {
    (useSelector as unknown as jest.Mock).mockReturnValue(false);

    render(<NFTCard nft={nftMock} />);

    fireEvent.click(screen.getByRole('button', { name: /comprar/i }));

    expect(addItem).toHaveBeenCalledWith(nftMock);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('dispatches removeItem when NFT is already in cart', () => {
    (useSelector as unknown as jest.Mock).mockReturnValue(true);

    render(<NFTCard nft={nftMock} />);

    fireEvent.click(
      screen.getByRole('button', { name: /adicionado ao carrinho/i })
    );

    expect(removeItem).toHaveBeenCalledWith(nftMock.id);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
