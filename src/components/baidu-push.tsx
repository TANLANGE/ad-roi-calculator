'use client';

import { useEffect } from 'react';

const BAIDU_PUSH_URL =
  'http://data.zz.baidu.com/urls?site=https://www.ad-roi.cn&token=jdAnmw2RVSS8OzcV';

/**
 * 百度主动推送组件
 * 页面加载时自动将当前页面URL推送到百度，加快收录速度
 */
export default function BaiduPush() {
  useEffect(() => {
    // 仅在生产环境下推送
    if (process.env.NODE_ENV !== 'production') return;

    const currentUrl = window.location.href;

    fetch(BAIDU_PUSH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: currentUrl,
      mode: 'no-cors', // 百度API不支持CORS，使用no-cors模式
    }).catch(() => {
      // 静默失败，不影响用户体验
    });
  }, []);

  return null; // 无UI渲染
}
