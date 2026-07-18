import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ROI计算器 - 免费计算广告投放回报率 | 投流回本计算器',
  description: '在线免费计算抖音、电商广告投放ROI、净利润和获客成本。输入广告花费、订单数、客单价，快速得出投入产出比。',
  keywords: ['ROI计算器', '广告回报率', '投流ROI计算', '广告投放回报', '电商ROI计算', '抖音广告ROI'],
  openGraph: {
    title: 'ROI计算器 - 免费计算广告投放回报率',
    description: '在线免费计算抖音、电商广告投放ROI、净利润和获客成本',
    url: 'https://www.ad-roi.cn/roi-calculator',
    siteName: '投流回本计算器',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function RoiCalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'ROI计算器',
            description: '在线免费计算抖音、电商广告投放ROI、净利润和获客成本',
            url: 'https://www.ad-roi.cn/roi-calculator',
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
