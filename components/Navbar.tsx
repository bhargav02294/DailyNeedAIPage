'use client';

import Link from 'next/link';
import { ArrowUpRight, Menu, ShieldCheck, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const links = [
  ['/features', 'Product'],
  ['/security', 'Security'],
  ['/ai', 'AI'],
  ['/reminders', 'Reminders'],
  ['/pricing', 'Pricing'],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container navInner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brandMark"><ShieldCheck size={17} /></span>
          DailyNeedAI
        </Link>

        <nav className="navLinks" aria-label="Main navigation">
          {links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>

        <div className="navCta">
          <ThemeToggle />
          <Link className="btn ghost loginBtn" href="/login">Log in</Link>
          <Link className="btn primary startBtn" href="/signup">Get started <ArrowUpRight size={14} /></Link>
          <button className="mobileMenu" type="button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobilePanel">
          <div className="container mobilePanelInner">
            {links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <div className="mobilePanelActions">
              <Link className="btn ghost" href="/login" onClick={() => setOpen(false)}>Log in</Link>
              <Link className="btn primary" href="/signup" onClick={() => setOpen(false)}>Get started <ArrowUpRight size={14} /></Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
