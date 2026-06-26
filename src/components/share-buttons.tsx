'use client';

import { useEffect, useState } from 'react';

type ShareButtonsProps = {
  title: string;
  description?: string;
};

/**
 * 社交媒体分享按钮组件
 * 支持微信、微博、QQ分享，帮助用户传播内容获取流量
 */
export default function ShareButtons({ title, description }: ShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState('');
  const [showWechat, setShowWechat] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDesc = encodeURIComponent(description || title);

  const shareLinks = [
    {
      name: '微博',
      icon: '微',
      color: 'bg-red-500 hover:bg-red-600',
      url: `https://service.weibo.com/share/share.php?url=${encodedUrl}&title=${encodedTitle}`,
    },
    {
      name: 'QQ',
      icon: 'Q',
      color: 'bg-blue-500 hover:bg-blue-600',
      url: `https://connect.qq.com/widget/shareqq/index.html?url=${encodedUrl}&title=${encodedTitle}&desc=${encodedDesc}`,
    },
    {
      name: '微信',
      icon: '微',
      color: 'bg-green-500 hover:bg-green-600',
      onClick: () => setShowWechat(!showWechat),
    },
  ];

  return (
    <div className="mt-8 rounded-xl border border-cyan-400/15 bg-slate-900 p-6">
      <h3 className="text-sm font-semibold text-slate-200 mb-3">
        分享给需要的朋友
      </h3>
      <div className="flex items-center gap-3">
        {shareLinks.map((link) =>
          link.onClick ? (
            <button
              key={link.name}
              onClick={link.onClick}
              className={`flex h-10 w-10 items-center justify-center rounded-full text-white text-xs font-bold transition-colors ${link.color}`}
              title={`分享到${link.name}`}
            >
              {link.icon}
            </button>
          ) : (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-10 w-10 items-center justify-center rounded-full text-white text-xs font-bold transition-colors ${link.color}`}
              title={`分享到${link.name}`}
            >
              {link.icon}
            </a>
          )
        )}
      </div>

      {/* 微信扫码提示 */}
      {showWechat && (
        <div className="mt-4 rounded-lg bg-slate-800 p-4 text-center">
          <p className="text-xs text-slate-400 mb-2">
            复制链接后发送给微信好友或朋友圈
          </p>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={currentUrl}
              readOnly
              className="flex-1 rounded-lg border border-cyan-400/15 bg-slate-700 px-3 py-2 text-xs text-slate-200"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(currentUrl);
                alert('链接已复制');
              }}
              className="rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400"
            >
              复制
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
