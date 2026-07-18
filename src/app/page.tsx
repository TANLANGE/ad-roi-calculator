import Link from 'next/link';
import Hero from '@/components/hero';
import CtaBanner from '@/components/cta-banner';
import { guides as allGuides } from '@/lib/guides';

const tools = [
  { title: 'ROI 计算器', desc: '输入广告花费、订单数和客单价，快速得出投入产出比和获客成本。', href: '/roi-calculator', primary: true },
  { title: '回本周期', desc: '测算初始投入需要多长时间才能通过广告利润收回。', href: '/payback-calculator' },
  { title: '毛利计算', desc: '计算单品售价、成本与广告费的综合毛利和利润率。', href: '/profit-calculator' },
];

const guides = allGuides.slice(0, 5).map((g) => ({ title: g.title, href: `/guides/${g.slug}` }));

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 核心工具 — 不等权卡片 */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className={
                tool.primary
                  ? 'group relative col-span-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-amber-200 hover:shadow-md sm:col-span-1'
                  : 'group rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:border-slate-200 hover:bg-white hover:shadow-sm'
              }
            >
              <h3 className="text-base font-semibold text-slate-900 group-hover:text-amber-600">
                {tool.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                {tool.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 热门指南 */}
      <section className="border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-lg font-semibold text-slate-900">热门投流指南</h2>
          <p className="mt-1 text-sm text-slate-500">深入了解投流技巧，提升每一分广告预算的效果。</p>
          <ul className="mt-8 divide-y divide-slate-100">
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link
                  href={guide.href}
                  className="flex items-center justify-between py-3 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                >
                  {guide.title}
                  <span className="text-slate-300">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
