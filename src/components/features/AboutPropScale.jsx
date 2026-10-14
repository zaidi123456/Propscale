import {
  ArrowRight,
  BarChart3,
  Building2,
  Database,
  Flag,
  House,
  MapPin,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

const whyCards = [
  { icon: MapPin, title: 'Micro-market precision', text: 'Analyse 31,449 micro-markets across England for true local insight.' },
  { icon: TrendingUp, title: 'Clearer signals', text: 'Identify momentum, timing and risk at neighbourhood level.' },
  { icon: ShieldCheck, title: 'Better context', text: 'Explain the “why” with evidence users can trust.' },
  { icon: Zap, title: 'Confidence to act', text: 'Turn intelligence into clearer investment decisions sooner.' },
];

const principles = [
  { icon: House, title: '1. Property opportunity is local', text: 'The strongest opportunities are often discovered at a micro-market level, not by averaging across large areas.' },
  { icon: Database, title: '2. Data needs interpretation', text: 'Raw data shows what has happened. Evidence and context explain why it matters and what may happen next.' },
  { icon: SlidersHorizontal, title: '3. The best decisions combine signals', text: 'Growth, rental demand, liquidity, timing, planning and risk need to be read together.' },
  { icon: Target, title: '4. Intelligence should lead to action', text: 'Research is only valuable when it helps users choose, compare, act and communicate with confidence.' },
];

const differentiators = [
  { image: '/about-micro-market-precision.svg', title: 'Micro-market precision', text: 'PropSense analyses England at local level, helping users see patterns that broader geographies often miss.', alt: 'Illustrated micro-market map beside a Sefton opportunity score' },
  { image: '/about-intelligence-drivers.svg', title: 'Intelligence, not just data', text: 'Interpretation turns complex property, rental and planning data into usable decisions.', alt: 'Opportunity score with rental demand, market strength, liquidity and relative value drivers' },
  { image: '/about-evidence-backed-support.svg', title: 'Evidence-backed decision support', text: 'Every area view connects the score to its underlying drivers, evidence and context.', alt: 'Evidence summary and recent rental, property demand and planning signals' },
];

const dataSources = [
  { icon: '/HM Land Registry.png', title: 'HM Land Registry', text: 'Property transactions' },
  { icon: '/Office for National Statistics.png', title: 'Office for National Statistics', text: 'Economic & population data' },
  { icon: Building2, title: 'Local authority planning', text: 'Planning applications & outcomes' },
  { icon: '/Ordnance Survey.png', title: 'Ordnance Survey', text: 'Geography & location data' },
  { icon: BarChart3, title: 'Rental & market evidence', text: 'Rents, yields & market trends' },
];

function Eyebrow({ children }) {
  return <p className="text-[10px] font-extrabold uppercase tracking-[1.25px] text-[#6e4eef]">{children}</p>;
}

function IconBadge({ icon: Icon, className = '' }) {
  return <span className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f0ebff] text-[#7856ff] ${className}`}><Icon size={17} strokeWidth={2.1} /></span>;
}

function HeroVisual() {
  return (
    <div className="mx-auto w-full max-w-[688px]">
      <img src="/about-market-intelligence-hero.svg" alt="PropSense preview showing micro-market coverage, market signals and an opportunity score" className="block h-auto w-full" width="688" height="419" />
    </div>
  );
}

function Section({ id, className = '', children }) {
  return <section id={id} className={className}><div className="mx-auto w-full max-w-[1320px] px-5 py-10 sm:px-9 lg:py-[50px]">{children}</div></section>;
}

export default function AboutPropScale() {
  return (
    <main className="bg-[#fdfcff] text-[#17142c]">
      <section className="min-h-[482px] border-b border-[#eee9fa]">
        <div className="mx-auto grid min-h-[482px] w-full max-w-[1320px] items-center gap-3 px-5 py-10 sm:px-9 lg:grid-cols-[1fr_1.08fr] lg:py-0">
          <div className="hero-copy relative z-30 max-w-[545px]">
            <Eyebrow>About PropScale</Eyebrow>
            <h1 className="mt-4 max-w-[540px] text-[32px] font-extrabold leading-[1.18] tracking-[-1.5px] text-[#17142c] sm:text-[36px]">Area intelligence built for residential property investment.</h1>
            <p className="mt-4 max-w-[450px] text-[14px] leading-[23px] text-[#625c72] sm:text-[15px]">Built around neighbourhood-level market analysis, PropSense helps investors, sourcers, developers and property decision-makers identify high-potential areas, understand the local drivers behind them and turn fragmented market data into clearer decisions.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/explore-uk-markets" size="hero" className="h-[43px] rounded-[5px] px-5 text-[10px]">Explore the platform <ArrowRight size={13}/></Button>
              <Button href="/#how-it-works" variant="secondary" size="hero" className="h-[43px] rounded-[5px] px-5 text-[10px]">See how PropSense works</Button>
            </div>
          </div>
          <div className="relative z-10 -mx-2 mt-5 lg:mx-0 lg:mt-0"><HeroVisual /></div>
        </div>
      </section>

      <Section className="border-b border-[#eee9fa] bg-[#faf8ff]">
        <div className="grid gap-8 lg:grid-cols-[.95fr_1.35fr] lg:items-center lg:gap-12">
          <div><Eyebrow>Why PropSense exists</Eyebrow><h2 className="mt-4 text-[25px] font-extrabold leading-tight tracking-[-.8px] sm:text-[27px]">We make local differences visible.</h2><p className="mt-4 text-[12px] leading-[19px] text-[#777186]">Broad geographic lines can hide useful opportunities. Two adjacent streets often have very different demand, market strength and buyer behaviour. PropSense makes those local differences easier to see, explain and act on.</p><p className="mt-3 text-[12px] leading-[19px] text-[#777186]">By analysing residential markets at micro level, we reveal where local conditions are changing and why those differences matter.</p></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">{whyCards.map(({ icon, title, text }) => <Card key={title} className="min-h-[178px] p-3 sm:min-h-[212px] sm:p-4"><IconBadge icon={icon}/><h3 className="mt-3 text-[12px] font-bold leading-[17px]">{title}</h3><p className="mt-2 text-[10px] leading-[15px] text-[#777186]">{text}</p></Card>)}</div>
        </div>
      </Section>

      <Section className="border-b border-[#eee9fa]">
        <Eyebrow>Our view of the market</Eyebrow>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{principles.map(({ icon, title, text }) => <Card key={title} className="min-h-[156px] p-4 sm:min-h-[176px]"><IconBadge icon={icon} className="h-8 w-8"/><h3 className="mt-3 text-[12px] font-bold leading-[17px]">{title}</h3><p className="mt-2 text-[10px] leading-[15px] text-[#777186]">{text}</p></Card>)}</div>
      </Section>

      <Section className="border-b border-[#eee9fa] bg-[#faf8ff]">
        <Eyebrow>What makes PropSense different</Eyebrow>
        <div className="mt-6 grid gap-4 md:grid-cols-3">{differentiators.map(({ image, title, text, alt }) => title === 'Evidence-backed decision support' ? <img key={title} src={image} alt={alt} className="h-auto w-full self-start" width="403" height="273"/> : <Card key={title} className="overflow-hidden p-3.5"><div className="aspect-[369/160] overflow-hidden rounded-lg bg-[#f1edff]"><img src={image} alt={alt} className="h-full w-full object-cover object-top"/></div><h3 className="mt-3 text-[13px] font-extrabold leading-[18px]">{title}</h3><p className="mt-2 text-[10px] leading-[15px] text-[#777186]">{text}</p></Card>)}</div>
      </Section>

      <Section className="border-b border-[#eee9fa]">
        <Eyebrow>Mission &amp; vision</Eyebrow>
        <div className="mt-6 grid gap-4 md:grid-cols-2"><Card className="min-h-[150px] p-5 sm:min-h-[174px]"><Target className="text-[#7856ff]" size={20}/><h3 className="mt-3 text-[14px] font-bold">Our mission</h3><p className="mt-2 text-[11px] leading-[17px] text-[#777186]">Help property decision-makers understand local residential markets with greater clarity, context and confidence.</p></Card><Card className="min-h-[150px] p-5 sm:min-h-[174px]"><Flag className="text-[#7856ff]" size={20}/><h3 className="mt-3 text-[14px] font-bold">Our vision</h3><p className="mt-2 text-[11px] leading-[17px] text-[#777186]">Build the research and intelligence layer for residential property investing, bringing fragmented market data, property analysis, local evidence and decision tools together in one place.</p></Card></div>
      </Section>

      <Section className="border-b border-[#eee9fa] bg-[#faf8ff]">
        <div className="flex flex-wrap items-end justify-between gap-4"><div><Eyebrow>Built on credible data sources</Eyebrow><p className="mt-2 text-[11px] leading-[16px] text-[#777186]">Transparent evidence, trusted sources and clear methodology underpin every PropSense view.</p></div><a href="/#methodology" className="inline-flex items-center gap-1 text-[9px] font-bold text-[#6e4eef]">Learn more about data &amp; methodology <ArrowRight size={12}/></a></div>
        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">{dataSources.map(({ icon, title, text }) => {
          const SourceIcon = typeof icon === 'string' ? null : icon;
          const imageIcon = typeof icon === 'string' && icon.startsWith('/');
          const iconContent = imageIcon
            ? <img src={icon} alt="" className="h-7 w-7 object-contain" />
            : SourceIcon ? <SourceIcon size={17}/> : icon;
          return <Card key={title} className="min-h-[92px] p-3"><span className={`flex h-7 w-7 items-center justify-center rounded-md ${imageIcon ? '' : 'bg-[#f0ebff]'} text-[16px] text-[#7856ff]`}>{iconContent}</span><h3 className="mt-2 text-[9px] font-bold leading-[13px]">{title}</h3><p className="mt-1 text-[8px] leading-3 text-[#8a8498]">{text}</p></Card>;
        })}</div>
        <p className="mt-4 flex items-center gap-2 text-[9px] font-semibold text-[#49445b]"><ShieldCheck size={13} className="text-[#7856ff]"/>Transparent methodology. Evidence-led analysis. Built for decision support.</p>
      </Section>

      <section className="px-5 py-5 sm:px-9 sm:py-7">
        <div className="relative mx-auto w-full max-w-[1320px] overflow-hidden rounded-lg">
          <img src="/about-closing-cta.svg" alt="See local markets more clearly. Explore the research preview or join early access." className="block h-auto w-full" width="1320" height="121" />
          <a href="/explore-uk-markets" aria-label="Explore the research preview" className="absolute left-[67.1%] top-[31%] h-[37%] w-[16.8%] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4d20e8]" />
          <a href="#signup" aria-label="Join early access" className="absolute left-[84.8%] top-[31%] h-[37%] w-[10.3%] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#4d20e8]" />
        </div>
      </section>
    </main>
  );
}
