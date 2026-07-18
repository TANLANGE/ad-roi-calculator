'use client';

import { useEffect, useState } from 'react';

export default function ShareButtons({ title, description }: { title: string; description?: string }) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [showWechat, setShowWechat] = useState(false);

  useEffect(() => { setCurrentUrl(window.location.href); }, []);

  const eu = encodeURIComponent(currentUrl);
  const et = encodeURIComponent(title);
  const ed = encodeURIComponent(description || title);

  const links = [
    { name: '微博', icon: '微', color: 'bg-red-500 hover:bg-red-600', url: `https://service.weibo.com/share/share.php?url=${eu}&title=${et}` },
    { name: 'QQ', icon: 'Q', color: 'bg-blue-500 hover:bg-blue-600', url: `https://connect.qq.com/widget/shareqq/index.html?url=${eu}&title=${et}&desc=${ed}` },
    { name: '微信', icon: '微', color: 'bg-green-500 hover:bg-green-600', onClick: () => setShowWechat(!showWechat) },
  ];

  return (
    <div className="mt-8 rounded-xl border border-[#e8e4d9] bg-white p-5">
      <h3 className="mb-3 text-sm font-semibold text-[#78716c]">分享给需要的朋友</h3>
      <div className="flex items-center gap-2.5">
        {links.map((l) => l.onClick ? (
          <button key={l.name} onClick={l.onClick} className={`flex h-9 w-9 items-center justify-center rounded-full text-white text-xs font-bold transition-colors ${l.color}`} title={`分享到${l.name}`}>{l.icon}</button>
        ) : (
          <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className={`flex h-9 w-9 items-center justify-center rounded-full text-white text-xs font-bold transition-colors ${l.color}`} title={`分享到${l.name}`}>{l.icon}</a>
        ))}
      </div>
      {showWechat && (
        <div className="mt-4 rounded-lg border border-[#e8e4d9] bg-[#faf8f5] p-4 text-center">
          <p className="mb-2 text-xs text-[#a8a29e]">复制链接后发送给微信好友或朋友圈</p>
          <div className="flex items-center gap-2">
            <input type="text" value={currentUrl} readOnly className="flex-1 rounded-lg border border-[#e8e4d9] bg-white px-3 py-2 text-xs text-[#78716c]" />
            <button onClick={() => { navigator.clipboard.writeText(currentUrl); alert('链接已复制'); }} className="rounded-lg bg-[#1a1a1a] px-4 py-2 text-xs font-medium text-[#fdfbf7] hover:bg-[#b45309]">复制</button>
          </div>
        </div>
      )}
    </div>
  );
}
