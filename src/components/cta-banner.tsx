import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-cyan-500/20 via-cyan-600/10 to-cyan-500/20 p-10 text-center shadow-lg shadow-cyan-950/10">
        <h2 className="text-2xl font-bold text-slate-50 sm:text-3xl">
          立即开始免费计算
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">
          无需注册、完全免费，三步即可获得投流 ROI 和回本周期分析结果。
        </p>
        <Link
          href="/roi-calculator"
          className="mt-8 inline-flex items-center rounded-xl bg-cyan-500 px-10 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
        >
          免费使用 ROI 计算器
        </Link>
      </div>
    </section>
  );
}
