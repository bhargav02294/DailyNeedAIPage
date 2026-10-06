import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <Link className="brand" href="/"><span className="brandMark"><ShieldCheck size={17} /></span>DailyNeedAI</Link>
          <p>Secure documents, intelligent reminders and contextual AI — designed as one connected personal information platform.</p>
        </div>
        <div><h4>Product</h4><Link href="/features">Platform</Link><Link href="/security">Security</Link><Link href="/ai">AI</Link><Link href="/reminders">Reminders</Link></div>
        <div><h4>Company</h4><Link href="/about">About</Link><Link href="/pricing">Pricing</Link><Link href="/contact">Contact</Link></div>
        <div><h4>Account</h4><Link href="/login">Log in</Link><Link href="/signup">Create account</Link></div>
      </div>
      <div className="container copyright"><span>© {new Date().getFullYear()} DailyNeedAI</span><span>Secure by design. Built for everyday information.</span></div>
    </footer>
  );
}
