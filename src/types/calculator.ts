export type RoiInput = {
  adSpend: number;
  orders: number;
  averageOrderValue: number;
  grossMarginRate: number;
};

export type PaybackInput = {
  initialInvestment: number;
  monthlyAdSpend: number;
  monthlyOrders: number;
  averageOrderValue: number;
  grossMarginRate: number;
};

export type ProfitInput = {
  sellingPrice: number;
  unitCost: number;
  quantity: number;
  adSpend: number;
};

export type RoiResult = {
  revenue: number;
  grossProfit: number;
  netProfit: number;
  roiRate: number;
  customerAcquisitionCost: number;
};

export type PaybackStatus = 'recoverable' | 'notRecoverable' | 'noInvestment';

export type PaybackPoint = {
  month: number;
  profit: number;
};

export type PaybackResult = {
  monthlyNetProfit: number;
  paybackMonths: number;
  cumulativeProfitPoints: PaybackPoint[];
  paybackStatus: PaybackStatus;
  isPaybackAchievable: boolean;
  displayPaybackMonths: number | null;
  paybackMonthsLabel: string;
};

export type ProfitResult = {
  revenue: number;
  totalCost: number;
  grossProfit: number;
  netProfit: number;
  grossMarginRate: number;
  unitProfit: number;
};
