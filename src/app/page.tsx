import Link from 'next/link';
import Hero from '@/components/hero';
import { guides as allGuides } from '@/lib/guides';

const tools = [
  { num: '01', title: 'ROI 计算器', desc: '输入广告花费、订单数和客单价，快速得出投入产出比和获客成本。', href: '/roi-calculator' },
  { num: '02', title: '回本周期', desc: '测算初始投入需要多长时间才能通过广告利润收回。', href: '/payback-calculator' },
  { num: '03', title: '毛利计算', desc: '计算单品售价、成本与广告费的综合毛利和利润率。', href: '/profit-calculator' },
];

const guides = allGuides.map((g) => ({ title: g.title, href: `/guides/${g.slug}` }));

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 核心工具 — 编号卡片 */}
      <section className="mx-auto max-w-[1100px] border-t border-[#e8e4d9] px-8 py-20">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">核心计算工具</h2>
        <p className="mt-2 text-sm text-[#a8a29e]">三大工具覆盖投流核心指标，免费使用，即算即得。</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="group rounded-xl border border-[#e8e4d9] bg-white p-8 transition-all hover:border-[#b45309] hover:shadow-[0_8px_30px_rgba(180,83,9,0.06)]">
              <div className="text-5xl font-bold text-[#fef3c7]">{tool.num}</div>
              <h3 className="mt-3 text-lg font-semibold text-[#1a1a1a]">{tool.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#78716c]">{tool.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 热门指南 — 两栏布局 */}
      <section className="mx-auto max-w-[1100px] px-8 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">热门投流指南</h2>
            <p className="mt-2 text-sm text-[#a8a29e]">深入了解投流技巧，提升每一分广告预算的效果。</p>
          </div>
          <div>
            {guides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="group flex items-center justify-between border-b border-[#e8e4d9] py-4 text-sm font-medium text-[#1a1a1a] transition-all hover:pl-2 hover:text-[#b45309]">
                {guide.title}
                <span className="text-[#d6d3d1] group-hover:text-[#b45309]">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1100px] px-8 pb-20">
        <div className="rounded-2xl border border-[#e8e4d9] bg-white px-8 py-12 text-center">
          <h2 className="text-xl font-bold text-[#1a1a1a]">立即开始免费计算</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#78716c]">
            无需注册、完全免费，三步即可获得 ROI 和回本周期分析结果。
          </p>
          <Link href="/roi-calculator" className="mt-6 inline-flex items-center rounded-md bg-[#1a1a1a] px-6 py-2.5 text-sm font-semibold text-[#fdfbf7] transition-colors hover:bg-[#b45309]">
            免费使用 ROI 计算器
          </Link>
        </div>
      </section>
    </>
  );
}
