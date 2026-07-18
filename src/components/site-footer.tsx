import Link from 'next/link';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-slate-50/50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="mb-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <Link href="/roi-calculator" className="text-slate-500 hover:text-slate-900">ROI计算器</Link>
          <Link href="/payback-calculator" className="text-slate-500 hover:text-slate-900">回本周期计算器</Link>
          <Link href="/profit-calculator" className="text-slate-500 hover:text-slate-900">毛利计算器</Link>
          <Link href="/guides" className="text-slate-500 hover:text-slate-900">投流指南</Link>
          <Link href="/faq" className="text-slate-500 hover:text-slate-900">常见问题</Link>
          <Link href="/about" className="text-slate-500 hover:text-slate-900">关于我们</Link>
          <Link href="/contact" className="text-slate-500 hover:text-slate-900">联系我们</Link>
        </nav>

        <div className="text-center text-xs text-slate-400">
          <p>&copy; {currentYear} 投流回本计算器 — 免费测算 ROI、回本周期与毛利</p>
          <p className="mt-1">适用于抖音、小红书、淘宝、京东等电商平台的广告投放计算</p>
        </div>
      </div>
    </footer>
  );
}
