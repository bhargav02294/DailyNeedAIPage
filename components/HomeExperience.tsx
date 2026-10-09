'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { CSSProperties, FormEvent } from 'react';
import {
  ArrowDownRight, ArrowRight, BellRing, Bot, Check, ChevronDown, ChevronLeft,
  ChevronRight, CircleHelp, FileLock2, FileText, Fingerprint, Globe2, Instagram,
  Linkedin, LockKeyhole, Mail, MessageSquareText, MonitorSmartphone, ShieldCheck,
  Smartphone, Sparkles, TimerReset, Users, WalletCards, Workflow, X,
} from 'lucide-react';
import { ProductMock } from './ProductMock';

const mobileSlides = [
  { n: '01', label: 'Your documents', title: 'Important files, in their place.', copy: 'Keep identity documents, policies, receipts and family records organized in one calm, searchable space.', icon: FileText, tag: 'DOCUMENT VAULT' },
  { n: '02', label: 'Smart reminders', title: 'Know what is coming next.', copy: 'See renewals, expiry dates and personal deadlines before they become last-minute problems.', icon: BellRing, tag: 'LIFE TIMELINE' },
  { n: '03', label: 'Ask AI', title: 'Get context, not another search result.', copy: 'Ask useful questions about your organized information and find the next step faster.', icon: Bot, tag: 'CONTEXTUAL AI' },
  { n: '04', label: 'Family space', title: 'A clearer view of what matters.', copy: 'Bring selected family details and shared responsibilities into one thoughtful workspace.', icon: Users, tag: 'CONNECTED LIFE' },
];
const trustCards = [
  { icon: FileLock2, title: 'Document-first organization', text: 'Keep essential records together and easier to find.', label: 'ORGANIZE' },
  { icon: TimerReset, title: 'Reminder intelligence', text: 'Make dates, renewals and deadlines visible before they are urgent.', label: 'STAY AHEAD' },
  { icon: Bot, title: 'AI with context', text: 'A simpler way to ask questions and work with your information.', label: 'UNDERSTAND' },
  { icon: Fingerprint, title: 'Privacy-conscious design', text: 'Authentication, access boundaries and careful handling matter.', label: 'CONTROL' },
];
const securityCards = [
  { icon: LockKeyhole, title: 'Protected access', text: 'Account-based access and clear separation of personal workspaces.' },
  { icon: ShieldCheck, title: 'Security by design', text: 'A security-first product approach, with no unsupported “100% secure” promises.' },
  { icon: Globe2, title: 'Built for real life', text: 'A product direction shaped around practical personal information needs.' },
  { icon: FileLock2, title: 'Document awareness', text: 'Keep important records and relevant dates visible in one workflow.' },
];
const faqs = [
  ['What is DailyNeedAI?', 'DailyNeedAI is a personal information platform that brings document organization, reminders and contextual AI together in one workspace.'],
  ['What can I keep in the document space?', 'You can organize useful personal records such as identity documents, policies, certificates, receipts and other important files, depending on the features enabled in your account.'],
  ['How do reminders work?', 'Add or manage dates related to your documents and tasks, then use the upcoming timeline to keep renewals and deadlines in view. Availability depends on the connected reminder features.'],
  ['What can I ask the AI?', 'The AI experience is designed to help you find context, understand information and identify next steps. Always review important or high-impact answers before acting on them.'],
  ['Can I use DailyNeedAI on mobile?', 'The public website is responsive across phones, tablets and desktops. Dedicated iOS and Android apps should only be announced once official app listings are available.'],
  ['Is DailyNeedAI free?', 'Visit the Pricing page for the current plan structure. Any paid features and limits should be confirmed there before subscribing.'],
  ['How do I contact the team?', 'Use the contact form on this page or visit the Contact page. Include enough detail for the team to understand your question.'],
] as const;
const marqueeItems = ['DOCUMENT INTELLIGENCE', 'PERSONAL REMINDERS', 'CONTEXTUAL AI', 'FAMILY WORKSPACE', 'SEARCH THAT CONNECTS', 'ONE CLEARER LIFE INBOX'];

function LaptopScene() {
  return <div className="laptopScene" aria-label="DailyNeedAI dashboard displayed on a laptop">
    <div className="sceneGlow" />
    <div className="scenePerson scenePersonLeft"><i/><b/><span/></div>
    <div className="scenePerson scenePersonRight"><i/><b/><span/></div>
    <div className="laptopFrame"><div className="laptopCamera"/><div className="laptopScreen"><ProductMock /></div><div className="laptopChin"><span>DAILYNEEDAI · PERSONAL LIFE OS</span></div></div>
    <div className="laptopBase"><div className="laptopHinge"/><div className="laptopKeyboard"/><div className="laptopTrackpad"/></div>
    <div className="sceneCaption"><span className="liveDot"/> ONE WORKSPACE <span className="captionDivider"/> DOCUMENTS · REMINDERS · AI</div>
  </div>;
}

function MobileMock({ index }: { index: number }) {
  const slide = mobileSlides[index];
  const Icon = slide.icon;
  return <div className="phoneFrame" key={slide.n}>
    <div className="phoneIsland"/><div className="phoneStatus"><span>9:41</span><span>● ● ▰</span></div>
    <div className="phoneAppHead"><span className="phoneLogo">D</span><span><b>DailyNeedAI</b><small>YOUR PERSONAL SPACE</small></span><span className="phoneAvatar">B</span></div>
    <div className="phoneGreeting"><small>YOUR DAY, IN CONTEXT</small><h3>{index === 0 ? 'Good morning.' : index === 1 ? 'Stay one step ahead.' : index === 2 ? 'Ask what matters.' : 'Life, connected.'}</h3><p>A little more clarity for today.</p></div>
    <div className="phoneFeatureIcon"><Icon size={23}/><span>{slide.tag}</span></div>
    {index === 0 && <div className="phoneDataList"><div><span className="tinyDoc">PDF</span><b>Passport.pdf<small>Identity · Updated recently</small></b><Check size={15}/></div><div><span className="tinyDoc">DOC</span><b>Health policy<small>Insurance · Personal</small></b><ArrowRight size={15}/></div><div><span className="tinyDoc">PDF</span><b>Home documents<small>Family · 4 files</small></b><ArrowRight size={15}/></div></div>}
    {index === 1 && <div className="phoneAgenda"><div><span className="agendaDate">18</span><b>Insurance renewal<small>Car · 12 days away</small></b></div><div><span className="agendaDate">24</span><b>Family appointment<small>Personal · Next week</small></b></div><div><span className="agendaDate">02</span><b>Document check-in<small>Review · Next month</small></b></div></div>}
    {index === 2 && <div className="phoneChat"><span className="chatBadge"><Sparkles size={12}/> DAILYNEEDAI</span><p>What needs my attention this month?</p><div className="chatAnswer">Start with the upcoming renewals, then review the documents connected to each date.<small>AI-generated guidance · Review before acting</small></div><div className="chatInput">Ask about your information… <ArrowRight size={13}/></div></div>}
    {index === 3 && <div className="phoneFamily"><div className="familyAvatars"><span>B</span><span>AM</span><span>R</span><span>+2</span></div><b>Family overview</b><p>Shared details, key dates and useful information — organized with care.</p><div className="familyLine"><Users size={14}/> 3 connected profiles <ArrowRight size={13}/></div></div>}
    <div className="phoneBottomNav"><span>⌂<small>Home</small></span><span>▤<small>Files</small></span><span>◷<small>Upcoming</small></span><span>✧<small>Ask AI</small></span></div>
  </div>;
}

export function HomeExperience() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [readiness, setReadiness] = useState([true, true, false, false, true, false, false, true]);
  const [contact, setContact] = useState({ name: '', email: '', topic: 'Product enquiry', message: '' });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState('');
  const [review, setReview] = useState(0);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.mobileShowcase, .certSection, .readinessSection, .marqueeSection, .trustSection, .securityBand, .reviewsSection, .contactSection, .faqSection, .platformCta, .finalCta'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sectionVisible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -35px 0px' });
    sections.forEach((section) => { section.classList.add('sectionReveal'); observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  const done = readiness.filter(Boolean).length;
  const percent = Math.round(done / readiness.length * 100);
  const checklist = ['Organize key documents', 'Review upcoming renewals', 'Add important family dates', 'Set a reminder for a deadline', 'Review personal information', 'Check document expiry dates', 'Identify a next action', 'Ask AI about a document'];
  const testimonials = [
    { quote: 'A single place for the things I otherwise keep scattered across folders and notes.', name: 'Early product vision', role: 'A calmer way to organize' },
    { quote: 'The useful part is connecting a document to the date and the action that comes next.', name: 'Product principle', role: 'From information to action' },
    { quote: 'A thoughtful personal workspace should help people feel prepared, not overwhelmed.', name: 'Design principle', role: 'Clarity over complexity' },
  ];

  async function submitContact(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setSending(true); setToast('');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(contact) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || 'Message could not be sent right now. Please try again.');
      setToast(data?.mode === 'fallback' ? 'Form validated. Configure RESEND_API_KEY to deliver enquiries by email.' : 'Message sent successfully. Thank you for reaching out.'); setContact({ name: '', email: '', topic: 'Product enquiry', message: '' });
    } catch (err) { setToast(err instanceof Error ? err.message : 'Message could not be sent right now. Please try again.'); }
    finally { setSending(false); window.setTimeout(() => setToast(''), 6000); }
  }

  return <main>
    <section className="hero heroReworked" id="top"><div className="heroGrid gridBg"/><div className="container heroReworkedInner">
      <div className="heroIntro"><div className="eyebrow reveal"><span className="pulse"/> YOUR LIFE, BETTER CONNECTED</div><h1 className="reveal delay1">Important things.<br/><span className="gradientText">Never out of context.</span></h1><p className="reveal delay2">Documents, reminders and contextual AI — designed to help you organize what matters and see what needs attention next.</p><div className="actions heroActions reveal delay3"><Link className="btn primary" href="/signup">Explore DailyNeedAI <ArrowRight size={16}/></Link><a className="btn ghost" href="#how-it-works">See how it works <ArrowDownRight size={15}/></a></div><div className="heroMeta"><span><CheckCircle2Icon/> A connected workspace</span><span><CheckCircle2Icon/> Designed for everyday life</span></div></div>
      <LaptopScene />
      <div className="heroBottomNote"><span className="mono">DNA / 001</span><span>ONE PERSONAL INFORMATION LAYER</span><span>SCROLL TO EXPLORE ↓</span></div>
    </div></section>

    <section className="mobileShowcase section" id="mobile"><div className="container"><div className="mobileShowcaseHead"><div><span className="kicker">A clearer view, wherever you are</span><h2>Your life, in your pocket.</h2><p>Move from a desktop overview to a focused mobile experience without losing the thread.</p></div><div className="slideControls"><button aria-label="Previous mobile preview" onClick={() => setActiveSlide((activeSlide + mobileSlides.length - 1) % mobileSlides.length)}><ChevronLeft size={18}/></button><span>0{activeSlide + 1} <i>/</i> 0{mobileSlides.length}</span><button aria-label="Next mobile preview" onClick={() => setActiveSlide((activeSlide + 1) % mobileSlides.length)}><ChevronRight size={18}/></button></div></div>
      <div className="mobileShowcaseGrid"><div className="mobileSlideInfo" key={mobileSlides[activeSlide].n}><span className="mobileIndex">{mobileSlides[activeSlide].n} <i>—</i> {mobileSlides[activeSlide].label.toUpperCase()}</span><h3>{mobileSlides[activeSlide].title}</h3><p>{mobileSlides[activeSlide].copy}</p><div className="slideDots">{mobileSlides.map((s,i)=><button key={s.n} aria-label={`Show ${s.label}`} className={i===activeSlide?'active':''} onClick={()=>setActiveSlide(i)}/>)}</div><div className="phoneFeatureNote"><MonitorSmartphone size={17}/><span>Designed to adapt from desktop to mobile.<small>Responsive web experience</small></span></div></div><div className="phoneStage"><div className="phoneOrbit orbitOne"/><div className="phoneOrbit orbitTwo"/><MobileMock index={activeSlide}/><div className="phoneFloatTag tagTop"><span className="liveDot"/> LIVE PREVIEW</div><div className="phoneFloatTag tagBottom"><Workflow size={14}/> ONE CONNECTED WORKSPACE</div></div></div>
    </div></section>

    <section className="certSection" id="principles"><div className="container"><div className="certHeader"><span className="kicker">Trust is built, not claimed</span><h2>Thoughtful foundations.<br/>Clear product principles.</h2><p>Explore the principles behind how DailyNeedAI is designed. We don't display third-party certifications as awarded unless they are independently verified.</p></div><div className="certGrid">
      {[
        {icon:ShieldCheck,title:'Security-first design',sub:'Access and privacy matter',detail:'Security is treated as a product foundation: authenticated access, careful data handling and transparent product boundaries.'},
        {icon:LockKeyhole,title:'Encryption awareness',sub:'Protect data in transit & at rest',detail:'Use appropriately configured transport and storage protections in the deployed system. Exact implementation depends on the connected infrastructure.'},
        {icon:Globe2,title:'Privacy-conscious',sub:'Your information deserves care',detail:'Design choices should minimize unnecessary exposure and keep access to personal information deliberate.'},
        {icon:Fingerprint,title:'User-controlled access',sub:'A personal workspace',detail:'Authentication and authorization should keep personal workspaces separated and make access boundaries clear.'},
        {icon:FileLock2,title:'Document lifecycle',sub:'From file to next step',detail:'Document information and important dates are intended to work together, so records are easier to revisit before a deadline.'},
        {icon:Bot,title:'Responsible AI',sub:'Useful context, human judgement',detail:'AI is an assistant, not an authority. Review important answers and verify consequential decisions.'},
      ].map((item,i)=>{const Icon=item.icon;return <article className="certCard" key={item.title} tabIndex={0}><div className="certCardTop"><span className="certIcon"><Icon size={22}/></span><span className="certNumber">0{i+1}</span></div><h3>{item.title}</h3><p>{item.sub}</p><div className="certReveal"><span>DESIGN PRINCIPLE</span><p>{item.detail}</p></div></article>})}
    </div></div></section>

    <section className="readinessSection section" id="readiness"><div className="container"><div className="readinessHeader"><span className="kicker">Personal readiness checklist</span><h2>How prepared is your everyday life?</h2><p>Use this interactive checklist to reflect on the basics. Check off the steps you have completed and see your readiness score change.</p></div><div className="readinessLayout"><div className="readinessList">{checklist.map((item,i)=><button key={item} className={`readinessItem ${readiness[i]?'checked':''}`} onClick={()=>setReadiness(old=>old.map((v,j)=>i===j?!v:v))}><span className="readinessCheck">{readiness[i]&&<Check size={15}/>}</span><span className="readinessItemIcon">{i===0||i===5?<FileText size={17}/>:i===1||i===3?<BellRing size={17}/>:i===2?<Users size={17}/>:i===7?<Bot size={17}/>:<ShieldCheck size={17}/>}</span><span className="readinessItemText"><b>{item}</b><small>{['DOCUMENT ORGANIZATION','UPCOMING','FAMILY','REMINDERS','PERSONAL SPACE','DOCUMENTS','NEXT ACTION','AI ASSISTANCE'][i]}</small></span><span className="readinessPoints">+{i%3===0?'15':i%2===0?'10':'12'}</span></button>)}</div><aside className="readinessScore"><div className="scoreRing" style={{'--score':`${percent}%`} as CSSProperties}><div className="scoreInner"><strong>{percent}</strong><span>OUT OF 100</span></div></div><span className="scoreEyebrow">YOUR READINESS SNAPSHOT</span><h3>{percent<35?'A few good first steps.':percent<70?'Your foundation is taking shape.':'You are building good habits.'}</h3><p>{percent<35?'Start small: organize one important document and note one upcoming date.':percent<70?'You have started connecting the essentials. Keep going one practical step at a time.':'Nice progress. Review your list occasionally as life and documents change.'}</p><div className="scoreBar"><span style={{width:`${percent}%`}}/></div><small>Interactive checklist · Not a formal assessment</small></aside></div></div></section>

    <section className="marqueeSection"><div className="container marqueeTop"><div><span className="kicker">One connected platform</span><h2>From information to action.</h2></div><p>Less hunting through folders. More clarity about what matters next.</p></div><div className="marqueeViewport" aria-label="DailyNeedAI capabilities"><div className="marqueeTrack">{[...marqueeItems,...marqueeItems].map((item,i)=><div className="marqueeItem" key={`${item}-${i}`}><span className="marqueeMark"><Check size={14}/></span>{item}<span className="marqueeSeparator">✳</span></div>)}</div></div><div className="container marqueeFoot"><span>BUILT AROUND REAL PERSONAL WORKFLOWS</span><span>HOVER OR FOCUS TO PAUSE THE MOTION</span></div></section>

    <section className="trustSection section" id="how-it-works"><div className="container"><div className="trustHeading"><div><span className="kicker">The DailyNeedAI trust layer</span><h2>One workspace.<br/>A few powerful building blocks.</h2></div><p>Designed to connect the practical pieces of personal life — documents, dates, family context and AI — without making the experience feel complicated.</p></div><div className="trustGrid">{trustCards.map((item,i)=>{const Icon=item.icon;return <article className="trustCard" key={item.title}><div className="trustCardTop"><span className="iconBox"><Icon size={20}/></span><span className="trustNo">0{i+1}</span></div><span className="trustLabel">{item.label}</span><h3>{item.title}</h3><p>{item.text}</p><div className="trustCardLine"/></article>})}</div><div className="trustBottom"><span><ShieldCheck size={18}/> Designed with clarity and control in mind</span><Link href="/features">Explore product features <ArrowRight size={15}/></Link></div></div></section>

    <section className="securityBand section" id="security"><div className="container"><div className="securityIntro"><span className="kicker">Trust vault / security approach</span><h2>Security isn't a badge.<br/><span className="gradientText">It's a responsibility.</span></h2><p>We aim to make privacy and access boundaries part of the product experience. Specific certifications, infrastructure guarantees and security claims should only be published when verified for the deployed service.</p></div><div className="securityCards">{securityCards.map((item,i)=>{const Icon=item.icon;return <article className="securityCard" key={item.title}><div className="securityCardIcon"><Icon size={22}/></div><span className="securityStatus"><i/> PRODUCT PRINCIPLE</span><h3>{item.title}</h3><p>{item.text}</p><span className="securityCardNo">SEC / 0{i+1}</span></article>})}</div><div className="securityNote"><ShieldCheck size={19}/><p><b>Transparent by default.</b> DailyNeedAI does not claim ISO certification, AWS hosting or any specific encryption implementation on this page unless those details have been confirmed for the live product.</p><Link href="/security">Read security approach <ArrowRight size={14}/></Link></div></div></section>

    <section className="reviewsSection section"><div className="container reviewsLayout"><div className="reviewsIntro"><span className="kicker">Product principles</span><h2>Designed for less chaos.<br/>Built for more clarity.</h2><p>We are shaping DailyNeedAI around a simple idea: useful information should be easier to find, and the next step should be easier to see.</p><div className="reviewControls"><button aria-label="Previous quote" onClick={()=>setReview((review+testimonials.length-1)%testimonials.length)}><ChevronLeft size={18}/></button><span>0{review+1} <i>/</i> 0{testimonials.length}</span><button aria-label="Next quote" onClick={()=>setReview((review+1)%testimonials.length)}><ChevronRight size={18}/></button></div></div><article className="reviewCard" key={review}><div className="reviewQuoteMark">“</div><p className="reviewQuote">{testimonials[review].quote}</p><div className="reviewAuthor"><div className="reviewAvatar"><Sparkles size={18}/></div><div><b>{testimonials[review].name}</b><small>{testimonials[review].role}</small></div><span className="reviewPrinciple">PRODUCT VISION</span></div><div className="reviewCardBottom"><span>DAILYNEEDAI / DESIGN NOTES</span><span>0{review+1} — 0{testimonials.length}</span></div></article></div></section>

    <section className="contactSection section" id="contact"><div className="container contactLayout"><div className="contactIntro"><span className="kicker">Get in touch</span><h2>Have a question?<br/>Let's make it clearer.</h2><p>Tell us what you're looking for. For product questions, partnerships or feedback, send a note and we'll route it to the right place.</p><div className="contactInfoLine"><span><Mail size={17}/></span><div><b>Contact the team</b><small>Share your question through the form.</small></div></div><div className="contactInfoLine"><span><MessageSquareText size={17}/></span><div><b>Helpful context helps</b><small>Include the page or feature you are asking about.</small></div></div><div className="contactTinyNote"><LockKeyhole size={14}/> Please don't include passwords or sensitive document details.</div></div><form className="contactForm" onSubmit={submitContact}><div className="formTitle"><span className="formMark"><Mail size={18}/></span><div><h3>Send an enquiry</h3><p>We’ll use these details to respond to your message.</p></div></div><div className="contactFieldGrid"><label>Name<input required minLength={2} value={contact.name} onChange={e=>setContact({...contact,name:e.target.value})} placeholder="Your name" autoComplete="name"/></label><label>Email address<input required type="email" value={contact.email} onChange={e=>setContact({...contact,email:e.target.value})} placeholder="you@example.com" autoComplete="email"/></label></div><label>What is this about?<select value={contact.topic} onChange={e=>setContact({...contact,topic:e.target.value})}><option>Product enquiry</option><option>Technical support</option><option>Partnership</option><option>Feedback</option><option>Other</option></select></label><label>Message<textarea required minLength={10} value={contact.message} onChange={e=>setContact({...contact,message:e.target.value})} placeholder="Tell us a little about your question…" rows={4}/></label><button className="btn primary contactSubmit" disabled={sending}>{sending?'Sending message…':'Send message'} <ArrowRight size={16}/></button><small className="formPrivacy">By sending this form, you agree that we may use these details to respond to your enquiry.</small>{toast&&<div role="status" className={`contactToast ${toast.startsWith('Message sent') || toast.startsWith('Form validated')?'success':''}`}><span>{toast.startsWith('Message sent')?<Check size={17}/>:<CircleHelp size={17}/>}</span>{toast}</div>}</form></div></section>

    <section className="faqSection section" id="faq"><div className="container faqLayout"><div className="faqIntro"><span className="kicker">Questions, answered</span><h2>Good to know<br/>before you begin.</h2><p>Some quick answers about the platform, reminders, AI and how to get help.</p><Link href="/help" className="faqHelpLink">Visit help centre <ArrowRight size={15}/></Link></div><div className="faqList">{faqs.map(([q,a],i)=><article className={`faqItem ${openFaq===i?'open':''}`} key={q}><button aria-expanded={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}><span className="faqNum">0{i+1}</span><b>{q}</b><span className="faqToggle"><ChevronDown size={17}/></span></button><div className="faqAnswer" style={{gridTemplateRows:openFaq===i?'1fr':'0fr'}}><div><p>{a}</p></div></div></article>)}</div></div></section>

    <section className="platformCta"><div className="container platformCtaInner"><div className="platformGlyph"><MonitorSmartphone size={26}/></div><div className="platformCtaCopy"><span className="kicker">Wherever life happens</span><h2>One experience. Every screen.</h2><p>Use the responsive DailyNeedAI website on desktop, tablet or phone. Official iOS and Android app links can be added here once the apps are published.</p></div><div className="platformBadges"><div className="platformBadge"><Globe2 size={20}/><span><b>Web</b><small>Available on browsers</small></span><Check size={14}/></div><div className="platformBadge pending"><span className="storeGlyph"></span><span><b>iOS app</b><small>Coming when published</small></span></div><div className="platformBadge pending"><Smartphone size={20}/><span><b>Android app</b><small>Coming when published</small></span></div></div></div></section>

    <section className="finalCta"><div className="container finalCtaInner"><span className="kicker">A more connected everyday</span><h2>Make room for what matters.</h2><p>Bring your important information into one calmer, more useful workspace.</p><div className="actions"><Link className="btn primary" href="/signup">Get started <ArrowRight size={16}/></Link><Link className="btn ghost" href="/pricing">Explore pricing</Link></div><span className="finalCtaMark">DAILYNEEDAI / YOUR PERSONAL INFORMATION LAYER</span></div></section>
  </main>;
}

function CheckCircle2Icon(){return <span className="heroCheck"><Check size={11}/></span>}
