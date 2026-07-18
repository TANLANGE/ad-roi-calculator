import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getGuideBySlug, getAllSlugs } from '@/lib/guides';
import CtaBanner from '@/components/cta-banner';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} \u2014 \u6295\u6d41\u6307\u5357`,
    description: guide.summary,
    alternates: { canonical: `https://www.ad-roi.cn/guides/${slug}` },
    openGraph: {
      title: guide.title,
      description: guide.summary,
      url: `https://www.ad-roi.cn/guides/${slug}`,
      siteName: '\u6295\u6d41\u56de\u672c\u8ba1\u7b97\u5668',
      locale: 'zh_CN',
      type: 'article',
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: React.ReactNode[] = [];
  let listKey = 0;
  let inTable = false;
  let tableRows: string[][] = [];
  let blockquoteLines: string[] = [];

  const flushBlockquote = () => {
    if (blockquoteLines.length > 0) {
      elements.push(
        <blockquote key={`bq-${elements.length}`} className="my-4 border-l-3 border-amber-300 bg-amber-50 px-5 py-3 text-sm italic text-slate-600 rounded-r-lg">
          {blockquoteLines.map((l, i) => <p key={i}>{renderInline(l)}</p>)}
        </blockquote>
      );
      blockquoteLines = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ol key={`ol-${listKey++}`} className="my-4 list-inside list-decimal space-y-1.5 text-sm text-slate-700">
          {listItems}
        </ol>
      );
      listItems = [];
      inList = false;
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const header = tableRows[0];
      const body = tableRows.slice(2);
      elements.push(
        <div key={`tbl-${elements.length}`} className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {header.map((cell, ci) => (
                  <th key={ci} className="border border-slate-200 bg-slate-50 px-4 py-2 text-left font-medium text-slate-700">
                    {cell.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-slate-100 px-4 py-2 text-slate-600">
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  const renderInline = (text: string): React.ReactNode => {
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let partKey = 0;
    while (remaining.length > 0) {
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      if (boldMatch && boldMatch.index !== undefined) {
        if (boldMatch.index > 0) parts.push(remaining.slice(0, boldMatch.index));
        parts.push(<strong key={`b-${partKey++}`} className="font-semibold text-slate-900">{boldMatch[1]}</strong>);
        remaining = remaining.slice(boldMatch.index + boldMatch[0].length);
      } else {
        parts.push(remaining);
        break;
      }
    }
    return parts.length === 1 ? parts[0] : parts;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (!inTable) { flushBlockquote(); flushList(); inTable = true; }
      tableRows.push(line.split('|').filter((c) => c.trim() !== '' || c === '|'));
      continue;
    } else if (inTable) { flushTable(); }

    if (line.startsWith('>')) {
      flushList();
      blockquoteLines.push(line.replace(/^>\s?/, ''));
      continue;
    } else if (blockquoteLines.length > 0) { flushBlockquote(); }

    if (line.startsWith('## ')) {
      flushList();
      elements.push(<h2 key={`h2-${i}`} className="mb-3 mt-10 text-xl font-semibold tracking-tight text-slate-900 first:mt-0">{line.replace('## ', '')}</h2>);
      continue;
    }

    if (line.startsWith('### ')) {
      flushList();
      elements.push(<h3 key={`h3-${i}`} className="mb-2 mt-8 text-base font-semibold text-slate-800">{line.replace('### ', '')}</h3>);
      continue;
    }

    const listMatch = line.match(/^\d+\.\s+(.+)/);
    if (listMatch) {
      if (!inList) { flushBlockquote(); inList = true; }
      listItems.push(<li key={`li-${i}`}>{renderInline(listMatch[1])}</li>);
      continue;
    } else if (inList) { flushList(); }

    if (line.trim() === '') continue;

    elements.push(<p key={`p-${i}`} className="my-2 leading-7 text-slate-600">{renderInline(line)}</p>);
  }

  flushBlockquote(); flushList(); flushTable();
  return elements;
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: guide.title,
            description: guide.summary,
            url: `https://www.ad-roi.cn/guides/${slug}`,
            datePublished: '2026-06-01',
            dateModified: '2026-06-30',
            author: { '@type': 'Organization', name: '\u6295\u6d41\u56de\u672c\u8ba1\u7b97\u5668' },
          }),
        }}
      />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-10">
          <p className="text-xs font-medium uppercase tracking-wide text-amber-600">\u6295\u6d41\u6307\u5357</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{guide.title}</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">{guide.summary}</p>
        </header>

        <div>{renderMarkdown(guide.content)}</div>

        <footer className="mt-16 border-t border-slate-100 pt-6">
          <Link href="/guides" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            \u2190 \u8fd4\u56de\u6307\u5357\u5217\u8868
          </Link>
        </footer>

        <CtaBanner />
      </article>
    </>
  );
}
