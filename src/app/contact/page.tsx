import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '联系我们 — 投流回本计算器',
  description: '有任何问题或建议，欢迎随时联系我们。',
  alternates: { canonical: 'https://www.ad-roi.cn/contact' },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">联系我们</h1>
      <p className="mt-2 text-sm text-slate-500">有任何问题或建议，欢迎随时联系。</p>

      <div className="mt-10 space-y-6">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-sm font-semibold text-slate-900">电子邮件</h2>
          <p className="mt-2 text-sm text-slate-500">我们会在 24 小时内回复：</p>
          <a href="mailto:support@traffic-roi.com" className="mt-3 inline-block text-sm font-medium text-amber-600 hover:text-amber-700">
            support@traffic-roi.com
          </a>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-sm font-semibold text-slate-900">常见咨询内容</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {['计算器使用问题或 Bug 反馈', '功能建议和新工具需求', '商务合作与广告投放咨询', '内容纠错与改进建议'].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-sm font-semibold text-slate-900">反馈建议</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            我们非常重视每一位用户的反馈。如果您在使用过程中遇到任何问题，或者有任何改进意见，都欢迎通过邮件告诉我们。您的建议是我们不断优化产品的动力。
          </p>
        </div>
      </div>
    </section>
  );
}
