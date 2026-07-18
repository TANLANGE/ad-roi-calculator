import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我们 — 投流回本计算器',
  description: '了解投流回本计算器的创建初衷、团队理念和发展方向。',
  alternates: { canonical: 'https://www.ad-roi.cn/about' },
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">关于我们</h1>
      <div className="mt-10 space-y-6">
        {[
          {
            title: '我们的初衷',
            body: '投流回本计算器诞生于一个简单的观察：许多电商卖家在投放广告时，缺乏简单有效的工具来快速评估投放效果。我们希望通过免费、易用的在线计算工具，帮助每一位卖家做出更理性的投流决策。',
          },
          {
            title: '核心功能',
            list: [
              { bold: 'ROI 计算器', desc: '快速评估广告投放的投入产出比，判断投放是否盈利。' },
              { bold: '回本周期计算器', desc: '测算初始投入需要多长时间才能通过广告利润收回。' },
              { bold: '毛利计算器', desc: '综合计算售价、成本和广告费，得出单品毛利和利润率。' },
            ],
          },
          {
            title: '我们的承诺',
            list: [
              { desc: '完全免费，无需注册即可使用。' },
              { desc: '所有计算在浏览器本地完成，不收集任何商业数据。' },
              { desc: '持续更新投流指南，帮助卖家提升运营能力。' },
            ],
          },
        ].map((section) => (
          <div key={section.title} className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-base font-semibold text-slate-900">{section.title}</h2>
            {section.body && <p className="mt-2 text-sm leading-relaxed text-slate-600">{section.body}</p>}
            {section.list && (
              <ul className="mt-3 space-y-2">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                    {'bold' in item ? (
                      <span><strong className="text-slate-900">{item.bold}</strong> — {item.desc}</span>
                    ) : (
                      item.desc
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
