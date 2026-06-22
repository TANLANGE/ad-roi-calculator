import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:py-28">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />

      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          免费在线计算
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
          投流回本计算器
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
          快速测算广告投放 ROI、回本周期和单品毛利，
          帮你做出更明智的投流决策，让每一分钱都花在刀刃上。
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/roi-calculator"
            className="inline-flex items-center rounded-xl bg-cyan-500 px-8 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
          >
            开始计算 ROI
          </Link>
          <Link
            href="/guides"
            className="inline-flex items-center rounded-xl border border-cyan-400/30 px-8 py-3 text-sm font-semibold text-cyan-300 transition-colors hover:border-cyan-400/60 hover:text-cyan-200"
          >
            查看投流指南
          </Link>
        </div>
      </div>
    </section>
  );
}
