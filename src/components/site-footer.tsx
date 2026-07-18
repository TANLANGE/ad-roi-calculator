import Link from 'next/link';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-400/10 bg-slate-950 py-8">
      <div className="mx-auto max-w-6xl px-6">
        {/* 底部导航 - 有利于SEO内链 */}
        <nav className="mb-6 flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/roi-calculator" className="text-slate-400 hover:text-cyan-300">
            ROI计算器
          </Link>
          <Link href="/payback-calculator" className="text-slate-400 hover:text-cyan-300">
            回本周期计算器
          </Link>
          <Link href="/profit-calculator" className="text-slate-400 hover:text-cyan-300">
            毛利计算器
          </Link>
          <Link href="/guides" className="text-slate-400 hover:text-cyan-300">
            投流指南
          </Link>
          <Link href="/faq" className="text-slate-400 hover:text-cyan-300">
            常见问题
          </Link>
          <Link href="/about" className="text-slate-400 hover:text-cyan-300">
            关于我们
          </Link>
          <Link href="/contact" className="text-slate-400 hover:text-cyan-300">
            联系我们
          </Link>
        </nav>

        <div className="text-center text-sm text-slate-500">
          <p>
            &copy; {currentYear} 投流回本计算器 &mdash; 免费测算 ROI、回本周期与毛利
          </p>
          <p className="mt-2">
            适用于抖音、小红书、淘宝、京东等电商平台的广告投放计算
          </p>
        </div>
      </div>
    </footer>
  );
}
