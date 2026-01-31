import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@/pages/index';
import { useNFTList } from '@/hooks/useNFTList';

jest.mock('@/hooks/useNFTList');

jest.mock('@/components/Header/Header', () => ({
  Header: () => <div>Header</div>,
}));

jest.mock('@/components/Footer/Footer', () => ({
  Footer: () => <div>Footer</div>,
}));

jest.mock('@/components/NFTGrid/NFTGrid', () => ({
  NFTGrid: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="nft-grid">{children}</div>
  ),
}));

jest.mock('@/components/NFTCard/NFTCard', () => ({
  NFTCard: ({ nft }: any) => (
    <div data-testid="nft-card">{nft.name}</div>
  ),
}));

jest.mock('@/components/LoadMore/LoadMore', () => ({
  LoadMore: ({ onLoadMore }: any) => (
    <button onClick={onLoadMore}>Load more</button>
  ),
}));

describe('Home page', () => {
  beforeEach(() => {
    (useNFTList as jest.Mock).mockReturnValue({
      products: [
        { id: 1, name: 'NFT 1' },
        { id: 2, name: 'NFT 2' },
      ],
      totalCount: 2,
      isLoading: false,
      error: null,
    });
  });

  it('renders header, footer and NFT list', () => {
    render(<Home />);

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
    expect(screen.getAllByTestId('nft-card')).toHaveLength(2);
  });

  it('loads more items when clicking Load more', () => {
    render(<Home />);

    fireEvent.click(screen.getByText('Load more'));
    expect(useNFTList).toHaveBeenCalled();
  });
});
