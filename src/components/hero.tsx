import Link from 'next/link';

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 sm:pt-24">
      <div className="max-w-2xl">
        <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-3 py-0.5 text-xs font-medium tracking-wide text-amber-700">
          免费 · 无需注册
        </span>
        <h1 className="mt-5 text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl">
          投流回本
          <br />
          <span className="text-amber-500">计算器</span>
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-500">
          快速测算 ROI、回本周期和毛利，让每一分广告费都有据可依。
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            href="/roi-calculator"
            className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            开始计算
          </Link>
          <Link
            href="/guides"
            className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
          >
            查看指南
          </Link>
        </div>
      </div>
    </section>
  );
}
