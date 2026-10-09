import Link from 'next/link';
import { ArrowUpRight, Bot, FileLock2, Globe2, Instagram, Linkedin, Mail, ShieldCheck, TimerReset } from 'lucide-react';

export function Footer() {
  return <footer className="footer footerReworked">
    <div className="container footerTrustStrip">
      <div><ShieldCheck size={21}/><b>Privacy-conscious design</b><small>Access and data care matter</small></div>
      <div><FileLock2 size={21}/><b>Document-first</b><small>Information, better organized</small></div>
      <div><TimerReset size={21}/><b>Reminder-aware</b><small>Dates are easier to revisit</small></div>
      <div><Bot size={21}/><b>Contextual AI</b><small>Assistance with human review</small></div>
    </div>
    <div className="container footerGrid footerGridReworked">
      <div className="footerBrandCol"><Link className="brand" href="/"><span className="brandMark"><ShieldCheck size={17}/></span>DailyNeedAI</Link><p>Secure documents, intelligent reminders and contextual AI — a clearer way to organize your personal information.</p><div className="footerSocials"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={17}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:hello@dailyneedai.com" aria-label="Email"><Mail size={17}/></a></div><span className="footerStatus"><i/> BUILT FOR EVERYDAY CLARITY</span></div>
      <div><h4>Product</h4><Link href="/features">Platform</Link><Link href="/ai">AI assistant</Link><Link href="/reminders">Reminders</Link><Link href="/pricing">Pricing</Link><Link href="/#mobile">Mobile experience</Link></div>
      <div><h4>Company</h4><Link href="/about">About DailyNeedAI</Link><Link href="/#contact">Contact us</Link><Link href="/#faq">FAQs</Link><Link href="/help">Help centre</Link><Link href="/contact">Partnerships <ArrowUpRight size={11} className="inlineIcon"/></Link></div>
      <div><h4>Legal & trust</h4><Link href="/privacy">Privacy overview</Link><Link href="/terms">Terms of use</Link><Link href="/security">Security approach</Link><Link href="/login">Account login</Link><Link href="/signup">Create account</Link></div>
    </div>
    <div className="container footerBottom"><span>© {new Date().getFullYear()} DailyNeedAI. All rights reserved.</span><span>Designed with care · Built for clarity</span><Link href="#top">Back to top ↑</Link></div>
  </footer>;
}
