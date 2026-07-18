import type { Metadata } from 'next';

export const metadata: Metadata = { title: '常见问题 — 投流回本计算器', description: '关于 ROI 计算器的常见问题解答。', alternates: { canonical: 'https://www.ad-roi.cn/faq' } };

const faqs = [
  { q: '这些计算器是免费使用的吗？', a: '是的，所有计算器完全免费，无需注册即可使用。' },
  { q: 'ROI 多少算好？', a: '一般 ROI 大于 100% 表示广告投放本身是盈利的。但实际评判标准因行业、产品和投放目标不同而异。' },
  { q: '回本周期计算中的「初始投入」包括哪些？', a: '初始投入包括首批货款、平台保证金、店铺装修费用、设备采购等一次性支出。月度广告费不包含在内。' },
  { q: '数据会被保存到服务器吗？', a: '不会。所有计算均在您的浏览器本地完成，我们不会收集或存储任何商业数据。' },
  { q: '支持哪些电商平台？', a: '适用于抖音、淘宝、京东、拼多多、快手等所有电商平台。核心计算方法通用。' },
];

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) }) }} />
      <section className="mx-auto max-w-3xl px-8 py-16">
        <h1 className="text-2xl font-bold tracking-tight text-[#1a1a1a]">常见问题</h1>
        <p className="mt-2 text-sm text-[#a8a29e]">关于投流计算器的常见问题解答。</p>
        <dl className="mt-10 divide-y divide-[#e8e4d9]">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <dt className="text-sm font-semibold text-[#1a1a1a]">{faq.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-[#78716c]">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
