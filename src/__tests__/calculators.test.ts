import {
  calculatePayback,
  calculateProfit,
  calculateRoi,
} from '@/lib/calculators';

describe('calculateRoi', () => {
  it('returns roi, revenue, profit and cac', () => {
    expect(
      calculateRoi({
        adSpend: 1000,
        orders: 20,
        averageOrderValue: 200,
        grossMarginRate: 50,
      }),
    ).toEqual({
      revenue: 4000,
      grossProfit: 2000,
      netProfit: 1000,
      roiRate: 100,
      customerAcquisitionCost: 50,
    });
  });

  it('handles zero ad spend and zero orders without invalid ratios', () => {
    expect(
      calculateRoi({
        adSpend: 0,
        orders: 0,
        averageOrderValue: 200,
        grossMarginRate: 50,
      }),
    ).toEqual({
      revenue: 0,
      grossProfit: 0,
      netProfit: 0,
      roiRate: 0,
      customerAcquisitionCost: 0,
    });
  });

  it('normalizes negative values and out-of-range percentages', () => {
    expect(
      calculateRoi({
        adSpend: -100,
        orders: -2,
        averageOrderValue: 199,
        grossMarginRate: 180,
      }),
    ).toEqual({
      revenue: 0,
      grossProfit: 0,
      netProfit: 0,
      roiRate: 0,
      customerAcquisitionCost: 0,
    });
  });
});

describe('calculatePayback', () => {
  it('returns months and cumulative points', () => {
    const result = calculatePayback({
      initialInvestment: 3000,
      monthlyAdSpend: 1000,
      monthlyOrders: 20,
      averageOrderValue: 200,
      grossMarginRate: 50,
    });

    expect(result.paybackMonths).toBe(3);
    expect(result.monthlyNetProfit).toBe(1000);
    expect(result.cumulativeProfitPoints).toHaveLength(12);
    expect(result.cumulativeProfitPoints[2]).toEqual({ month: 3, profit: 0 });
    expect(result.paybackStatus).toBe('recoverable');
    expect(result.paybackMonthsLabel).toBe('3个月');
  });

  it('keeps compatible Infinity while providing business fields for non-recoverable results', () => {
    const result = calculatePayback({
      initialInvestment: 3000,
      monthlyAdSpend: 1000,
      monthlyOrders: 0,
      averageOrderValue: 200,
      grossMarginRate: 50,
    });

    expect(result.monthlyNetProfit).toBeLessThanOrEqual(0);
    expect(result.paybackMonths).toBe(Infinity);
    expect(result.paybackStatus).toBe('notRecoverable');
    expect(result.isPaybackAchievable).toBe(false);
    expect(result.paybackMonthsLabel).toBe('无法回本');
  });

  it('normalizes negative values and out-of-range percentages', () => {
    const result = calculatePayback({
      initialInvestment: -5000,
      monthlyAdSpend: -100,
      monthlyOrders: -3,
      averageOrderValue: 200,
      grossMarginRate: 140,
    });

    expect(result).toMatchObject({
      monthlyNetProfit: 0,
      paybackMonths: 0,
      paybackStatus: 'noInvestment',
      isPaybackAchievable: true,
      paybackMonthsLabel: '无需回本',
    });
    expect(result.cumulativeProfitPoints[0]).toEqual({ month: 1, profit: 0 });
  });
});

describe('calculateProfit', () => {
  it('returns gross margin, net profit and unit profit', () => {
    expect(
      calculateProfit({
        sellingPrice: 199,
        unitCost: 80,
        quantity: 10,
        adSpend: 300,
      }),
    ).toEqual({
      revenue: 1990,
      totalCost: 800,
      grossProfit: 1190,
      netProfit: 890,
      grossMarginRate: 59.8,
      unitProfit: 89,
    });
  });

  it('returns zero unit profit when quantity is zero', () => {
    expect(
      calculateProfit({
        sellingPrice: 199,
        unitCost: 80,
        quantity: 0,
        adSpend: 300,
      }),
    ).toEqual({
      revenue: 0,
      totalCost: 0,
      grossProfit: 0,
      netProfit: -300,
      grossMarginRate: 0,
      unitProfit: 0,
    });
  });

  it('normalizes negative values to avoid obviously wrong profit results', () => {
    expect(
      calculateProfit({
        sellingPrice: -199,
        unitCost: -80,
        quantity: -10,
        adSpend: -300,
      }),
    ).toEqual({
      revenue: 0,
      totalCost: 0,
      grossProfit: 0,
      netProfit: 0,
      grossMarginRate: 0,
      unitProfit: 0,
    });
  });
});
