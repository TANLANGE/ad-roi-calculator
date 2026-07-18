import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-3xl rounded-2xl border border-amber-100 bg-amber-50 px-8 py-12 text-center">
        <h2 className="text-xl font-semibold text-slate-900">立即开始免费计算</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">
          无需注册、完全免费，三步即可获得投流 ROI 和回本周期分析结果。
        </p>
        <Link
          href="/roi-calculator"
          className="mt-6 inline-flex items-center rounded-lg bg-slate-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
        >
          免费使用 ROI 计算器
        </Link>
      </div>
    </section>
  );
}
