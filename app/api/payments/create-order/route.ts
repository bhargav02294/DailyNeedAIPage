import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
const PLANS: Record<string, { amount: number; name: string }> = {
  personal: { amount: 19900, name: 'Personal' },
  family: { amount: 49900, name: 'Family' },
};

export async function POST(request: Request) {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    return NextResponse.json({ error: 'Razorpay keys are not configured. Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to .env.local, then restart the server.' }, { status: 503 });
  }
  try {
    const body = await request.json();
    const plan = typeof body.plan === 'string' ? body.plan : '';
    const selected = PLANS[plan];
    if (!selected) return NextResponse.json({ error: 'Invalid pricing plan.' }, { status: 400 });
    const auth = Buffer.from(`${keyId}:${keySecret}`).toString('base64');
    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST', headers: { Authorization: `Basic ${auth}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: selected.amount, currency: 'INR', receipt: `dna_${plan}_${Date.now()}`, notes: { plan, product: 'DailyNeedAI' } }),
      cache: 'no-store',
    });
    const data = await response.json();
    if (!response.ok) return NextResponse.json({ error: data?.error?.description || 'Razorpay could not create the order.' }, { status: response.status });
    return NextResponse.json({ keyId, orderId: data.id, amount: data.amount, currency: data.currency, plan });
  } catch {
    return NextResponse.json({ error: 'Could not connect to Razorpay. Check the server and try again.' }, { status: 502 });
  }
}
