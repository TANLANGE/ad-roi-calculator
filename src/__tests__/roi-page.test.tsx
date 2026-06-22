import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RoiCalculatorPage from '@/app/roi-calculator/page';

describe('RoiCalculatorPage', () => {
  it('shows ROI and net profit after clicking calculate', async () => {
    const user = userEvent.setup();
    render(<RoiCalculatorPage />);

    const button = screen.getByRole('button', { name: /开始计算/i });
    await user.click(button);

    // ROI = 100.0%
    expect(screen.getByText('100.0%')).toBeInTheDocument();

    // net profit = ¥1,000 (formatCurrency uses zh-CN CNY)
    expect(screen.getByText(/净利润/)).toBeInTheDocument();
    expect(screen.getByText(/营业额/)).toBeInTheDocument();
    expect(screen.getByText(/获客成本/)).toBeInTheDocument();
  });

  it('displays default values in input fields', () => {
    render(<RoiCalculatorPage />);

    expect(screen.getByLabelText(/广告花费/)).toHaveValue(1000);
    expect(screen.getByLabelText(/订单数/)).toHaveValue(20);
    expect(screen.getByLabelText(/客单价/)).toHaveValue(200);
    expect(screen.getByLabelText(/毛利率/)).toHaveValue(50);
  });

  it('recalculates when inputs change and button is clicked', async () => {
    const user = userEvent.setup();
    render(<RoiCalculatorPage />);

    // clear adSpend and type a new value
    const adSpendInput = screen.getByLabelText(/广告花费/);
    await user.clear(adSpendInput);
    await user.type(adSpendInput, '500');

    const button = screen.getByRole('button', { name: /开始计算/i });
    await user.click(button);

    // With adSpend=500, orders=20, aov=200, margin=50%
    // revenue=4000, netProfit=1500, roiRate = (1500/500)*100 = 300%
    expect(screen.getByText('300.0%')).toBeInTheDocument();
  });
});
