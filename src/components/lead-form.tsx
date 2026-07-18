'use client';

import { useState, type FormEvent } from 'react';
const FORMSPREE_FORM_ID = 'xdaqgnok';

export default function LeadForm({ source }: { source: string }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), contact: contact.trim(), source, submittedAt: new Date().toISOString() }),
      });
      if (res.ok) setSubmitted(true); else setError(true);
    } catch { setError(true); }
    finally { setLoading(false); }
  };

  if (submitted) return (
    <div className="mt-8 rounded-xl border border-[#d6d0c4] bg-[#fef7ed] p-6 text-center">
      <p className="text-sm font-medium text-[#92400e]">✅ 已收到，我们会尽快联系你。</p>
    </div>
  );

  if (error) return (
    <div className="mt-8 rounded-xl border border-[#e8e4d9] bg-white p-6 text-center">
      <p className="text-sm text-[#78716c]">提交失败，请稍后重试。</p>
      <button onClick={() => setError(false)} className="mt-2 text-xs font-medium text-[#b45309] underline">重新填写</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="mt-8 rounded-xl border border-[#e8e4d9] bg-white p-6">
      <h3 className="text-sm font-semibold text-[#1a1a1a]">保存结果并获取报告</h3>
      <p className="mt-1 text-xs text-[#a8a29e]">留下联系方式，我们将为你整理一份完整分析。</p>
      <div className="mt-4 space-y-3">
        <div>
          <label htmlFor="lead-name" className="sr-only">称呼</label>
          <input
            id="lead-name"
            type="text" placeholder="你的称呼" value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-[#e8e4d9] bg-[#faf8f5] px-3.5 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#a8a29e] outline-none focus:border-[#b45309] focus:bg-white"
          />
        </div>
        <div>
          <label htmlFor="lead-contact" className="sr-only">联系方式</label>
          <input
            id="lead-contact"
            type="text" placeholder="手机号 / 微信号 / 邮箱" value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full rounded-lg border border-[#e8e4d9] bg-[#faf8f5] px-3.5 py-2.5 text-sm text-[#1a1a1a] placeholder:text-[#a8a29e] outline-none focus:border-[#b45309] focus:bg-white"
          />
        </div>
        <button
          type="submit" disabled={loading}
          className="w-full rounded-md bg-[#1a1a1a] py-2.5 text-sm font-semibold text-[#fdfbf7] transition-colors hover:bg-[#b45309] disabled:opacity-50"
        >
          {loading ? '提交中...' : '保存结果并获取报告'}
        </button>
      </div>
    </form>
  );
}
