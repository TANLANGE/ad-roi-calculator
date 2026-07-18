import Link from 'next/link';
import Hero from '@/components/hero';
import { guides as allGuides } from '@/lib/guides';

const tools = [
  { num: '01', title: 'ROI 计算器', desc: '输入广告花费、订单数和客单价，快速得出投入产出比和获客成本。', href: '/roi-calculator' },
  { num: '02', title: '回本周期', desc: '测算初始投入需要多长时间才能通过广告利润收回。', href: '/payback-calculator' },
  { num: '03', title: '毛利计算', desc: '计算单品售价、成本与广告费的综合毛利和利润率。', href: '/profit-calculator' },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* 核心工具 */}
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

      {/* 投流指南 — 卡片网格，全部8篇可见 */}
      <section className="mx-auto max-w-[1100px] border-t border-[#e8e4d9] px-8 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">投流指南</h2>
            <p className="mt-2 text-sm text-[#a8a29e]">从入门到精通，覆盖抖音、小红书、拼多多等主流平台。</p>
          </div>
          <Link href="/guides" className="hidden text-sm font-medium text-[#b45309] hover:text-[#92400e] sm:block">
            浏览全部 →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {allGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group rounded-xl border border-[#e8e4d9] bg-white p-5 transition-all hover:border-[#b45309] hover:shadow-[0_4px_20px_rgba(180,83,9,0.06)]"
            >
              <h3 className="text-sm font-semibold leading-snug text-[#1a1a1a] group-hover:text-[#b45309]">
                {guide.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#a8a29e] line-clamp-2">
                {guide.summary}
              </p>
              <span className="mt-3 inline-block text-xs font-medium text-[#b45309] opacity-0 transition-opacity group-hover:opacity-100">
                阅读 →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link href="/guides" className="text-sm font-medium text-[#b45309] hover:text-[#92400e]">
            浏览全部 8 篇指南 →
          </Link>
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
