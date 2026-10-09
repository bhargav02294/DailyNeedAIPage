'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';

export function FloatingContact() {
  return <Link className="floatingContact" href="/contact" aria-label="Contact DailyNeedAI"><Mail size={17}/><span>Contact us</span></Link>;
}
