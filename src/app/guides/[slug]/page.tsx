import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getGuideBySlug, getAllSlugs } from '@/lib/guides';
import CtaBanner from '@/components/cta-banner';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return {
    title: `${guide.title} — 投流指南`,
    description: guide.summary,
    keywords: [guide.title, '投流指南', '广告投放', '电商运营', 'ROI计算'],
    openGraph: {
      title: `${guide.title} — 投流指南`,
      description: guide.summary,
      url: `https://www.ad-roi.cn/guides/${slug}`,
      siteName: '投流回本计算器',
      locale: 'zh_CN',
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: `${guide.title} — 投流指南`,
      description: guide.summary,
    },
    alternates: {
      canonical: `https://www.ad-roi.cn/guides/${slug}`,
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
        <blockquote
          key={`bq-${elements.length}`}
          className="my-4 border-l-4 border-cyan-400/40 bg-cyan-400/5 px-6 py-4 text-slate-300 italic"
        >
          {blockquoteLines.map((l, i) => (
            <p key={i}>{renderInline(l)}</p>
          ))}
        </blockquote>,
      );
      blockquoteLines = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ol key={`ol-${listKey++}`} className="my-4 list-inside list-decimal space-y-2 text-slate-300">
          {listItems}
        </ol>,
      );
      listItems = [];
      inList = false;
    }
  };

  const flushTable = () => {
    if (tableRows.length > 0) {
      const header = tableRows[0];
      const body = tableRows.slice(2); // skip separator row
      elements.push(
        <div key={`tbl-${elements.length}`} className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {header.map((cell, ci) => (
                  <th
                    key={ci}
                    className="border border-cyan-400/20 bg-slate-800 px-4 py-2 text-left text-cyan-300"
                  >
                    {cell.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="border border-cyan-400/10 px-4 py-2 text-slate-300"
                    >
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      tableRows = [];
      inTable = false;
    }
  };

  const renderInline = (text: string): React.ReactNode => {
    // Handle bold **text**
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let partKey = 0;

    while (remaining.length > 0) {
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      if (boldMatch && boldMatch.index !== undefined) {
        if (boldMatch.index > 0) {
          parts.push(remaining.slice(0, boldMatch.index));
        }
        parts.push(
          <strong key={`b-${partKey++}`} className="font-semibold text-slate-100">
            {boldMatch[1]}
          </strong>,
        );
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

    // Table row
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      if (!inTable) {
        flushBlockquote();
        flushList();
        inTable = true;
      }
      const cells = line.split('|').filter((c) => c.trim() !== '' || c === '|');
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Blockquote
    if (line.startsWith('>')) {
      flushList();
      blockquoteLines.push(line.replace(/^>\s?/, ''));
      continue;
    } else if (blockquoteLines.length > 0) {
      flushBlockquote();
    }

    // Heading
    if (line.startsWith('## ')) {
      flushList();
      elements.push(
        <h2
          key={`h2-${i}`}
          className="mb-4 mt-10 text-xl font-bold text-slate-50 first:mt-0"
        >
          {line.replace('## ', '')}
        </h2>,
      );
      continue;
    }

    if (line.startsWith('### ')) {
      flushList();
      elements.push(
        <h3 key={`h3-${i}`} className="mb-3 mt-8 text-lg font-semibold text-slate-100">
          {line.replace('### ', '')}
        </h3>,
      );
      continue;
    }

    // Ordered list
    const listMatch = line.match(/^\d+\.\s+(.+)/);
    if (listMatch) {
      if (!inList) {
        flushBlockquote();
        inList = true;
      }
      listItems.push(<li key={`li-${i}`}>{renderInline(listMatch[1])}</li>);
      continue;
    } else if (inList) {
      flushList();
    }

    // Empty line
    if (line.trim() === '') {
      continue;
    }

    // Normal paragraph
    elements.push(
      <p key={`p-${i}`} className="my-3 leading-7 text-slate-300">
        {renderInline(line)}
      </p>,
    );
  }

  flushBlockquote();
  flushList();
  flushTable();

  return elements;
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  // 结构化数据 - Article Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.summary,
    url: `https://www.ad-roi.cn/guides/${slug}`,
    datePublished: '2026-06-01',
    dateModified: '2026-06-30',
    author: {
      '@type': 'Organization',
      name: '投流回本计算器',
      url: 'https://www.ad-roi.cn',
    },
    publisher: {
      '@type': 'Organization',
      name: '投流回本计算器',
      url: 'https://www.ad-roi.cn',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.ad-roi.cn/guides/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <header className="mb-10">
          <p className="text-sm text-cyan-400">投流指南</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-50 sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-4 text-slate-400">{guide.summary}</p>
        </header>

        <div className="prose-custom">{renderMarkdown(guide.content)}</div>

        <footer className="mt-16 border-t border-cyan-400/10 pt-8">
          <Link
            href="/guides"
            className="text-sm text-cyan-400 hover:text-cyan-300"
          >
            ← 返回指南列表
          </Link>
        </footer>

        <CtaBanner />
      </article>
    </>
  );
}
