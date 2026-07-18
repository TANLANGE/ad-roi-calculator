import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我们 — 投流回本计算器',
  description:
    '了解投流回本计算器的创建初衷、团队理念和发展方向。我们致力于为电商卖家提供免费、专业的广告投放计算工具。',
  keywords: ['关于投流计算器', '电商计算工具', '广告投放工具', '免费ROI计算'],
  openGraph: {
    title: '关于我们 — 投流回本计算器',
    description: '了解投流回本计算器的创建初衷、团队理念和发展方向',
    url: 'https://www.ad-roi.cn/about',
    siteName: '投流回本计算器',
    locale: 'zh_CN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ad-roi.cn/about',
  },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-center text-2xl font-bold text-slate-50 sm:text-3xl">
        关于我们
      </h1>

      <div className="mt-12 space-y-8 text-slate-300 leading-7">
        <div className="rounded-2xl border border-cyan-400/15 bg-slate-900 p-8">
          <h2 className="text-lg font-semibold text-slate-50">我们的初衷</h2>
          <p className="mt-3 text-sm">
            投流回本计算器诞生于一个简单的观察：许多电商卖家在投放广告时，
            缺乏简单有效的工具来快速评估投放效果。我们希望通过免费、易用的在线计算工具，
            帮助每一位卖家做出更理性的投流决策。
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/15 bg-slate-900 p-8">
          <h2 className="text-lg font-semibold text-slate-50">核心功能</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>
                <strong className="text-slate-100">ROI 计算器</strong> —
                快速评估广告投放的投入产出比，判断投放是否盈利。
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>
                <strong className="text-slate-100">回本周期计算器</strong> —
                测算初始投入需要多长时间才能通过广告利润收回。
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>
                <strong className="text-slate-100">毛利计算器</strong> —
                综合计算售价、成本和广告费，得出单品毛利和利润率。
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-cyan-400/15 bg-slate-900 p-8">
          <h2 className="text-lg font-semibold text-slate-50">我们的承诺</h2>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>完全免费，无需注册即可使用。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>所有计算在浏览器本地完成，不收集任何商业数据。</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>持续更新投流指南，帮助卖家提升运营能力。</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
