import Link from 'next/link';
import type { Metadata } from 'next';
import { guides } from '@/lib/guides';

export const metadata: Metadata = {
  title: '投流指南 — ROI、回本周期与毛利率计算教程',
  description: '深入了解广告投放 ROI 计算、回本周期评估和电商毛利率分析的实用指南。',
  alternates: { canonical: 'https://www.ad-roi.cn/guides' },
};

export default function GuidesPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900">投流指南</h1>
      <p className="mt-2 text-sm text-slate-500">深入了解广告投放的核心指标计算方法。</p>
      <ul className="mt-10 divide-y divide-slate-100">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/guides/${guide.slug}`}
              className="flex items-center justify-between py-4 transition-colors hover:bg-slate-50 -mx-3 px-3 rounded-lg"
            >
              <div>
                <h2 className="text-sm font-medium text-slate-900">{guide.title}</h2>
                <p className="mt-0.5 text-xs text-slate-500">{guide.summary}</p>
              </div>
              <span className="text-xs text-slate-300">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
