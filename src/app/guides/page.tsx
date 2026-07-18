import Link from 'next/link';
import type { Metadata } from 'next';
import { guides } from '@/lib/guides';

export const metadata: Metadata = { title: '投流指南', description: '深入了解广告投放 ROI 计算和回本周期评估。', alternates: { canonical: 'https://www.ad-roi.cn/guides' } };

export default function GuidesPage() {
  return (
    <section className="mx-auto max-w-3xl px-8 py-16">
      <h1 className="text-2xl font-bold tracking-tight text-[#1a1a1a]">投流指南</h1>
      <p className="mt-2 text-sm text-[#a8a29e]">深入了解广告投放的核心指标计算方法。</p>
      <ul className="mt-10 divide-y divide-[#e8e4d9]">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link href={`/guides/${guide.slug}`} className="-mx-3 flex items-center justify-between rounded-lg px-3 py-4 transition-colors hover:bg-[#faf8f5]">
              <div>
                <h2 className="text-sm font-semibold text-[#1a1a1a]">{guide.title}</h2>
                <p className="mt-0.5 text-xs text-[#a8a29e]">{guide.summary}</p>
              </div>
              <span className="text-xs text-[#d6d3d1]">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
