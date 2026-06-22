import type {
  PaybackInput,
  PaybackResult,
  ProfitInput,
  ProfitResult,
  RoiInput,
  RoiResult,
} from '@/types/calculator';

const round = (value: number) => Number(value.toFixed(1));
const normalizeNonNegative = (value: number) => {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.max(0, value);
};

const normalizePercentage = (value: number) => {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.min(100, Math.max(0, value));
};

export function calculateRoi(input: RoiInput): RoiResult {
  const adSpend = normalizeNonNegative(input.adSpend);
  const orders = normalizeNonNegative(input.orders);
  const averageOrderValue = normalizeNonNegative(input.averageOrderValue);
  const grossMarginRate = normalizePercentage(input.grossMarginRate);

  const revenue = orders * averageOrderValue;
  const grossProfit = revenue * (grossMarginRate / 100);
  const netProfit = grossProfit - adSpend;
  const roiRate = adSpend === 0 ? 0 : (netProfit / adSpend) * 100;
  const customerAcquisitionCost = orders === 0 ? 0 : adSpend / orders;

  return {
    revenue,
    grossProfit,
    netProfit,
    roiRate: round(roiRate),
    customerAcquisitionCost: round(customerAcquisitionCost),
  };
}

export function calculatePayback(input: PaybackInput): PaybackResult {
  const initialInvestment = normalizeNonNegative(input.initialInvestment);
  const monthlyAdSpend = normalizeNonNegative(input.monthlyAdSpend);
  const monthlyOrders = normalizeNonNegative(input.monthlyOrders);
  const averageOrderValue = normalizeNonNegative(input.averageOrderValue);
  const grossMarginRate = normalizePercentage(input.grossMarginRate);

  const revenue = monthlyOrders * averageOrderValue;
  const grossProfit = revenue * (grossMarginRate / 100);
  const monthlyNetProfit = grossProfit - monthlyAdSpend;
  const paybackMonths =
    initialInvestment === 0
      ? 0
      : monthlyNetProfit <= 0
        ? Infinity
        : Math.ceil(initialInvestment / monthlyNetProfit);
  const paybackStatus =
    initialInvestment === 0
      ? 'noInvestment'
      : monthlyNetProfit <= 0
        ? 'notRecoverable'
        : 'recoverable';
  const isPaybackAchievable = paybackStatus !== 'notRecoverable';
  const displayPaybackMonths = Number.isFinite(paybackMonths) ? paybackMonths : null;
  const paybackMonthsLabel =
    paybackStatus === 'noInvestment'
      ? '无需回本'
      : paybackStatus === 'notRecoverable'
        ? '无法回本'
        : `${paybackMonths}个月`;

  const cumulativeProfitPoints = Array.from({ length: 12 }, (_, index) => ({
    month: index + 1,
    profit: monthlyNetProfit * (index + 1) - initialInvestment,
  }));

  return {
    monthlyNetProfit,
    paybackMonths,
    cumulativeProfitPoints,
    paybackStatus,
    isPaybackAchievable,
    displayPaybackMonths,
    paybackMonthsLabel,
  };
}

export function calculateProfit(input: ProfitInput): ProfitResult {
  const sellingPrice = normalizeNonNegative(input.sellingPrice);
  const unitCost = normalizeNonNegative(input.unitCost);
  const quantity = normalizeNonNegative(input.quantity);
  const adSpend = normalizeNonNegative(input.adSpend);

  const revenue = sellingPrice * quantity;
  const totalCost = unitCost * quantity;
  const grossProfit = revenue - totalCost;
  const netProfit = grossProfit - adSpend;
  const grossMarginRate = revenue === 0 ? 0 : (grossProfit / revenue) * 100;
  const unitProfit = quantity === 0 ? 0 : netProfit / quantity;

  return {
    revenue,
    totalCost,
    grossProfit,
    netProfit,
    grossMarginRate: round(grossMarginRate),
    unitProfit: round(unitProfit),
  };
}
