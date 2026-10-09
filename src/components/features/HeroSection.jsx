'use client';
import { ArrowRight, Search, Target } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useMarketRotation } from './MarketRotationContext';
const popular = ['Manchester', 'Birmingham', 'Leeds', 'E17', 'Bristol', 'M14'];
const heroMessages = [
  { audience: 'For deal sourcers & advisors', lead: 'Find smarter', highlight: 'sourcing opportunities', ending: 'before others do', description: 'Spot high-potential areas, pricing inefficiencies and demand strength to source better deals with confidence.', action: 'Explore sourcing areas' },
  { audience: 'For investors & landlords', lead: 'Discover where UK property', highlight: 'opportunities are strengthening first', description: 'Actionable intelligence on growth, rental demand, liquidity, value and timing — at the micro-market level.', action: 'Explore top areas' },
  { audience: 'For developers & operators', lead: 'Identify high-potential', highlight: 'development areas', ending: 'with confidence', description: 'Evaluate demand, growth, exits and feasibility signals to make better development and investment decisions.', action: 'Explore development areas' },
];
export default function HeroSection() {
  const messageIndex = useMarketRotation();
  const message = heroMessages[messageIndex];
  return <section id="top" className="overflow-hidden bg-white">
    <div className="relative isolate mx-auto min-h-[600px] w-full max-w-[1440px] px-page-gutter pb-8 pt-10 sm:px-8 md:min-h-[536px] md:px-[65px] md:pb-0 md:pt-[56px]">
      <div className="absolute right-0 top-0 -z-10 h-[340px] w-full bg-cover bg-center md:h-[437px] md:w-[61%] md:bg-right" style={{backgroundImage:"url('/back.png')"}}/>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/5 md:hidden"/><div className="absolute left-[39%] top-0 -z-10 hidden h-[437px] w-[25%] bg-gradient-to-r from-white via-white/70 to-transparent md:block"/><div className="absolute inset-x-0 top-[296px] -z-10 h-11 bg-gradient-to-t from-white to-transparent md:top-[425px] md:h-8"/>
      <div className="w-full max-w-[803px]"><div className="min-h-[304px] md:h-[317px]"><div key={messageIndex} className="hero-copy"><div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-[12.5px] font-semibold text-brand"><Target size={14}/> {message.audience}</div>
        <h1 className="max-w-[600px] pt-2 text-[34px] font-extrabold leading-[1.1] tracking-[-1px] text-slate-950 sm:text-[40px]"><span>{message.lead}</span>{' '}<span className="text-brand">{message.highlight}</span>{message.ending && <> <span>{message.ending}</span></>}</h1>
        <p className="mt-2 max-w-[480px] text-[15.5px] leading-[25px] text-slate-500">{message.description}</p></div>
        <div className="mt-3 flex flex-wrap gap-3"><Button href="#micro-markets" size="md" className="h-[41px] rounded-[10px] px-5 text-[14px]">{message.action}<ArrowRight size={16}/></Button><Button href="#markets" variant="secondary" size="md" className="h-[43px] rounded-[10px] px-5 text-[14px]">Browse by region</Button></div></div>
        <form className="mt-9 flex w-full max-w-[803px] items-center gap-2 rounded-[14px] border border-slate-200 bg-white p-1.5 shadow-sm md:mt-16" onSubmit={e=>e.preventDefault()}><Search className="ml-2 shrink-0 text-slate-400" size={16}/><Input variant="search" aria-label="Search places" placeholder="Search a city, postcode, town or area..." className="text-[14px]"/><Button type="submit" size="sm" className="h-[35px] rounded-[10px] px-4 text-[13px]">Search</Button></form>
        <div className="mt-4 flex flex-wrap items-center gap-2.5 text-[12.5px]"><span className="mr-1 text-slate-400">Popular searches:</span>{popular.map(p=><Button type="button" variant="chip" size="chip" key={p} className="rounded-full px-2.5 py-1 text-[12.5px]">{p}</Button>)}</div>
      </div>
    </div>
  </section>;
}
