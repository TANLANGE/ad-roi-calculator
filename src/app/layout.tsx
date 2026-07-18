import type { Metadata } from 'next';
import SiteHeader from '@/components/site-header';
import SiteFooter from '@/components/site-footer';
import BaiduPush from '@/components/baidu-push';
import BaiduAnalytics from '@/components/baidu-analytics';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '投流回本计算器 — 免费测算 ROI、回本周期与毛利',
    template: '%s | 投流回本计算器',
  },
  description:
    '免费在线计算广告投放 ROI、回本周期和单品毛利的中文工具站，帮助电商卖家和投流从业者做出更明智的投流决策。',
  keywords: ['投流ROI计算', '广告回本周期', '电商毛利计算', '广告投放计算', '抖音投流'],
  verification: { google: '4JRnax0GGUvQ7VjhXDJ_4AiqO63fvb8KFYZR3Ab9SuQ' },
  openGraph: {
    title: '投流回本计算器 — 免费测算 ROI、回本周期与毛利',
    description: '免费在线计算广告投放 ROI、回本周期和单品毛利的中文工具站',
    url: 'https://www.ad-roi.cn',
    siteName: '投流回本计算器',
    locale: 'zh_CN',
    type: 'website',
  },
  alternates: { canonical: 'https://www.ad-roi.cn' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: '投流回本计算器',
              description: '免费在线计算广告投放 ROI、回本周期和单品毛利',
              url: 'https://www.ad-roi.cn',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-slate-900 antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <BaiduPush />
        <BaiduAnalytics />
      </body>
    </html>
  );
}
