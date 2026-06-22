import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('HomePage', () => {
  beforeEach(() => {
    render(<HomePage />);
  });

  it('renders the main heading', () => {
    expect(
      screen.getByRole('heading', { name: /投流回本计算器/i }),
    ).toBeInTheDocument();
  });

  it('provides a link to the ROI calculator', () => {
    const roiLink = screen.getByRole('link', { name: /开始计算 roi/i });
    expect(roiLink).toBeInTheDocument();
    expect(roiLink).toHaveAttribute('href', '/roi-calculator');
  });

  it('renders the hot guides section', () => {
    expect(screen.getByText(/热门投流指南/i)).toBeInTheDocument();
  });
});
