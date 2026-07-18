'use client';

import { useState } from 'react';
import CalculatorShell from '@/components/calculator-shell';
import CalculatorField from '@/components/calculator-field';
import ResultCard from '@/components/result-card';
import LeadForm from '@/components/lead-form';
import { calculateProfit } from '@/lib/calculators';
import { formatCurrency, formatPercent } from '@/lib/format';

export default function ProfitCalculatorPage() {
  const [sellingPrice, setSellingPrice] = useState(199);
  const [unitCost, setUnitCost] = useState(80);
  const [quantity, setQuantity] = useState(10);
  const [adSpend, setAdSpend] = useState(300);
  const [result, setResult] = useState<ReturnType<typeof calculateProfit> | null>(null);

  const handleCalculate = () => {
    const profitResult = calculateProfit({
      sellingPrice,
      unitCost,
      quantity,
      adSpend,
    });
    setResult(profitResult);
  };

  return (
    <>
    <CalculatorShell
      title="毛利计算器"
      description="输入售价、成本、数量和广告费，快速计算单品毛利和利润率。"
      left={
        <div className="space-y-5">
          <CalculatorField
            id="sellingPrice"
            label="售价"
            suffix="(元)"
            value={sellingPrice}
            onChange={setSellingPrice}
          />
          <CalculatorField
            id="unitCost"
            label="单件成本"
            suffix="(元)"
            value={unitCost}
            onChange={setUnitCost}
          />
          <CalculatorField
            id="quantity"
            label="数量"
            suffix="(件)"
            value={quantity}
            onChange={setQuantity}
          />
          <CalculatorField
            id="adSpend"
            label="广告费"
            suffix="(元)"
            value={adSpend}
            onChange={setAdSpend}
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
            <ResultCard label="净利润" value={formatCurrency(result.netProfit)} accent />
            <ResultCard label="毛利率" value={formatPercent(result.grossMarginRate)} accent />
            <ResultCard label="营业额" value={formatCurrency(result.revenue)} />
            <ResultCard label="单件利润" value={formatCurrency(result.unitProfit)} />
          </div>
        ) : (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-slate-500">填写左侧参数后点击&ldquo;开始计算&rdquo;查看结果</p>
          </div>
        )
      }
    />
    {result && <LeadForm source="profit" />}
  </>
  );
}
