'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/v1';
const DASHBOARD = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3000';

function readToken(payload: any): string | undefined {
  return payload?.accessToken ?? payload?.access_token ?? payload?.data?.accessToken ?? payload?.data?.access_token;
}

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        const message = Array.isArray(payload?.message) ? payload.message.join(', ') : payload?.message;
        throw new Error(message || 'Login failed. Check your email and password.');
      }

      const token = readToken(payload);
      if (!token) throw new Error('The API response did not contain an access token. Check the backend response.');

      // Send the token only to the configured dashboard origin.
      window.location.assign(`${DASHBOARD.replace(/\/$/, '')}/sso#dna_sso=${encodeURIComponent(token)}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed. Please try again.');
      setLoading(false);
    }
  }

  return (
    <main className="loginWrap gridBg">
      <div className="authCard">
        <div className="brand"><span className="brandMark"><ShieldCheck size={18} /></span>DailyNeedAI</div>
        <h1>Welcome back.</h1>
        <p>Sign in to continue to your secure workspace.</p>
        <form className="form" onSubmit={submit}>
          <div className="field"><label htmlFor="email">Email</label><input id="email" type="email" name="email" required autoComplete="email" /></div>
          <div className="field"><label htmlFor="password">Password</label><input id="password" type="password" name="password" required autoComplete="current-password" /></div>
          {error && <div className="error" role="alert">{error}</div>}
          <button className="btn primary" disabled={loading}>{loading ? 'Signing in…' : 'Sign in'} <ArrowRight size={15} /></button>
        </form>
        <div className="authLinks"><span>New here?</span><Link href="/signup">Create account</Link></div>
      </div>
    </main>
  );
}
