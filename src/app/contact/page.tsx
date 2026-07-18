import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '联系我们 — 投流回本计算器',
  description:
    '有任何问题或建议，欢迎通过邮件与我们联系。我们会在 24 小时内回复。',
  keywords: ['联系投流计算器', '广告投放咨询', '电商运营问题', 'ROI计算帮助'],
  openGraph: {
    title: '联系我们 — 投流回本计算器',
    description: '有任何问题或建议，欢迎通过邮件与我们联系',
    url: 'https://www.ad-roi.cn/contact',
    siteName: '投流回本计算器',
    locale: 'zh_CN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.ad-roi.cn/contact',
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-center text-2xl font-bold text-slate-50 sm:text-3xl">
        联系我们
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
        有任何问题或建议，欢迎随时联系我们。
      </p>

      <div className="mt-12 space-y-8">
        <div className="rounded-2xl border border-cyan-400/15 bg-slate-900 p-8">
          <h2 className="text-lg font-semibold text-slate-50">电子邮件</h2>
          <p className="mt-3 text-sm text-slate-400">
            您可以通过以下邮箱与我们取得联系，我们会在 24 小时内回复：
          </p>
          <a
            href="mailto:support@traffic-roi.com"
            className="mt-4 inline-block text-cyan-400 hover:text-cyan-300"
          >
            support@traffic-roi.com
          </a>
        </div>

        <div className="rounded-2xl border border-cyan-400/15 bg-slate-900 p-8">
          <h2 className="text-lg font-semibold text-slate-50">常见咨询内容</h2>
          <ul className="mt-3 space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>计算器使用问题或 Bug 反馈</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>功能建议和新工具需求</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>商务合作与广告投放咨询</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
              <span>内容纠错与改进建议</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-cyan-400/15 bg-slate-900 p-8">
          <h2 className="text-lg font-semibold text-slate-50">反馈建议</h2>
          <p className="mt-3 text-sm text-slate-400">
            我们非常重视每一位用户的反馈。如果您在使用过程中遇到任何问题，
            或者有任何改进意见，都欢迎通过邮件告诉我们。
            您的建议是我们不断优化产品的动力。
          </p>
        </div>
      </div>
    </section>
  );
}
