import { ArrowRight, Check, Target, BarChart3 } from 'lucide-react';

import Button from '../ui/Button';
import Card from '../ui/Card';

const checks = ['Access top 20 previews across key views', 'Spot inefficiencies before the market moves', 'Save areas and set custom alerts', 'Download research snapshots'];

function UkDots() {
  return <img src="/Untitled.png" alt="Dotted map of London" className="london-map" />;
}

export default function FeatureBanners() {
  return <>
    <section id="how-it-works" className="mx-auto grid w-full max-w-[1314px] grid-cols-1 gap-5 px-page-gutter pb-0 pt-section-y sm:px-8 lg:grid-cols-[minmax(0,731.39fr)_minmax(0,562.61fr)] lg:px-0 lg:pb-0 lg:pt-[35px]">
      <Card as="article" variant="feature" className="flex min-h-[302px] w-full flex-col justify-center gap-4 overflow-hidden px-7 py-7 lg:h-[301.75px] lg:flex-row lg:items-center lg:justify-start lg:gap-8 lg:py-7 lg:pr-0">
        <div className="relative z-10 flex min-w-0 flex-col gap-3 lg:w-[381.39px] lg:flex-none">
          <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-brand text-white"><BarChart3 size={18}/></span>
          <h2 className="text-[17px] font-bold leading-[26px] text-[#171717]">Unlock deeper intelligence</h2>
          <ul className="space-y-[6px]">{checks.map(x => <li key={x} className="flex items-center gap-2 text-[13px] leading-5 text-[#4a5565]"><Check size={13} strokeWidth={2.5} className="shrink-0 text-brand"/>{x}</li>)}</ul>
          <div className="flex flex-wrap items-center gap-3 pt-2"><Button href="#signup" size="md" className="h-[40px] rounded-[10px] px-5 text-[13.5px]">Join early access</Button><span className="text-[12px] text-brand">No card required</span></div>
        </div>
        <img src="/intelligence-blocks.png" alt="" aria-hidden="true" className="blocks-figure hidden lg:block"/>
      </Card>
      <Card as="article" variant="surface" className="relative flex min-h-[303px] flex-col items-start gap-[11px] overflow-hidden rounded-[16px] border border-[#d1d5dc] p-7 lg:h-[303px]">
        <div className="relative z-10 flex flex-col gap-[11px] lg:w-[329px]">
          <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-violet-100 text-brand"><Target size={18}/></span>
          <h2 className="text-[17px] font-bold leading-[26px] text-[#171717]">How PropSense works</h2>
          <p className="text-[13px] leading-[21px] text-[#6a7282]">We analyse thousands of data points across 31,000+ micro-markets to surface the best sourcing opportunities before others do.</p>
          <a href="#platform" className="inline-flex items-center gap-2 text-[13px] font-semibold text-brand">Learn how it works <ArrowRight size={14}/></a>
        </div>
        <UkDots/>
      </Card>
    </section>
    <footer className="flex h-[66px] w-full items-center justify-center border-t border-[#f3f4f6] px-4 text-center text-[11.5px] text-[#99a1af]">
      PropSense does not provide financial advice. Data last updated 24 May 2026.
    </footer>
  </>;
}
