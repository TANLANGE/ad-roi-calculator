import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // 静态导出时需禁用图片优化（使用 <img> 代替 next/image）
  images: { unoptimized: true },
};

export default nextConfig;
