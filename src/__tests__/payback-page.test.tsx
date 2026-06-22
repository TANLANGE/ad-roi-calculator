import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PaybackCalculatorPage from '@/app/payback-calculator/page';

// Mock Chart.js canvas to avoid jsdom canvas errors
vi.mock('@/components/payback-chart', () => ({
  default({ points }: { points: { month: number; profit: number }[] }) {
    return <div data-testid="payback-chart">{`Chart with ${points.length} points`}</div>;
  },
}));

describe('PaybackCalculatorPage', () => {
  it('displays default values in input fields', () => {
    render(<PaybackCalculatorPage />);

    expect(screen.getByLabelText(/初始投入/)).toHaveValue(3000);
    expect(screen.getByLabelText(/月广告费/)).toHaveValue(1000);
    expect(screen.getByLabelText(/月订单数/)).toHaveValue(20);
    expect(screen.getByLabelText(/客单价/)).toHaveValue(200);
    expect(screen.getByLabelText(/毛利率/)).toHaveValue(50);
  });

  it('shows payback period and monthly net profit after clicking calculate', async () => {
    const user = userEvent.setup();
    render(<PaybackCalculatorPage />);

    const button = screen.getByRole('button', { name: /开始计算/i });
    await user.click(button);

    // With defaults: investment=3000, adSpend=1000, orders=20, aov=200, margin=50%
    // monthlyNetProfit = 20*200*0.5 - 1000 = 1000
    // paybackMonths = ceil(3000/1000) = 3 -> paybackMonthsLabel = "3个月"
    expect(screen.getByText('3个月')).toBeInTheDocument();
    expect(screen.getByText(/月净利润/)).toBeInTheDocument();
    expect(screen.getByText(/预计回本时间/)).toBeInTheDocument();

    // PaybackChart should render with 12 cumulative points
    expect(screen.getByTestId('payback-chart')).toHaveTextContent('12 points');
  });

  it('shows "无法回本" when monthly net profit is not positive', async () => {
    const user = userEvent.setup();
    render(<PaybackCalculatorPage />);

    // Set monthly orders to 0 so net profit <= 0
    const ordersInput = screen.getByLabelText(/月订单数/);
    await user.clear(ordersInput);
    await user.type(ordersInput, '0');

    const button = screen.getByRole('button', { name: /开始计算/i });
    await user.click(button);

    expect(screen.getByText('无法回本')).toBeInTheDocument();
  });

  it('recalculates when inputs change and button is clicked', async () => {
    const user = userEvent.setup();
    render(<PaybackCalculatorPage />);

    // Change initial investment to 6000
    const investmentInput = screen.getByLabelText(/初始投入/);
    await user.clear(investmentInput);
    await user.type(investmentInput, '6000');

    const button = screen.getByRole('button', { name: /开始计算/i });
    await user.click(button);

    // net profit = 1000, payback = ceil(6000/1000) = 6
    expect(screen.getByText('6个月')).toBeInTheDocument();
  });

  it('does not display result before clicking calculate', () => {
    render(<PaybackCalculatorPage />);

    expect(screen.queryByText(/预计回本时间/)).not.toBeInTheDocument();
    expect(screen.getByText(/填写左侧参数后点击/)).toBeInTheDocument();
  });
});
