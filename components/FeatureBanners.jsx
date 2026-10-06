import { ArrowRight, Check, CircleDot, BarChart3 } from 'lucide-react';

const checks = ['Detailed scores and signal breakdowns', 'Compare areas side-by-side', 'Save watchlists and get alerts', 'Download area reports'];

function UkDots() {
  return <img src="/Untitled.png" alt="Dotted map of London" className="london-map" />;
}

export default function FeatureBanners() {
  return <section id="how-it-works" className="mx-auto grid w-[91%] max-w-[1090px] gap-3 py-4 lg:grid-cols-[1.33fr_1fr]">
    <article className="relative min-h-[215px] overflow-hidden rounded-xl border border-violet-200 bg-[#f8f6ff] px-5 py-4">
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-brand text-white"><BarChart3 size={15}/></span>
      <h2 className="mt-3 text-[13px] font-extrabold">Unlock deeper intelligence</h2>
      <ul className="mt-2 space-y-1">{checks.map(x => <li key={x} className="flex items-center gap-1.5 text-[10px] leading-4 text-slate-600"><Check size={11} strokeWidth={2.5} className="text-brand"/>{x}</li>)}</ul>
      <div className="mt-3 flex items-center gap-2"><a href="#signup" className="rounded-lg bg-brand px-3.5 py-2 text-[10px] font-bold text-white hover:bg-violet-700">Create free account</a><span className="text-[9px] text-brand">No card required</span></div>
      <img src="/unlock-blocks.svg" alt="" aria-hidden="true" className="blocks-figure"/>
    </article>
    <article className="relative min-h-[215px] overflow-hidden rounded-xl border border-slate-200 bg-white px-5 py-4">
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-violet-100 text-brand"><CircleDot size={14}/></span>
      <h2 className="mt-3 text-[13px] font-extrabold">How PropSense works</h2>
      <p className="mt-2 max-w-[250px] text-[10px] leading-[15px] text-slate-500">We analyse thousands of data points across 31,000+ micro-markets to identify where investment signals are strengthening first.</p>
      <a href="#platform" className="mt-3 inline-flex items-center gap-1 text-[10px] font-bold text-brand">Learn how it works <ArrowRight size={12}/></a>
      <UkDots/>
    </article>
  </section>;
}


