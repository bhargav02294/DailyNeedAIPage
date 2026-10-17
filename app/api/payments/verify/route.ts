import { createHmac, timingSafeEqual } from 'node:crypto';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
const PLANS: Record<string, { amount: number }> = { personal: { amount: 19900 }, family: { amount: 49900 } };

export async function POST(request: Request) {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) return NextResponse.json({ error: 'Razorpay keys are not configured.' }, { status: 503 });
  try {
    const body = await request.json();
    const orderId = typeof body.razorpay_order_id === 'string' ? body.razorpay_order_id : '';
    const paymentId = typeof body.razorpay_payment_id === 'string' ? body.razorpay_payment_id : '';
    const signature = typeof body.razorpay_signature === 'string' ? body.razorpay_signature : '';
    const plan = typeof body.plan === 'string' ? body.plan : '';
    const selected = PLANS[plan];
    if (!orderId || !paymentId || !signature || !selected) return NextResponse.json({ error: 'Required payment verification fields are missing.' }, { status: 400 });

    const expected = createHmac('sha256', keySecret).update(`${orderId}|${paymentId}`).digest('hex');
    const expectedBuffer = Buffer.from(expected, 'hex');
    const suppliedBuffer = Buffer.from(signature, 'hex');
    if (expectedBuffer.length !== suppliedBuffer.length || !timingSafeEqual(expectedBuffer, suppliedBuffer)) {
      return NextResponse.json({ verified: false, error: 'Razorpay signature did not match.' }, { status: 400 });
    }

    // Confirm the order amount and plan against Razorpay's server API before returning success.
    const auth = Buffer.from(`${keyId}:${keySecret}`).toString('base64');
    const orderResponse = await fetch(`https://api.razorpay.com/v1/orders/${encodeURIComponent(orderId)}`, {
      headers: { Authorization: `Basic ${auth}` }, cache: 'no-store',
    });
    const order = await orderResponse.json();
    if (!orderResponse.ok || order.amount !== selected.amount || order.currency !== 'INR' || order.notes?.plan !== plan) {
      return NextResponse.json({ verified: false, error: 'The order amount or plan could not be verified.' }, { status: 400 });
    }
    return NextResponse.json({ verified: true, plan, paymentId, orderId, mode: 'test-or-live-configured-by-key' });
  } catch {
    return NextResponse.json({ verified: false, error: 'Payment verification could not be completed.' }, { status: 502 });
  }
}
