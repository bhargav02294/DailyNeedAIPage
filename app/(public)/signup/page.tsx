'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';
const DASHBOARD = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3000';

function readToken(payload: any): string | undefined {
  return payload?.accessToken ?? payload?.access_token ?? payload?.data?.accessToken ?? payload?.data?.access_token;
}

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(`${API_BASE}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        const message = Array.isArray(payload?.message) ? payload.message.join(', ') : payload?.message;
        throw new Error(message || 'Could not create the account. Check the details and try again.');
      }

      const token = readToken(payload);
      if (!token) throw new Error('The API response did not contain an access token. Check the backend response.');

      window.location.assign(`${DASHBOARD.replace(/\/$/, '')}/sso#dna_sso=${encodeURIComponent(token)}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not create the account. Please try again.');
      setLoading(false);
    }
  }

  return (
    <main className="loginWrap gridBg">
      <div className="authCard">
        <div className="brand"><span className="brandMark"><ShieldCheck size={18} /></span>DailyNeedAI</div>
        <h1>Create your workspace.</h1>
        <p>Start organizing your documents, reminders and personal context.</p>
        <form className="form" onSubmit={submit}>
          <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" required autoComplete="name" /></div>
          <div className="field"><label htmlFor="email">Email</label><input id="email" type="email" name="email" required autoComplete="email" /></div>
          <div className="field"><label htmlFor="password">Password</label><input id="password" type="password" name="password" required minLength={8} autoComplete="new-password" /></div>
          {error && <div className="error" role="alert">{error}</div>}
          <button className="btn primary" disabled={loading}>{loading ? 'Creating…' : 'Create account'} <ArrowRight size={15} /></button>
        </form>
        <div className="authLinks"><span>Already have an account?</span><Link href="/login">Log in</Link></div>
      </div>
    </main>
  );
}
