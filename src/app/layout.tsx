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
    '免费在线计算广告投放 ROI、回本周期和单品毛利的中文工具站，帮助电商卖家和投流从业者做出更明智的投流决策。支持抖音、小红书、百度等平台广告计算。',
  keywords: ['投流ROI计算', '广告回本周期', '电商毛利计算', '广告投放计算', '抖音投流', '小红书投流', '电商广告计算', '广告回报率计算'],
  verification: {
    google: '4JRnax0GGUvQ7VjhXDJ_4AiqO63fvb8KFYZR3Ab9SuQ',
  },
  openGraph: {
    title: '投流回本计算器 — 免费测算 ROI、回本周期与毛利',
    description: '免费在线计算广告投放 ROI、回本周期和单品毛利的中文工具站，支持抖音、小红书、百度等平台',
    url: 'https://www.ad-roi.cn',
    siteName: '投流回本计算器',
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: 'https://www.ad-roi.cn/og-image.png',
        width: 1200,
        height: 630,
        alt: '投流回本计算器',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '投流回本计算器 — 免费测算 ROI、回本周期与毛利',
    description: '免费在线计算广告投放 ROI、回本周期和单品毛利的中文工具站',
    images: ['https://www.ad-roi.cn/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.ad-roi.cn',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// 结构化数据 - WebApplication Schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '投流回本计算器',
  description: '免费在线计算广告投放 ROI、回本周期和单品毛利的中文工具站',
  url: 'https://www.ad-roi.cn',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CNY',
  },
  featureList: [
    'ROI计算器',
    '回本周期计算器',
    '毛利计算器',
    '投流指南文章',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-slate-950 text-slate-50 antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <BaiduPush />
        <BaiduAnalytics />
      </body>
    </html>
  );
}
