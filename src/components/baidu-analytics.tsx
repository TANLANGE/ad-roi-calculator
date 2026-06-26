'use client';

import { useEffect } from 'react';

/**
 * 百度统计组件
 * 监控网站访问量、访客来源、页面停留时间等数据
 * 需要在百度统计后台获取统计代码ID
 */
export default function BaiduAnalytics() {
  useEffect(() => {
    // 仅在生产环境下加载统计代码
    if (process.env.NODE_ENV !== 'production') return;

    // 百度统计代码 - 需要替换为实际的统计ID
    // 注册百度统计：https://tongji.baidu.com
    const BAIDU_ANALYTICS_ID = 'YOUR_BAIDU_ANALYTICS_ID';

    // 动态加载百度统计脚本
    const script = document.createElement('script');
    script.innerHTML = `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?${BAIDU_ANALYTICS_ID}";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `;
    document.head.appendChild(script);

    return () => {
      // 清理
      document.head.removeChild(script);
    };
  }, []);

  return null; // 无UI渲染
}
