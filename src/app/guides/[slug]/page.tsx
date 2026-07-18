import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getGuideBySlug, getAllSlugs } from '@/lib/guides';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return getAllSlugs().map((slug) => ({ slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.summary,
    alternates: { canonical: `https://www.ad-roi.cn/guides/${slug}` },
    openGraph: { title: guide.title, description: guide.summary, url: `https://www.ad-roi.cn/guides/${slug}`, siteName: '投流回本计算器', locale: 'zh_CN', type: 'article' },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let inList = false; let listItems: React.ReactNode[] = []; let listKey = 0;
  let inTable = false; let tableRows: string[][] = [];
  let bqLines: string[] = [];

  const flushBq = () => {
    if (bqLines.length > 0) { elements.push(<blockquote key={`bq-${elements.length}`} className="my-4 border-l-[3px] border-[#b45309] bg-[#fef7ed] px-5 py-3 text-sm italic text-[#78716c] rounded-r-lg">{bqLines.map((l, i) => <p key={i}>{renderInline(l)}</p>)}</blockquote>); bqLines = []; }
  };
  const flushList = () => {
    if (listItems.length > 0) { elements.push(<ol key={`ol-${listKey++}`} className="my-4 list-inside list-decimal space-y-1.5 text-sm text-[#78716c]">{listItems}</ol>); listItems = []; inList = false; }
  };

  const renderInline = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = []; let remaining = text; let pk = 0;
    while (remaining.length > 0) {
      const m = remaining.match(/\*\*(.+?)\*\*/);
      if (m && m.index !== undefined) {
        if (m.index > 0) parts.push(remaining.slice(0, m.index));
        parts.push(<strong key={`b-${pk++}`} className="font-semibold text-[#1a1a1a]">{m[1]}</strong>);
        remaining = remaining.slice(m.index + m[0].length);
      } else { parts.push(remaining); break; }
    }
    return parts.length === 1 ? parts[0] : parts;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (!inTable) { flushBq(); flushList(); inTable = true; }
      tableRows.push(line.split('|').filter((c) => c.trim() !== ''));
      continue;
    } else if (inTable) {
      if (tableRows.length > 0) {
        const h = tableRows[0]; const b = tableRows.slice(2);
        elements.push(<div key={`tbl-${elements.length}`} className="my-6 overflow-x-auto"><table className="w-full border-collapse text-sm"><thead><tr>{h.map((c, ci) => <th key={ci} className="border border-[#e8e4d9] bg-[#faf8f5] px-4 py-2 text-left font-semibold text-[#78716c]">{c.trim()}</th>)}</tr></thead><tbody>{b.map((r, ri) => <tr key={ri}>{r.map((c, ci) => <td key={ci} className="border border-[#e8e4d9] px-4 py-2 text-[#78716c]">{c.trim()}</td>)}</tr>)}</tbody></table></div>);
      }
      tableRows = []; inTable = false;
    }
    if (line.startsWith('>')) { flushList(); bqLines.push(line.replace(/^>\s?/, '')); continue; }
    else if (bqLines.length > 0) flushBq();
    if (line.startsWith('## ')) { flushList(); elements.push(<h2 key={`h2-${i}`} className="mb-3 mt-10 text-xl font-bold tracking-tight text-[#1a1a1a] first:mt-0">{line.replace('## ', '')}</h2>); continue; }
    if (line.startsWith('### ')) { flushList(); elements.push(<h3 key={`h3-${i}`} className="mb-2 mt-8 text-base font-semibold text-[#1a1a1a]">{line.replace('### ', '')}</h3>); continue; }
    const lm = line.match(/^\d+\.\s+(.+)/);
    if (lm) { if (!inList) { flushBq(); inList = true; } listItems.push(<li key={`li-${i}`}>{renderInline(lm[1])}</li>); continue; }
    else if (inList) flushList();
    if (line.trim() === '') continue;
    elements.push(<p key={`p-${i}`} className="my-2 leading-7 text-[#78716c]">{renderInline(line)}</p>);
  }
  flushBq(); flushList();
  return elements;
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Article', headline: guide.title, description: guide.summary, url: `https://www.ad-roi.cn/guides/${slug}`, datePublished: '2026-06-01', author: { '@type': 'Organization', name: '投流回本计算器' } }) }} />
      <article className="mx-auto max-w-3xl px-8 py-16">
        <header className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#b45309]">投流指南</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#1a1a1a]">{guide.title}</h1>
          <p className="mt-3 text-sm leading-relaxed text-[#a8a29e]">{guide.summary}</p>
        </header>
        <div>{renderMarkdown(guide.content)}</div>
        <footer className="mt-16 border-t border-[#e8e4d9] pt-6">
          <Link href="/guides" className="text-sm font-medium text-[#78716c] transition-colors hover:text-[#1a1a1a]">← 返回指南列表</Link>
        </footer>
      </article>
    </>
  );
}
