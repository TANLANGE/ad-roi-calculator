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
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold text-cyan-300">
          <span className="inline-block h-8 w-8 rounded-lg bg-cyan-400/20 text-center text-base leading-8">
            R
          </span>
          投流回本计算器
        </Link>

        {/* 桌面端导航 */}
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

        {/* 移动端汉堡菜单按钮 */}
        <button
          className="flex flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="切换菜单"
        >
          <span className={`block h-0.5 w-6 bg-slate-300 transition-transform ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-slate-300 transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-slate-300 transition-transform ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      {isOpen && (
        <nav className="border-t border-cyan-400/10 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 transition-colors hover:text-cyan-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
