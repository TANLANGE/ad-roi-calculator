import Link from 'next/link';
import Hero from '@/components/hero';
import CtaBanner from '@/components/cta-banner';
import { guides as allGuides } from '@/lib/guides';

const tools = [
  {
    title: 'ROI 计算器',
    description: '输入广告花费、订单数和客单价，快速得出投入产出比和获客成本。',
    href: '/roi-calculator',
  },
  {
    title: '回本周期计算',
    description: '测算初始投入需要多长时间才能通过广告利润收回。',
    href: '/payback-calculator',
  },
  {
    title: '毛利计算',
    description: '计算单品售价、成本与广告费的综合毛利和利润率。',
    href: '/profit-calculator',
  },
];

const guides = allGuides.map((g) => ({
  title: g.title,
  href: `/guides/${g.slug}`,
}));

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 核心工具卡片 */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-slate-50 sm:text-3xl">
          核心计算工具
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
          三大工具覆盖投流核心指标，免费使用，即算即得。
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group rounded-2xl border border-cyan-400/15 bg-slate-900 p-8 transition-all hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-950/20"
            >
              <h3 className="text-lg font-semibold text-slate-50 group-hover:text-cyan-300">
                {tool.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 热门指南列表 */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-2xl font-bold text-slate-50 sm:text-3xl">
          热门投流指南
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
          深入了解投流技巧，提升每一分广告预算的效果。
        </p>

        <ul className="mx-auto mt-10 max-w-2xl space-y-4">
          {guides.map((guide) => (
            <li key={guide.href}>
              <Link
                href={guide.href}
                className="flex items-center justify-between rounded-xl border border-cyan-400/10 bg-slate-900/60 px-6 py-4 transition-all hover:border-cyan-400/30 hover:bg-slate-900"
              >
                <span className="text-sm text-slate-200">{guide.title}</span>
                <span className="text-xs text-cyan-400">阅读 →</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBanner />
    </>
  );
}
