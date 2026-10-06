'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Bolt, Gem, Home, PoundSterling, TrendingUp } from 'lucide-react';

const categorySets = [
  [
    { title:'Top Emerging Areas', copy:'Micro-markets showing early signs of strong momentum.', icon:TrendingUp, shade:'bg-violet-50 border-violet-200 text-violet-500' },
    { title:'Strongest Rental Pressure', copy:'Areas with rising rental demand and tightening supply.', icon:Home, shade:'bg-orange-50 border-orange-200 text-orange-500' },
    { title:'Best Growth Outlook', copy:'Places with the strongest forecast capital growth potential.', icon:Gem, shade:'bg-emerald-50 border-emerald-200 text-emerald-500' },
    { title:'Relative Value', copy:'Areas offering attractive value versus local fundamentals.', icon:PoundSterling, shade:'bg-rose-50 border-rose-200 text-rose-500' },
    { title:'Liquidity Expansion', copy:'Areas seeing improving market activity and better routes to exit.', icon:Bolt, shade:'bg-blue-50 border-blue-200 text-blue-500' },
  ],
  [
    { title:'Best Sourcing Areas', copy:'Areas with strong rental demand, liquidity and supply potential.', icon:TrendingUp, shade:'bg-violet-50 border-violet-200 text-violet-500' },
    { title:'Investor Demand Areas', copy:'Where investor appetite and rental demand are strongest.', icon:Home, shade:'bg-orange-50 border-orange-200 text-orange-500' },
    { title:'Growth-Led Opportunities', copy:'Areas backed by growth, infrastructure and population demand.', icon:Gem, shade:'bg-emerald-50 border-emerald-200 text-emerald-500' },
    { title:'Undervalued Micro-Markets', copy:'Attractive value micro-markets priced below future potential.', icon:PoundSterling, shade:'bg-rose-50 border-rose-200 text-rose-500' },
    { title:'Easier Exit Markets', copy:'Markets with stronger liquidity and better resale potential.', icon:Bolt, shade:'bg-blue-50 border-blue-200 text-blue-500' },
  ],
  [
    { title:'High-Potential Areas', copy:'Areas with strong demand and growth fundamentals.', icon:TrendingUp, shade:'bg-violet-50 border-violet-200 text-violet-500' },
    { title:'Rental Demand Strength', copy:'Areas with strong occupier demand and rental velocity.', icon:Home, shade:'bg-orange-50 border-orange-200 text-orange-500' },
    { title:'Demand Growth Areas', copy:'Micro-markets with accelerating rental and population-demand signals.', icon:Gem, shade:'bg-emerald-50 border-emerald-200 text-emerald-500' },
    { title:'Pricing Headroom', copy:'Markets with room for rent growth, value uplift or stronger exit pricing.', icon:PoundSterling, shade:'bg-rose-50 border-rose-200 text-rose-500' },
    { title:'Exit Liquidity Signals', copy:'Sales liquidity, investor activity and exit confidence signals.', icon:Bolt, shade:'bg-blue-50 border-blue-200 text-blue-500' },
  ],
];

export default function CategoryCards() {
  const [setIndex, setSetIndex] = useState(0);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setSetIndex(index => (index + 1) % categorySets.length), 6500);
    return () => window.clearInterval(timer);
  }, []);

  return <section id="explore" className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8">
    <h2 className="mb-5 text-xl font-extrabold tracking-tight">Explore by what matters most</h2>
    <div key={setIndex} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {categorySets[setIndex].map(({title,copy,icon:Icon,shade})=><a href="#micro-markets" key={title} className={`category-card group flex min-h-[142px] flex-col rounded-2xl border p-4 transition hover:-translate-y-1 hover:shadow-soft ${shade}`}>
        <span className="mb-3 grid h-9 w-9 place-items-center rounded-full bg-white"><Icon size={18}/></span>
        <span className="text-sm font-extrabold text-slate-800">{title}</span>
        <span className="mt-1 flex-1 text-xs leading-4 text-slate-500">{copy}</span>
        <ArrowUpRight className="ml-auto transition group-hover:translate-x-0.5" size={16}/>
      </a>)}
    </div>
  </section>;
}
