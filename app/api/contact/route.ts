import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    const subject = body.subject || body.topic || 'Product enquiry';
    if (!name || !email || !message || String(message).trim().length < 10) {
      return NextResponse.json({ error: 'Please provide your name, email and a message of at least 10 characters.' }, { status: 400 });
    }
    const key = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || 'hello@dailyneedai.com';
    if (!key) return NextResponse.json({ ok: true, mode: 'fallback' });
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || 'DailyNeedAI Website <onboarding@resend.dev>',
        to: [to], reply_to: email, subject: `Website enquiry: ${subject}`,
        text: `Name: ${name}
Email: ${email}
Topic: ${subject}

${message}`,
      }),
    });
    if (!response.ok) return NextResponse.json({ error: 'Email delivery failed. Please try again later.' }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
