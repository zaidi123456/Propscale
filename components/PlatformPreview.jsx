import { ArrowRight } from 'lucide-react';
import { Fragment } from 'react';

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
  if (variant === 1) return <div className="mock-dash compare-mock"><div className="mock-top"><b><i/> PROPSCALE</b><span>Home　 Explore　 Map　 Compare　 Watchlist</span><span className="mock-avatar"/></div><div className="mock-body"><aside>WORKSPACE<br/><br/>Dashboard<br/><br/>Plays<br/><br/>Portfolios<br/><br/>Watchlist<br/><br/>Alerts<br/><br/>EXPLORE<br/><br/>Search &amp; Explore<br/><br/>Top Views<br/><br/>Market Map<br/><br/>Compare</aside><main className="compare-main"><CompareMock/></main></div></div>;
  if (variant === 2) return <div className="mock-dash play-preview"><div className="mock-top"><b><i/> PROPSCALE</b><span>Home  Explore  Map  Compare  Watchlist</span><span className="mock-avatar"/></div><div className="mock-body"><aside><b>WORKSPACE</b><br/>&#9679; Dashboard<br/>&#9679; Plays<br/>&#9679; Portfolios<br/>&#9679; Watchlist<br/>&#9679; Alerts<br/><br/><b>EXPLORE</b><br/>&#9679; Search &amp; Explore<br/>^ Top Views<br/>&#9679; Market Map<br/>&#9679; Compare<br/><br/><b>INTELLIGENCE</b><br/>&#9679; Area Intelligence<br/>&#9679; Property Intelligence<br/>&#9679; Market Signals<br/>&#9679; Reports<br/><br/><b>ACCOUNT</b><br/>&#9679; Settings<br/>&#9679; Billing<br/>&#9679; Help Centre</aside><main className="play-main"><div className="play-back">&lt; &nbsp; Back to Plays</div><div className="play-heading"><div><small>Growth</small><h4>Northern Growth Play</h4><p>High-growth emerging markets across the North West and Yorkshire</p></div><div className="thesis"><b>&#9679; &nbsp;Play Thesis</b><span>This play tracks northern areas with improving growth outlook, focusing on affordability and strengthening liquidity signals.</span><a>View full thesis &#9679;</a></div><button>&#9679; &nbsp; Compare</button><button className="purple-btn">&#9679; &nbsp; Edit Play</button></div><div className="play-metrics"><div><b>&#9679;</b><span>Areas in Play<strong>4</strong></span></div><div><b>&#9679;</b><span>Avg Opportunity Score<strong>80</strong></span></div><div><b>&#9679;</b><span>Signals Improving<strong>3</strong></span></div><div><b>&#9679;</b><span>New Opportunities<strong>2</strong></span></div><div><b>&#9679;</b><span>Confidence<strong className="high">High</strong></span></div></div><div className="play-chart"><div className="play-chart-head"><div><b>Play Signal Trend</b><span>Average opportunity score across areas in this play</span></div><label>&#9679; +7.3% since tracking began &nbsp; <em>1M&#9679;</em></label></div><div className="chart-area"><div className="y-labels"><span>105</span><span>100</span><span>95</span><span>90</span><span>85</span></div><svg viewBox="0 0 600 88" preserveAspectRatio="none"><path d="M0 70 C55 66 70 59 120 57 S180 51 240 50 S310 44 365 37 S430 32 480 22 S545 18 600 8" fill="none" stroke="#7958ff" strokeWidth="2.5"/></svg><div className="x-labels"><span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span></div></div></div><div className="areas-head"><b>Areas in this play</b><a>View all areas &#9679;</a></div><div className="play-areas"><div><i className="area-watch"/><strong>Manchester</strong><small>North West</small></div><div><i className="area-building"/><strong>Leeds</strong><small>Yorkshire</small></div><div><i className="area-city"/><strong>Liverpool</strong><small>North West</small></div><div><i className="area-river"/><strong>Sheffield</strong><small>Yorkshire</small></div></div></main></div></div>;
  const title = variant === 0 ? 'Cambridge Mill Road' : 'Northern Growth Play';
  return <div className="mock-dash"><div className="mock-top"><b><i/> PROPSCALE</b><span>Explore　 Map　 Compare　 Portfolio</span><span className="mock-avatar"/></div><div className="mock-body"><aside>Dashboard<br/><br/>Markets<br/><br/>Watchlists<br/><br/>Reports<br/><br/>Settings</aside><div className="mock-main"><div className="mock-title">{title}</div>
    {variant === 2 ? <><div className="workflow-row"><b>North Growth Play</b><span>Active</span><span>•••</span></div><div className="mock-chart wide"><div className="chart-label">Growth outlook · 12 month trend</div><svg viewBox="0 0 400 90" preserveAspectRatio="none"><path d="M0 70 C50 67,60 62,100 58 S160 54,205 42 S260 45,300 28 S355 28,400 12" fill="none" stroke="#805eff" strokeWidth="3"/></svg></div><div className="photo-strips"><i/><i/><i/><i/></div></> : <><div className="dash-location">East of England · Cambridge · Area overview</div><div className="dash-tabs">Overview　 Growth　 Drivers　 Risks　 Timing　 Planning</div><div className="section-caption">1. EXECUTIVE SUMMARY</div><div className="executive-grid"><div className="score-tile"><small>OPPORTUNITY SCORE</small><strong>87</strong><em>Top 5% nationally</em></div><div className="executive-stat"><small>Projected appreciation</small><b>5.2% – 8.1% pa</b><em>Strong outlook</em><div className="tiny-line"/></div><div className="executive-stat"><small>Rental yield strength</small><b className="green-stat">High</b><em>Gross yield 6.2%</em><div className="tiny-bars"/></div><div className="executive-stat"><small>Entry timing</small><b>Favourable</b><em>Act now</em><div className="timing-line"/></div></div><div className="section-caption verdict-caption">2. INVESTMENT VERDICT &amp; EVIDENCE</div><div className="verdict-panel"><b>Investment Verdict: Strong Buy Signal</b><p>Salford Quays presents a compelling investment case underpinned by strong growth momentum, improving liquidity and a favourable entry point relative to comparable markets.</p></div></>}
  </div></div></div>;
}

export default function PlatformPreview() {
  return <section id="platform" className="mt-1 bg-[#faf8ff] pt-6"><div className="mx-auto w-[82%] max-w-[980px]">
    <div className="mx-auto mb-4 max-w-xl text-center"><span className="rounded-full border border-violet-200 bg-white px-2.5 py-1 text-[8px] font-bold text-brand">Coming Q4 2026</span><h2 className="mt-3 text-[21px] font-extrabold tracking-tight">Inside the full platform</h2><p className="mt-1.5 text-[8px] leading-[12px] text-slate-500">Discover, evaluate and act on opportunities in one integrated workflow.<br/>Everything you need, in context, so you can invest with confidence.</p></div>
    <div className="grid gap-3 lg:grid-cols-3">{cards.map(({ tag, title, copy, link, variant }) => <article key={title} className="overflow-hidden rounded-lg border border-violet-100 bg-white shadow-sm transition hover:shadow-md"><DashboardMock variant={variant}/><div className="p-2.5"><p className="text-[7px] font-extrabold tracking-wide text-brand">{tag}</p><h3 className="mt-0.5 text-[11px] font-extrabold">{title}</h3><p className="mt-1 text-[8px] leading-[12px] text-slate-500">{copy}</p><a href="#signup" className="mt-2 inline-flex items-center gap-1 text-[7px] font-bold text-brand">{link} <ArrowRight size={9}/></a></div></article>)}</div>
  </div><footer className="mt-3 border-t border-violet-100 py-4 text-center text-[9px] text-slate-400">PropSense does not provide financial advice. Data last updated 24 May 2026.</footer></section>;
}
