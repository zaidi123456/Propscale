import { ArrowRight } from 'lucide-react';
import { Fragment } from 'react';
import Card from '../ui/Card';

const cards = [
  { tag: 'COMMAND CENTRE', title: 'Intelligent Dashboard', copy: 'At-a-glance clarity on every opportunity. AI-powered scores, signal summaries, and tailored insights help you focus on what matters most.', link: 'Explore Dashboard', variant: 0 },
  { tag: 'SMARTER DECISIONS', title: 'Compare & Benchmark', copy: 'Side-by-side comparisons with rich data and visual benchmarks. Identify areas with confidence and validate your investment thesis.', link: 'Start Comparing', variant: 1 },
  { tag: 'BUILD & TRACK STRATEGIES', title: 'Workflows & Plays', copy: 'Build focused strategies, track signals and collaborate with your team. Turn insights into action with structured workflows and real-time updates.', link: 'Create a Play', variant: 2 },
];

const places = [
  ['Birmingham Digbeth', '76', 'sunset'],
  ['Sheffield Kelham Island', '73', 'blue'],
  ['Liverpool Baltic Triangle', '68', 'green'],
  ['Liverpool Baltic Triangle', '65', 'warm'],
];
const metrics = [
  ['Opportunity Score', '76/100', '73/100', '68/100', '65/100'],
  ['Confidence Score', '71/100', '68/100', '62/100', '58/100'],
  ['Median Price', '£270k', '£363k', '£350k', '£343k'],
  ['1-Year Change', '3.7%', '2.9%', '2.2%', '1.4%'],
  ['National Percentile', '82nd', '78th', '72nd', '68th'],
];

function CompareMock() {
  return <>
    <div className="compare-heading"><strong>Compare Areas</strong><span>Side-by-side metric comparison for up to 4 markets.</span></div>
    <div className="market-preview-grid">{places.map(([name, score, tone], i) => <div className="market-preview" key={`${name}-${i}`}>
      <div className={`market-photo ${tone}`}><small>{['West Midlands', 'Yorkshire & Humber', 'North West', 'East Midlands'][i]}</small><b>↗</b></div>
      <div className="market-preview-info"><strong>{name}</strong><b>{score}<small>/100</small></b><span>Open Profile&nbsp; →</span></div>
    </div>)}</div>
    <div className="compare-metrics"><div className="metric-label">METRICS</div>{places.map(([name], i) => <div className="metric-place" key={`head-${i}`}>{name}</div>)}
      {metrics.map(([label, ...values], row) => <Fragment key={label}><div className="metric-label row-label">{label}</div>{values.map((value, col) => <div className={`metric-value ${row === 2 && col === 3 || row === 3 && col === 0 ? 'positive' : row === 2 && col === 0 || row === 3 && col === 3 ? 'negative' : ''}`} key={`${label}-${col}`}>{value}</div>)}</Fragment>)}
    </div>
  </>;
}

function DashboardMock({ variant }) {
  if (variant === 0) {
    return (
      <div className="mock-dash">
        <img
          src="/intelligent-dashboard.png"
          alt="Intelligent Dashboard preview"
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }
  if (variant === 1) {
    return (
      <div className="mock-dash">
        <img
          src="/compare-benchmark.png"
          alt="Compare & Benchmark preview"
          className="h-full w-full object-cover"
          style={{ objectPosition: '0 2%' }}
        />
      </div>
    );
  }
  if (variant === 2) {
    return (
      <div className="mock-dash">
        <img
          src="/workflows-plays.png"
          alt="Workflows & Plays preview"
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }
  const title = variant === 0 ? 'Cambridge Mill Road' : 'Northern Growth Play';
  return <div className="mock-dash"><div className="mock-top"><b><i/> PROPSCALE</b><span>Explore　 Map　 Compare　 Portfolio</span><span className="mock-avatar"/></div><div className="mock-body"><aside>Dashboard<br/><br/>Markets<br/><br/>Watchlists<br/><br/>Reports<br/><br/>Settings</aside><div className="mock-main"><div className="mock-title">{title}</div>
    {variant === 2 ? <><div className="workflow-row"><b>North Growth Play</b><span>Active</span><span>•••</span></div><div className="mock-chart wide"><div className="chart-label">Growth outlook · 12 month trend</div><svg viewBox="0 0 400 90" preserveAspectRatio="none"><path d="M0 70 C50 67,60 62,100 58 S160 54,205 42 S260 45,300 28 S355 28,400 12" fill="none" stroke="#805eff" strokeWidth="3"/></svg></div><div className="photo-strips"><i/><i/><i/><i/></div></> : <><div className="dash-location">East of England · Cambridge · Area overview</div><div className="dash-tabs">Overview　 Growth　 Drivers　 Risks　 Timing　 Planning</div><div className="section-caption">1. EXECUTIVE SUMMARY</div><div className="executive-grid"><div className="score-tile"><small>OPPORTUNITY SCORE</small><strong>87</strong><em>Top 5% nationally</em></div><div className="executive-stat"><small>Projected appreciation</small><b>5.2% – 8.1% pa</b><em>Strong outlook</em><div className="tiny-line"/></div><div className="executive-stat"><small>Rental yield strength</small><b className="green-stat">High</b><em>Gross yield 6.2%</em><div className="tiny-bars"/></div><div className="executive-stat"><small>Entry timing</small><b>Favourable</b><em>Act now</em><div className="timing-line"/></div></div><div className="section-caption verdict-caption">2. INVESTMENT VERDICT &amp; EVIDENCE</div><div className="verdict-panel"><b>Investment Verdict: Strong Buy Signal</b><p>Salford Quays presents a compelling investment case underpinned by strong growth momentum, improving liquidity and a favourable entry point relative to comparable markets.</p></div></>}
  </div></div></div>;
}

export default function PlatformPreview() {
  return <section id="platform" className="relative isolate min-h-[576px] w-full bg-[#faf8ff] pt-7"><div className="mx-auto w-full max-w-[1240px] px-4 sm:px-[30px]">
    <div className="mx-auto mb-5 flex max-w-[600px] flex-col items-center gap-2 text-center"><span className="rounded-full border border-[#d8ccff] bg-white px-2 py-[3px] text-[8px] font-bold text-brand">Coming Q4 2026</span><h2 className="text-[28px] font-bold leading-[31px] text-[#17142c]">Inside the full platform</h2><p className="text-[10px] leading-[15px] text-[#737373]">Discover, evaluate and act on opportunities in one integrated workflow.<br className="hidden sm:block"/> Everything you need, in context, so you can invest with confidence.</p></div>
    <div className="grid gap-4 lg:grid-cols-3">{cards.map(({ tag, title, copy, link, variant }) => <Card as="article" key={title} variant="preview"><DashboardMock variant={variant}/><div className="px-[14px] pb-[17px] pt-[13px]"><p className="text-[7px] font-extrabold tracking-[0.56px] text-brand">{tag}</p><h3 className="mt-0.5 text-[13px] leading-5 font-extrabold text-[#17142c]">{title}</h3><p className="mt-1 text-[8px] leading-[12px] text-slate-500">{copy}</p><a href="#signup" className="mt-2 inline-flex items-center gap-1 text-[7px] font-bold text-brand">{link} <ArrowRight size={9}/></a></div></Card>)}</div>
  </div></section>;
}
