'use client';

import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { PaybackPoint } from '@/types/calculator';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

export default function PaybackChart({ points }: { points: PaybackPoint[] }) {
  const data = {
    labels: points.map((p) => `${p.month}月`),
    datasets: [{
      label: '累计利润',
      data: points.map((p) => p.profit),
      borderColor: '#b45309',
      backgroundColor: 'rgba(180,83,9,0.08)',
      fill: true, tension: 0.3, pointRadius: 4, pointBackgroundColor: '#b45309',
    }],
  };

  const options = {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (ctx: { parsed: { y: number | null } }) => `累计利润: ¥${(ctx.parsed.y ?? 0).toLocaleString('zh-CN')}` } },
    },
    scales: {
      x: { ticks: { color: '#a8a29e' }, grid: { color: 'rgba(168,162,158,0.1)' } },
      y: {
        ticks: { color: '#a8a29e', callback: (v: string | number) => `¥${Number(v).toLocaleString('zh-CN')}` },
        grid: { color: 'rgba(168,162,158,0.1)' },
      },
    },
  };

  return <div className="mt-8 h-72"><Line data={data} options={options} /></div>;
}
