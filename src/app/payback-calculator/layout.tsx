import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '回本周期计算器 - 免费计算广告投放回本时间 | 投流回本计算器',
  description: '在线免费计算广告投放回本周期。输入初始投入、月广告费、订单数等参数，快速测算需要多长时间收回成本。',
  keywords: ['回本周期计算器', '广告回本时间', '投流回本计算', '投资回报周期', '电商回本计算'],
  openGraph: {
    title: '回本周期计算器 - 免费计算广告投放回本时间',
    description: '在线免费计算广告投放回本周期。输入初始投入、月广告费、订单数等参数，快速测算需要多长时间收回成本。',
    url: 'https://www.ad-roi.cn/payback-calculator',
    siteName: '投流回本计算器',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function PaybackCalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: '回本周期计算器',
            description: '在线免费计算广告投放回本周期',
            url: 'https://www.ad-roi.cn/payback-calculator',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
          }),
        }}
      />
      {children}
    </>
  );
}
