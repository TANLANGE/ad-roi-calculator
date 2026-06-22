'use client';

import { useState, type FormEvent } from 'react';

type LeadFormProps = {
  source: string;
};

export default function LeadForm({ source }: LeadFormProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mt-8 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-6 text-center">
        <p className="text-sm text-cyan-300">
          已收到，我们会把结果整理思路留给你。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 rounded-xl border border-cyan-400/15 bg-slate-900 p-6">
      <h3 className="text-sm font-semibold text-slate-200">
        保存结果并获取报告
      </h3>
      <p className="mt-1 text-xs text-slate-400">
        留下联系方式，我们将为你整理一份完整分析。
      </p>

      <div className="mt-4 space-y-3">
        <div>
          <label htmlFor="lead-name" className="sr-only">称呼</label>
          <input
            id="lead-name"
            type="text"
            placeholder="你的称呼"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-cyan-400/15 bg-slate-800 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="lead-contact" className="sr-only">联系方式</label>
          <input
            id="lead-contact"
            type="text"
            placeholder="手机号 / 微信号 / 邮箱"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full rounded-lg border border-cyan-400/15 bg-slate-800 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400/40 focus:outline-none"
          />
        </div>
        <input type="hidden" name="source" value={source} />
        <button
          type="submit"
          className="mt-2 w-full rounded-lg bg-cyan-500 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
        >
          保存结果并获取报告
        </button>
      </div>
    </form>
  );
}
