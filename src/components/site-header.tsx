'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/roi-calculator', label: 'ROI 计算器' },
  { href: '/payback-calculator', label: '回本周期' },
  { href: '/profit-calculator', label: '毛利计算器' },
  { href: '/guides', label: '使用指南' },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-slate-900">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-500 text-xs font-bold text-white">
            R
          </span>
          <span className="text-[15px] tracking-tight">投流回本计算器</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-[13px] font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="flex flex-col items-center justify-center gap-1 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="切换菜单"
        >
          <span className={`block h-px w-5 bg-slate-600 transition-transform ${isOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`block h-px w-5 bg-slate-600 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-5 bg-slate-600 transition-transform ${isOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-slate-100 bg-white px-6 py-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
