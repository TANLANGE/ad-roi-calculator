import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '常见问题 — 投流回本计算器',
  description:
    '关于 ROI 计算器、回本周期计算和毛利计算的常见问题解答。',
};

const faqs = [
  {
    question: '这些计算器是免费使用的吗？',
    answer:
      '是的，所有计算器完全免费，无需注册即可使用。我们希望帮助每一位电商卖家做出更明智的投流决策。',
  },
  {
    question: 'ROI 多少算好？',
    answer:
      '一般来说，ROI 大于 100% 表示广告投放本身是盈利的。但实际评判标准因行业、产品和投放目标不同而异。品牌广告可能更关注曝光而非直接 ROI。',
  },
  {
    question: '回本周期计算中的"初始投入"包括哪些？',
    answer:
      '初始投入包括首批货款、平台保证金、店铺装修费用、设备采购等一次性支出。月度运营费用（如广告费）不包含在内，而是作为月度成本单独计算。',
  },
  {
    question: '毛利计算器中的"单件成本"应该包含哪些？',
    answer:
      '单件成本应包含商品采购价、包装费、物流费等直接与单件商品相关的成本。平台佣金和广告费通常是分开计算的。',
  },
  {
    question: '计算结果可以导出或保存吗？',
    answer:
      '目前暂不支持导出功能。建议您截图保存计算结果。我们计划在未来版本中添加导出 Excel 和 PDF 的功能。',
  },
  {
    question: '数据会被保存到服务器吗？',
    answer:
      '不会。所有计算均在您的浏览器本地完成，我们不会收集或存储任何您输入的商业数据。',
  },
  {
    question: '支持哪些电商平台？',
    answer:
      '我们的计算器适用于所有电商平台，包括但不限于抖音电商、淘宝、京东、拼多多、快手电商等。核心的 ROI、回本周期和毛利计算方法是通用的。',
  },
  {
    question: '如何联系你们获取更多帮助？',
    answer:
      '您可以通过联系页面发送邮件与我们取得联系。我们会在 24 小时内回复您的问题。',
  },
];

export default function FaqPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-center text-2xl font-bold text-slate-50 sm:text-3xl">
        常见问题
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
        关于投流计算器的常见问题解答，帮助你更好地使用我们的工具。
      </p>

      <dl className="mt-12 space-y-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-cyan-400/15 bg-slate-900 p-8"
          >
            <dt className="text-lg font-semibold text-slate-50">
              {faq.question}
            </dt>
            <dd className="mt-3 text-sm leading-7 text-slate-400">
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
