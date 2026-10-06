'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, Search, Target } from 'lucide-react';
const popular = ['Manchester', 'Birmingham', 'Leeds', 'E17', 'Bristol', 'M14'];
const heroMessages = [
  { audience: 'For deal sourcers & advisors', lead: 'Find smarter', highlight: 'sourcing opportunities', ending: 'before others do', description: 'Spot high-potential areas, pricing inefficiencies and demand strength to source better deals with confidence.', action: 'Explore sourcing areas' },
  { audience: 'For investors & landlords', lead: 'Discover where UK property', highlight: 'opportunities are strengthening first', description: 'Actionable intelligence on growth, rental demand, liquidity, value and timing — at the micro-market level.', action: 'Explore top areas' },
  { audience: 'For developers & operators', lead: 'Identify high-potential', highlight: 'development areas', ending: 'with confidence', description: 'Evaluate demand, growth, exits and feasibility signals to make better development and investment decisions.', action: 'Explore development areas' },
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
    <div className="absolute right-0 top-0 -z-10 h-[340px] w-full bg-cover bg-center md:h-[306px] md:w-[61%]" style={{backgroundImage:"url('/back.png')"}}/>
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/5 md:hidden"/><div className="absolute left-[39%] top-0 -z-10 hidden h-[306px] w-[25%] bg-gradient-to-r from-white via-white/70 to-transparent md:block"/><div className="absolute inset-x-0 top-[296px] -z-10 h-11 bg-gradient-to-t from-white to-transparent md:top-[274px] md:h-8"/>
    <div className="mx-auto max-w-[1440px] px-5 pb-1 pt-10 sm:px-11 sm:pt-10">
      <div className="max-w-[620px]"><div className="min-h-[304px] md:min-h-[268px]"><div key={messageIndex} className="hero-copy"><div className="mb-5 inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-bold text-brand"><Target size={11}/> {message.audience}</div>
        <h1 className="max-w-[380px] text-[30px] font-extrabold leading-[.96] tracking-[-1.1px] text-slate-950"><span>{message.lead}</span>{' '}<span className="text-brand">{message.highlight}</span>{message.ending && <> <span>{message.ending}</span></>}</h1>
        <p className="mt-3 max-w-[360px] text-[11px] leading-4 text-slate-500 lg:text-xs">{message.description}</p></div>
        <div className="mt-5 flex flex-wrap gap-2"><a href="#micro-markets" className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-3.5 py-2 text-[10px] font-bold text-white shadow-sm transition hover:bg-violet-700">{message.action} <ArrowRight size={12}/></a><a href="#markets" className="rounded-lg border border-violet-300 bg-white/80 px-3.5 py-2 text-[10px] font-bold text-brand transition hover:bg-violet-50">Browse by region</a></div></div>
        <form className="flex w-full max-w-[560px] items-center gap-2 rounded-lg border border-slate-200 bg-white p-1 shadow-sm" onSubmit={e=>e.preventDefault()}><Search className="ml-2 shrink-0 text-slate-400" size={14}/><input aria-label="Search places" placeholder="Search a city, postcode, town or area..." className="min-w-0 flex-1 px-1 py-1 text-[10px] outline-none placeholder:text-slate-400"/><button className="rounded-md bg-brand px-3 py-1.5 text-[10px] font-bold text-white transition hover:bg-violet-700">Search</button></form>
        <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[9px]"><span className="mr-1 text-slate-400">Popular searches:</span>{popular.map(p=><button key={p} className="rounded-full border border-slate-200 bg-white/90 px-2.5 py-1 font-semibold text-slate-600 transition hover:border-violet-300 hover:text-brand">{p}</button>)}</div>
      </div>
    </div>
  </section>;
}
