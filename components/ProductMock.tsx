import { Bell, Bot, FileLock2, FileText, Search, ShieldCheck } from 'lucide-react';

export function ProductMock() {
  return (
    <div className="productVisual float glow">
      <div className="mock">
        <aside className="mockSide">
          <div className="mockLogo">DNA</div>
          <div className="sideActive"><ShieldCheck size={13}/> Overview</div>
          <div className="sideLine"/><div className="sideLine short"/><div className="sideLine"/><div className="sideLine short"/>
        </aside>
        <main className="mockMain">
          <div className="mockTop"><span className="miniPill">● SECURE WORKSPACE</span><span className="mockMuted">Today · Personal Space</span></div>
          <div className="mockTitle">Everything important, connected.</div>
          <div className="documentRow">
            <div className="documentCard"><div className="docIcon"><FileText size={15}/></div><div><strong>Passport.pdf</strong><small>Expires · Apr 2028</small></div><span className="docTag">SAFE</span></div>
            <div className="documentCard"><div className="docIcon"><FileText size={15}/></div><div><strong>Car Insurance</strong><small>Renewal · Oct 2026</small></div><span className="docTag soon">SOON</span></div>
          </div>
          <div className="mockCards">
            <div className="miniCard"><div className="icon"><FileLock2 size={16}/></div><strong>Documents</strong><small>Protected files & structured details.</small></div>
            <div className="miniCard"><div className="icon"><Bell size={16}/></div><strong>What’s Coming</strong><small>Dates, renewals and deadlines.</small></div>
            <div className="miniCard"><div className="icon"><Bot size={16}/></div><strong>Ask AI</strong><small>Answers from your context.</small></div>
          </div>
          <div className="aiBar"><Bot size={14}/><span>Ask: “What needs my attention this month?”</span><span className="aiArrow">↗</span></div>
          <div className="mockSearch"><Search size={13}/> Search across your life <span>⌘ K</span></div>
        </main>
      </div>
    </div>
  );
}
