'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { PaybackPoint } from '@/types/calculator';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

type PaybackChartProps = {
  points: PaybackPoint[];
};

export default function PaybackChart({ points }: PaybackChartProps) {
  const data = {
    labels: points.map((p) => `${p.month}月`),
    datasets: [
      {
        label: '累计利润',
        data: points.map((p) => p.profit),
        borderColor: '#22d3ee',
        backgroundColor: 'rgba(34, 211, 238, 0.1)',
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#22d3ee',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: { parsed: { y: number | null } }) =>
            `累计利润: ¥${(ctx.parsed.y ?? 0).toLocaleString('zh-CN')}`,
        },
      },
    },
    scales: {
      x: {
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(148, 163, 184, 0.1)' },
      },
      y: {
        ticks: {
          color: '#94a3b8',
          callback: (value: string | number) => `¥${Number(value).toLocaleString('zh-CN')}`,
        },
        grid: { color: 'rgba(148, 163, 184, 0.1)' },
      },
    },
  };

  return (
    <div className="mt-8 h-72">
      <Line data={data} options={options} />
    </div>
  );
}
