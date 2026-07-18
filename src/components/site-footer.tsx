import Link from 'next/link';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-[#e8e4d9] py-10 text-center">
      <nav className="mb-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
        <Link href="/roi-calculator" className="text-[#78716c] hover:text-[#1a1a1a]">ROI计算器</Link>
        <Link href="/payback-calculator" className="text-[#78716c] hover:text-[#1a1a1a]">回本周期</Link>
        <Link href="/profit-calculator" className="text-[#78716c] hover:text-[#1a1a1a]">毛利计算器</Link>
        <Link href="/guides" className="text-[#78716c] hover:text-[#1a1a1a]">投流指南</Link>
        <Link href="/faq" className="text-[#78716c] hover:text-[#1a1a1a]">常见问题</Link>
        <Link href="/about" className="text-[#78716c] hover:text-[#1a1a1a]">关于我们</Link>
        <Link href="/contact" className="text-[#78716c] hover:text-[#1a1a1a]">联系我们</Link>
      </nav>
      <p className="text-xs text-[#a8a29e]">&copy; {currentYear} 投流回本计算器 — 免费测算 ROI、回本周期与毛利</p>
      <p className="mt-1 text-xs text-[#a8a29e]">适用于抖音、小红书、淘宝、京东等电商平台</p>
    </footer>
  );
}
