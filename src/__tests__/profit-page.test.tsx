import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProfitCalculatorPage from '@/app/profit-calculator/page';

describe('ProfitCalculatorPage', () => {
  it('displays default values in input fields', () => {
    render(<ProfitCalculatorPage />);

    expect(screen.getByLabelText(/售价/)).toHaveValue(199);
    expect(screen.getByLabelText(/单件成本/)).toHaveValue(80);
    expect(screen.getByLabelText(/数量/)).toHaveValue(10);
    expect(screen.getByLabelText(/广告费/)).toHaveValue(300);
  });

  it('shows net profit ¥890 and margin 59.8% after clicking calculate', async () => {
    const user = userEvent.setup();
    render(<ProfitCalculatorPage />);

    const button = screen.getByRole('button', { name: /开始计算/i });
    await user.click(button);

    // sellingPrice=199, unitCost=80, quantity=10, adSpend=300
    // revenue = 1990, totalCost = 800, grossProfit = 1190
    // netProfit = 1190 - 300 = 890
    // grossMarginRate = (1190/1990)*100 = 59.8%
    // unitProfit = 890/10 = 89
    expect(screen.getByText(/净利润/)).toBeInTheDocument();
    expect(screen.getByText(/毛利率/)).toBeInTheDocument();
    expect(screen.getByText(/营业额/)).toBeInTheDocument();
    expect(screen.getByText(/单件利润/)).toBeInTheDocument();

    // Verify the formatted currency value for net profit = 890
    expect(screen.getByText(/¥890/)).toBeInTheDocument();

    // Verify the formatted percentage for gross margin rate = 59.8%
    expect(screen.getByText('59.8%')).toBeInTheDocument();
  });

  it('does not display result before clicking calculate', () => {
    render(<ProfitCalculatorPage />);

    expect(screen.queryByText(/净利润/)).not.toBeInTheDocument();
    expect(screen.getByText(/填写左侧参数后点击/)).toBeInTheDocument();
  });

  it('recalculates when inputs change and button is clicked', async () => {
    const user = userEvent.setup();
    render(<ProfitCalculatorPage />);

    // Change quantity to 20
    const quantityInput = screen.getByLabelText(/数量/);
    await user.clear(quantityInput);
    await user.type(quantityInput, '20');

    const button = screen.getByRole('button', { name: /开始计算/i });
    await user.click(button);

    // revenue = 199 * 20 = 3980, totalCost = 80 * 20 = 1600
    // grossProfit = 2380, netProfit = 2380 - 300 = 2080
    expect(screen.getByText(/¥2,080/)).toBeInTheDocument();
  });
});
