import Link from 'next/link';

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-[1100px] items-center gap-16 px-8 pb-20 pt-24 lg:grid-cols-2">
      <div>
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#b45309]">
          免费 · 无需注册
        </span>
        <h1 className="mt-4 text-5xl font-bold leading-[1.1] tracking-tight text-[#1a1a1a] sm:text-6xl">
          让每一分<br />广告费都<br />
          <span className="text-[#b45309]">有据可依</span>
        </h1>
        <p className="mt-5 max-w-[380px] text-base leading-relaxed text-[#78716c]">
          专业的广告投放 ROI 分析工具，帮助电商卖家做出更明智的投流决策。
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="/roi-calculator" className="inline-flex items-center rounded-md bg-[#1a1a1a] px-7 py-3 text-sm font-semibold text-[#fdfbf7] transition-colors hover:bg-[#b45309]">
            开始计算
          </Link>
          <Link href="/guides" className="inline-flex items-center rounded-md border border-[#d6d3d1] bg-transparent px-7 py-3 text-sm font-medium text-[#1a1a1a] transition-colors hover:border-[#1a1a1a]">
            查看指南
          </Link>
        </div>
      </div>

      {/* Inline calculator preview */}
      <div className="rounded-2xl border border-[#e8e4d9] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        <div className="space-y-4">
          {[
            { label: '广告花费', suffix: '元', value: '1000' },
            { label: '订单数', suffix: '单', value: '20' },
            { label: '客单价', suffix: '元', value: '200' },
            { label: '毛利率', suffix: '%', value: '50' },
          ].map((field) => (
            <div key={field.label}>
              <label className="mb-1 block text-xs font-semibold text-[#78716c]">
                {field.label} <span className="font-normal text-[#a8a29e]">({field.suffix})</span>
              </label>
              <input
                type="number"
                defaultValue={field.value}
                readOnly
                className="w-full rounded-lg border border-[#e8e4d9] bg-[#faf8f5] px-3.5 py-2.5 text-sm font-medium text-[#1a1a1a] outline-none"
              />
            </div>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {[
            { label: 'ROI', value: '150%', hl: true },
            { label: '净利润', value: '¥1,500', hl: true },
            { label: '营业额', value: '¥4,000', hl: false },
            { label: '获客成本', value: '¥50', hl: false },
          ].map((item) => (
            <div key={item.label} className={`rounded-lg p-3 text-center ${item.hl ? 'bg-[#fef7ed]' : 'bg-[#faf8f5]'}`}>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-[#a8a29e]">{item.label}</div>
              <div className={`mt-1 text-xl font-bold tabular-nums ${item.hl ? 'text-[#92400e]' : 'text-[#1a1a1a]'}`}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
