import Link from 'next/link';
import type { Metadata } from 'next';
import { guides } from '@/lib/guides';

export const metadata: Metadata = {
  title: '投流指南 — ROI、回本周期与毛利率计算教程',
  description:
    '深入了解广告投放 ROI 计算、回本周期评估和电商毛利率分析的实用指南。',
};

export default function GuidesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-center text-2xl font-bold text-slate-50 sm:text-3xl">
        投流指南
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-center text-slate-400">
        深入了解广告投放的核心指标计算方法，提升每一分广告预算的效果。
      </p>

      <ul className="mx-auto mt-12 max-w-2xl space-y-6">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/guides/${guide.slug}`}
              className="block rounded-2xl border border-cyan-400/15 bg-slate-900 p-8 transition-all hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-950/20"
            >
              <h2 className="text-lg font-semibold text-slate-50 group-hover:text-cyan-300">
                {guide.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {guide.summary}
              </p>
              <span className="mt-4 inline-block text-xs text-cyan-400">
                阅读全文 →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
