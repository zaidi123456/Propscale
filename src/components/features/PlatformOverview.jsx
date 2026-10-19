import {
  ArrowRight,
  Target,
} from 'lucide-react';
import Button from '../ui/Button';

function Eyebrow({ children }) {
  return <p className="text-[9px] font-extrabold uppercase tracking-[1px] text-[#6e4eef]">{children}</p>;
}

function PlatformHeroVisual() {
  return <div className="mx-auto w-full max-w-[723px]"><img src="/platform-area-intelligence-hero.svg" alt="PropScale area intelligence preview with live opportunities, local market map and area score" className="block h-auto w-full" width="723" height="405"/></div>;
}

function FeatureNote({ title }) {
  return <div className="mt-3 rounded-lg border border-[#e8e0ff] bg-[#f7f3ff] p-3 sm:p-4"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#7856ff]"><Target size={14}/></span><h3 className="mt-2 text-[10px] font-bold text-[#28243c]">{title}</h3><p className="mt-1 text-[8px] leading-3 text-[#858095]">PropSense combines multiple signals, evidence and context so the reason behind every reading stays visible.</p></div>;
}

function AreaOverviewMock() {
  return <img src="/platform-area-overview.svg" alt="Area overview for Sefton 0370 with a micro-market map, market tiers and growth, rental, liquidity and relative value metrics" className="block h-auto w-full" width="812" height="410"/>;
}

function ProductSection({ number, title, text, note, copyImage, sectionImage, imageAlt = '', imageWidth = 1320, imageHeight = 362, reverse = false, tinted = false, bordered = false, children }) {
  if (sectionImage) return <section className={`${bordered ? 'border-t border-[#eee9fa]' : ''} ${tinted ? 'bg-[#faf8ff]' : 'bg-[#fdfcff]'}`}><img src={sectionImage} alt={imageAlt} className="site-content block h-auto" width={imageWidth} height={imageHeight}/></section>;
  const sectionHeight = tinted ? 'lg:min-h-[460px]' : 'lg:min-h-[402px]';
  const columns = copyImage ? 'lg:grid-cols-[456px_minmax(0,1fr)]' : 'lg:grid-cols-2';
  return <section className={`${bordered || tinted ? 'border-t border-[#eee9fa]' : ''} ${tinted ? 'bg-[#faf8ff]' : 'bg-[#fdfcff]'}`}><div className={`mx-auto grid w-full max-w-[1320px] items-center gap-8 px-5 py-12 sm:px-9 ${sectionHeight} ${columns} lg:gap-12 lg:py-12 ${reverse ? '[&>*:first-child]:lg:order-2' : ''} site-container`}>
    {copyImage ? <img src={copyImage} alt={`${number}. ${title}. ${text} ${note}`} className="block h-auto w-full" width="456" height="297"/> : <div><Eyebrow>{number}</Eyebrow><h2 className="mt-3 text-[23px] font-extrabold leading-tight tracking-[-.8px] sm:text-[26px]">{title}</h2><p className="mt-4 text-[10px] leading-[16px] text-[#777186] sm:text-[11px] sm:leading-[17px]">{text}</p><FeatureNote title={note}/></div>}
    <div className="min-w-0">{children}</div>
  </div></section>
}

export default function PlatformOverview() {
  return <main className="bg-[#fdfcff] text-[#17142c]">
    <section className="bg-[#fdfcff]"><div className="mx-auto grid min-h-[408px] w-full max-w-[1320px] items-center gap-5 px-5 py-10 sm:px-9 lg:grid-cols-[.9fr_1.1fr] lg:gap-10 lg:py-0 site-container">
      <div className="max-w-[440px]"><Eyebrow>The PropScale platform</Eyebrow><h1 className="mt-4 text-[30px] font-extrabold leading-[1.2] tracking-[-1.1px] sm:text-[36px]">From market signal<br className="hidden sm:block"/> to investment decision.</h1><p className="mt-4 max-w-[430px] text-[12px] leading-[18px] text-[#777186] sm:text-[13px] sm:leading-[19px]">PropSense helps users discover high-potential micro-markets, understand the evidence behind each signal, compare alternatives, track opportunities and turn intelligence into action.</p><div className="mt-5 flex flex-wrap gap-2.5"><Button href="/explore-uk-markets" size="hero" className="h-9 rounded-[5px] px-4 text-[9px]">Explore the research preview <ArrowRight size={12}/></Button><Button href="#signup" variant="secondary" size="hero" className="h-9 rounded-[5px] px-4 text-[9px]">Join early access</Button></div></div>
      <PlatformHeroVisual />
    </div></section>

    <section className="border-y border-[#eee9fa] bg-white"><div className="relative mx-auto w-full max-w-[1440px] site-container">
      <img src="/platform-workflow-strip.svg" alt="Platform workflow: discover changing markets, understand evidence, compare areas, track opportunities and act with shared reports." className="block h-auto w-full" width="1440" height="95"/>
      {[24, 41.4, 58.7, 76.1].map((position) => <span key={position} aria-hidden="true" className="absolute top-[26.3%] h-[47.4%] w-px bg-[#e9e4f4]" style={{ left: `${position}%` }}/>) }
    </div></section>

    <ProductSection number="01" title="Area intelligence" text="PropSense analyses England’s 31,449 micro-markets, combining property, rental, transportation, planning, demographic and market signals to reveal where local investment conditions are strengthening, weakening or changing." note="The PropSense Score" copyImage="/platform-area-intelligence-copy.svg"><AreaOverviewMock/></ProductSection>
    <ProductSection number="02" title="Property intelligence" text="PropSense surfaces properties within mapped micro-markets and shows how local intelligence, pricing context and investment fit come together. Review specific opportunities without losing sight of the market around them." note="Investment view & thesis" sectionImage="/platform-property-intelligence-section.svg"/>
    <ProductSection number="03" title="Workspaces that keep every workflow moving" text="PropSense workspaces help investors, sourcers and developers save, organise and share the areas, stories and reports that matter most. From watchlists to client boards and site shortlists, each workspace is designed to turn research into organised workflow." note="Portfolio Monitoring & Briefings" tinted sectionImage="/platform-workspaces-section.svg" imageAlt="Workspaces section showing the London Acquisition Board, saved areas, report cards and report creation panel."/>
    <ProductSection number="04" title="Data & Evidence Trail" text="PropSense connects the underlying evidence to every insight. Drivers, data sources and dates stay visible, so a headline signal can be understood, challenged and explained with confidence." note="Automated Reports & Briefings" sectionImage="/platform-evidence-trail-section.svg" imageAlt="Data and Evidence Trail section showing evidence types, key drivers, source trails and automated reporting." imageWidth={1320} imageHeight={378} reverse bordered/>

    <section className="border-y border-[#eee9fa] bg-[#faf8ff]"><img src="/platform-workflow-audiences.svg" alt="Built for different workflows: investors, deal sourcers, developers, and lenders and partners." className="mx-auto block h-auto w-full max-w-[1440px]" width="1440" height="303"/></section>

    <section className="py-7 sm:py-9"><div className="relative site-content overflow-hidden rounded-lg">
      <img src="/platform-closing-cta.svg" alt="Better decisions start with better intelligence. Join early access or book a demo." className="block h-auto w-full" width="1248" height="121"/>
      <a href="#signup" aria-label="Join early access" className="absolute left-[75.2%] top-[33%] h-[35%] w-[12.8%] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4d20e8]"/>
      <a href="#demo" aria-label="Book a demo" className="absolute left-[89%] top-[33%] h-[35%] w-[9.4%] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4d20e8]"/>
    </div></section>
    <footer className="border-t border-[#eee9fa] py-5 text-center text-[9px] text-[#9a95a8]">PropSense does not provide financial advice. Data last updated 24 May 2026.</footer>
  </main>;
}
