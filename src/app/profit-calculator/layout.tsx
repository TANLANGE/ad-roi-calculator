import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '毛利计算器 - 免费计算电商商品毛利润 | 投流回本计算器',
  description: '在线免费计算电商商品毛利润和毛利率。输入售价、成本、数量和广告费，快速得出毛利、净利和单件利润。',
  keywords: ['毛利计算器', '电商毛利计算', '商品利润计算', '毛利率计算', '广告费扣除利润'],
  openGraph: {
    title: '毛利计算器 - 免费计算电商商品毛利润',
    description: '在线免费计算电商商品毛利润和毛利率。输入售价、成本、数量和广告费，快速得出毛利、净利和单件利润。',
    url: 'https://www.ad-roi.cn/profit-calculator',
    siteName: '投流回本计算器',
    locale: 'zh_CN',
    type: 'website',
  },
};

export default function ProfitCalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: '毛利计算器',
            description: '在线免费计算电商商品毛利润和毛利率',
            url: 'https://www.ad-roi.cn/profit-calculator',
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
