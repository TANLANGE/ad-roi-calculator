'use client';

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/roi-calculator', label: 'ROI 计算器' },
  { href: '/payback-calculator', label: '回本周期' },
  { href: '/profit-calculator', label: '毛利计算' },
  { href: '/guides', label: '使用指南' },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e8e4d9] bg-[#fdfbf7]/90 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] max-w-[1100px] items-center justify-between px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-[#1a1a1a]">
          投流回本<span className="text-[#b45309]">计算器</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-[#78716c] transition-colors hover:text-[#1a1a1a]">
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="切换菜单"
        >
          <span className={`block h-px w-5 bg-[#78716c] transition-transform ${isOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`block h-px w-5 bg-[#78716c] transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-5 bg-[#78716c] transition-transform ${isOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-[#e8e4d9] bg-[#fdfbf7] px-8 py-3 md:hidden">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block rounded-md px-3 py-2 text-sm font-medium text-[#78716c] hover:text-[#1a1a1a]" onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
