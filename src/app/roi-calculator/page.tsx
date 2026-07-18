'use client';

import { useState } from 'react';
import CalculatorShell from '@/components/calculator-shell';
import CalculatorField from '@/components/calculator-field';
import ResultCard from '@/components/result-card';
import LeadForm from '@/components/lead-form';
import ShareButtons from '@/components/share-buttons';
import { calculateRoi } from '@/lib/calculators';
import { formatCurrency, formatPercent } from '@/lib/format';

export default function RoiCalculatorPage() {
  const [adSpend, setAdSpend] = useState(1000);
  const [orders, setOrders] = useState(20);
  const [averageOrderValue, setAverageOrderValue] = useState(200);
  const [grossMarginRate, setGrossMarginRate] = useState(50);
  const [result, setResult] = useState<ReturnType<typeof calculateRoi> | null>(null);

  const handleCalculate = () => {
    const roiResult = calculateRoi({
      adSpend,
      orders,
      averageOrderValue,
      grossMarginRate,
    });
    setResult(roiResult);
  };

  return (
    <>
    <CalculatorShell
      title="ROI 计算器"
      description="输入广告花费、订单数、客单价和毛利率，快速计算投入产出比。"
      left={
        <div className="space-y-5">
          <CalculatorField
            id="adSpend"
            label="广告花费"
            suffix="(元)"
            value={adSpend}
            onChange={setAdSpend}
          />
          <CalculatorField
            id="orders"
            label="订单数"
            suffix="(单)"
            value={orders}
            onChange={setOrders}
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
          <div className="grid gap-4 sm:grid-cols-2">
            <ResultCard label="ROI" value={formatPercent(result.roiRate)} accent />
            <ResultCard label="净利润" value={formatCurrency(result.netProfit)} accent />
            <ResultCard label="营业额" value={formatCurrency(result.revenue)} />
            <ResultCard label="获客成本" value={formatCurrency(result.customerAcquisitionCost)} />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-slate-500">填写左侧参数后点击&ldquo;开始计算&rdquo;查看结果</p>
          </div>
        )
      }
    />
    {result && <LeadForm source="roi" />}
    <ShareButtons title="投流ROI计算器 - 免费计算广告投放回报率" description="快速计算抖音、电商广告投放的ROI、净利润和获客成本" />
  </>
  );
}
