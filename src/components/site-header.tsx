import Link from 'next/link';

const navLinks = [
  { href: '/roi-calculator', label: 'ROI 计算器' },
  { href: '/payback-calculator', label: '回本周期' },
  { href: '/profit-calculator', label: '毛利计算器' },
  { href: '/guides', label: '使用指南' },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-cyan-300">
          <span className="inline-block h-8 w-8 rounded-lg bg-cyan-400/20 text-center text-base leading-8">
            R
          </span>
          投流回本计算器
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-cyan-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
