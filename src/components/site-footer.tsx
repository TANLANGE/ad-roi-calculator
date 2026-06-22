export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-400/10 bg-slate-950 py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
        <p>
          &copy; {currentYear} 投流回本计算器 &mdash; 免费测算 ROI、回本周期与毛利
        </p>
      </div>
    </footer>
  );
}
