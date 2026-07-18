'use client';

import { useEffect, useState } from 'react';

type ShareButtonsProps = { title: string; description?: string };

export default function ShareButtons({ title, description }: ShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [showWechat, setShowWechat] = useState(false);

  useEffect(() => { setCurrentUrl(window.location.href); }, []);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description || title);

  const shareLinks = [
    { name: '微博', icon: '微', color: 'bg-red-500 hover:bg-red-600', url: `https://service.weibo.com/share/share.php?url=${encodedUrl}&title=${encodedTitle}` },
    { name: 'QQ', icon: 'Q', color: 'bg-blue-500 hover:bg-blue-600', url: `https://connect.qq.com/widget/shareqq/index.html?url=${encodedUrl}&title=${encodedTitle}&desc=${encodedDesc}` },
    { name: '微信', icon: '微', color: 'bg-green-500 hover:bg-green-600', onClick: () => setShowWechat(!showWechat) },
  ];

  return (
    <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5">
      <h3 className="text-sm font-medium text-slate-700 mb-3">分享给需要的朋友</h3>
      <div className="flex items-center gap-2.5">
        {shareLinks.map((link) =>
          link.onClick ? (
            <button key={link.name} onClick={link.onClick} className={`flex h-9 w-9 items-center justify-center rounded-full text-white text-xs font-bold transition-colors ${link.color}`} title={`分享到${link.name}`}>{link.icon}</button>
          ) : (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={`flex h-9 w-9 items-center justify-center rounded-full text-white text-xs font-bold transition-colors ${link.color}`} title={`分享到${link.name}`}>{link.icon}</a>
          )
        )}
      </div>

      {showWechat && (
        <div className="mt-4 rounded-lg bg-slate-50 p-4 text-center border border-slate-100">
          <p className="text-xs text-slate-500 mb-2">复制链接后发送给微信好友或朋友圈</p>
          <div className="flex items-center gap-2">
            <input type="text" value={currentUrl} readOnly className="flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700" />
            <button
              onClick={() => { navigator.clipboard.writeText(currentUrl); alert('链接已复制'); }}
              className="rounded-lg bg-slate-900 px-4 py-2 text-xs font-medium text-white hover:bg-slate-800"
            >
              复制
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
