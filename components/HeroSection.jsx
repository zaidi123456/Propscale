'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, Search, Target } from 'lucide-react';
const popular = ['Manchester', 'Birmingham', 'Leeds', 'E17', 'Bristol', 'M14'];
const heroMessages = [
  { audience: 'For investors & landlords', lead: 'Discover where UK property', highlight: 'opportunities are strengthening first', description: 'Actionable intelligence on growth, rental demand, liquidity, value and timing — at the micro-market level.' },
  { audience: 'For deal sourcers & advisors', lead: 'Find smarter', highlight: 'sourcing opportunities', ending: 'before others do', description: 'Spot high-potential areas, pricing inefficiencies and demand strength to source better deals with confidence.' },
  { audience: 'For developers & operators', lead: 'Identify high-potential', highlight: 'development areas', ending: 'with confidence', description: 'Evaluate demand, growth, exits and feasibility signals to make better development and investment decisions.' },
];
export default function HeroSection() {
  const [messageIndex, setMessageIndex] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setMessageIndex(index => (index + 1) % heroMessages.length), 6500);
    return () => window.clearInterval(timer);
  }, []);
  const message = heroMessages[messageIndex];
  return <section id="top" className="relative isolate overflow-hidden">
    <div className="absolute inset-y-0 right-0 -z-10 w-full bg-cover bg-center md:w-[67%]" style={{backgroundImage:"url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2000&q=85')"}}/>
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/5 md:via-white/90"/><div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white to-transparent"/>
    <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-10 sm:px-8 sm:pt-14 lg:pb-16 lg:pt-14">
      <div className="max-w-[620px]"><div key={messageIndex} className="hero-copy min-h-[255px] sm:min-h-[275px]"><div className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-xs font-bold text-brand"><Target size={13}/> {message.audience}</div>
        <h1 className="max-w-[570px] text-[38px] font-extrabold leading-[1.04] tracking-[-1.8px] text-slate-950 sm:text-[48px]"><span>{message.lead}</span>{' '}<span className="text-brand">{message.highlight}</span>{message.ending && <> <span>{message.ending}</span></>}</h1>
        <p className="mt-4 max-w-[530px] text-[15px] leading-6 text-slate-500">{message.description}</p></div>
        <div className="mt-6 flex flex-wrap gap-3"><a href="#micro-markets" className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-violet-700">Explore top areas <ArrowRight size={16}/></a><a href="#markets" className="rounded-xl border border-violet-300 bg-white/80 px-5 py-3 text-sm font-bold text-brand transition hover:bg-violet-50">Browse by region</a></div>
        <form className="mt-5 flex max-w-[800px] items-center gap-2 rounded-xl border border-slate-200 bg-white p-1 shadow-sm" onSubmit={e=>e.preventDefault()}><Search className="ml-3 shrink-0 text-slate-400" size={18}/><input aria-label="Search places" placeholder="Search a city, postcode, town or area..." className="min-w-0 flex-1 px-1 py-2 text-sm outline-none placeholder:text-slate-400"/><button className="rounded-lg bg-brand px-4 py-2.5 text-xs font-bold text-white transition hover:bg-violet-700">Search</button></form>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs"><span className="mr-1 text-slate-400">Popular searches:</span>{popular.map(p=><button key={p} className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 font-semibold text-slate-600 transition hover:border-violet-300 hover:text-brand">{p}</button>)}</div>
      </div>
    </div>
  </section>;
}
