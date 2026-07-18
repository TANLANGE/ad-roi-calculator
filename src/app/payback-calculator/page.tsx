'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import CalculatorShell from '@/components/calculator-shell';
import CalculatorField from '@/components/calculator-field';
import ResultCard from '@/components/result-card';
import PaybackChart from '@/components/payback-chart';
import LeadForm from '@/components/lead-form';
import { calculatePayback } from '@/lib/calculators';
import { formatCurrency } from '@/lib/format';

export const metadata: Metadata = {
  title: '回本周期计算器 - 免费计算广告投放回本时间 | 投流回本计算器',
  description: '在线免费计算广告投放回本周期。输入初始投入、月广告费、订单数等参数，快速测算需要多长时间收回成本。',
  keywords: ['回本周期计算器', '广告回本时间', '投流回本计算', '投资回报周期', '电商回本计算'],
  openGraph: {
    title: '回本周期计算器 - 免费计算广告投放回本时间',
    description: '在线免费计算广告投放回本周期',
    url: 'https://www.ad-roi.cn/payback-calculator',
    siteName: '投流回本计算器',
    locale: 'zh_CN',
    type: 'website',
  },
};

// 结构化数据
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '回本周期计算器',
  description: '在线免费计算广告投放回本周期',
  url: 'https://www.ad-roi.cn/payback-calculator',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CNY',
  },
};

export default function PaybackCalculatorPage() {
  const [initialInvestment, setInitialInvestment] = useState(3000);
  const [monthlyAdSpend, setMonthlyAdSpend] = useState(1000);
  const [monthlyOrders, setMonthlyOrders] = useState(20);
  const [averageOrderValue, setAverageOrderValue] = useState(200);
  const [grossMarginRate, setGrossMarginRate] = useState(50);
  const [result, setResult] = useState<ReturnType<typeof calculatePayback> | null>(null);

  const handleCalculate = () => {
    const paybackResult = calculatePayback({
      initialInvestment,
      monthlyAdSpend,
      monthlyOrders,
      averageOrderValue,
      grossMarginRate,
    });
    setResult(paybackResult);
  };

  return (
    <>
    <CalculatorShell
      title="回本周期计算器"
      description="输入初始投入和经营参数，测算需要多长时间才能收回成本。"
      left={
        <div className="space-y-5">
          <CalculatorField
            id="initialInvestment"
            label="初始投入"
            suffix="(元)"
            value={initialInvestment}
            onChange={setInitialInvestment}
          />
          <CalculatorField
            id="monthlyAdSpend"
            label="月广告费"
            suffix="(元)"
            value={monthlyAdSpend}
            onChange={setMonthlyAdSpend}
          />
          <CalculatorField
            id="monthlyOrders"
            label="月订单数"
            suffix="(单)"
            value={monthlyOrders}
            onChange={setMonthlyOrders}
          />
          <CalculatorField
            id="averageOrderValue"
            label="客单价"
            suffix="(元)"
            value={averageOrderValue}
            onChange={setAverageOrderValue}
          />
          <CalculatorField
            id="grossMarginRate"
            label="毛利率"
            suffix="(%)"
            value={grossMarginRate}
            onChange={setGrossMarginRate}
            min={0}
            max={100}
            step={0.1}
          />

          <button
            onClick={handleCalculate}
            className="mt-4 w-full rounded-xl bg-cyan-500 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
          >
            开始计算
          </button>
        </div>
      }
      right={
        result ? (
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ResultCard
                label="预计回本时间"
                value={result.paybackMonthsLabel}
                accent
              />
              <ResultCard
                label="月净利润"
                value={formatCurrency(result.monthlyNetProfit)}
                accent
              />
            </div>
            <PaybackChart points={result.cumulativeProfitPoints} />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-slate-500">填写左侧参数后点击&ldquo;开始计算&rdquo;查看结果</p>
          </div>
        )
      }
    />
    {result && <LeadForm source="payback" />}
  </>
  );
}
