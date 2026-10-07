import { ArrowRight, Check, CircleDot, BarChart3 } from 'lucide-react';

import Button from '../ui/Button';
import Card from '../ui/Card';

const checks = ['Access top 20 previews across key views', 'Spot inefficiencies before the market moves', 'Save areas and set custom alerts', 'Download research snapshots'];

function UkDots() {
  return <img src="/Untitled.png" alt="Dotted map of London" className="london-map" />;
}

export default function FeatureBanners() {
  return <section id="how-it-works" className="mx-auto grid w-full max-w-[1090px] grid-cols-1 gap-card-padding px-page-gutter py-4 sm:px-8 lg:grid-cols-[1.33fr_1fr]">
    <Card as="article" variant="feature" className="min-h-[188px] overflow-hidden px-4 py-4 sm:px-page-gutter">
      <span className="grid h-6 w-6 place-items-center rounded-control bg-brand text-white"><BarChart3 size={13}/></span>
      <h2 className="mt-2 text-[12px] font-extrabold">Unlock deeper intelligence</h2>
      <ul className="mt-2 space-y-0.5">{checks.map(x => <li key={x} className="flex items-center gap-1.5 text-[9px] leading-3 text-slate-600"><Check size={10} strokeWidth={2.5} className="shrink-0 text-brand"/>{x}</li>)}</ul>
      <div className="mt-3 flex flex-wrap items-center gap-2"><Button href="#signup" size="xs">Join early access</Button><span className="text-[8px] text-brand">No card required</span></div>
      <img src="/intelligence-blocks.png" alt="" aria-hidden="true" className="blocks-figure"/>
    </Card>
    <Card as="article" variant="surface" className="relative min-h-[215px] overflow-hidden px-page-gutter py-4">
      <span className="grid h-7 w-7 place-items-center rounded-control bg-violet-100 text-brand"><CircleDot size={14}/></span>
      <h2 className="mt-3 text-[13px] font-extrabold">How PropSense works</h2>
      <p className="mt-2 max-w-[250px] text-[10px] leading-[15px] text-slate-500">We analyse thousands of data points across 31,000+ micro-markets to identify where investment signals are strengthening first.</p>
      <a href="#platform" className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold text-brand">Learn how it works <ArrowRight size={12}/></a>
      <UkDots/>
    </Card>
  </section>;
}


