'use client';

import { useState, type FormEvent } from 'react';

type LeadFormProps = {
  source: string;
};

/**
 * 留资表单 — 通过 Formspree 免费接收用户提交
 *
 * 首次使用：
 *   1. 去 https://formspree.io/register 注册免费账号
 *   2. 创建新表单，复制 Form ID
 *   3. 替换下方 FORMSPREE_FORM_ID
 *
 * 免费套餐：50次提交/月，对起步足够
 */
const FORMSPREE_FORM_ID = 'YOUR_FORM_ID'; // TODO: 替换为你的 Formspree Form ID

export default function LeadForm({ source }: LeadFormProps) {
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
        body: JSON.stringify({
          name: name.trim(),
          contact: contact.trim(),
          source,
          page: typeof window !== 'undefined' ? window.location.href : '',
          submittedAt: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="mt-8 rounded-xl border border-green-400/20 bg-green-400/5 p-6 text-center">
        <p className="text-sm text-green-300">✅ 已收到，我们会尽快联系你。</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 rounded-xl border border-red-400/20 bg-red-400/5 p-6 text-center">
        <p className="text-sm text-red-300">提交失败，请稍后重试。</p>
        <button
          onClick={() => setError(false)}
          className="mt-2 text-xs text-cyan-400 underline hover:text-cyan-300"
        >
          重新填写
        </button>
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
        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full rounded-lg bg-cyan-500 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400 disabled:opacity-50"
        >
          {loading ? '提交中...' : '保存结果并获取报告'}
        </button>
      </div>
    </form>
  );
}
