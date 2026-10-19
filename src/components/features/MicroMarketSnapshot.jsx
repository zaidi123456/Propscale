'use client';

import { useState } from 'react';
import {
  Activity,
  ArrowRight,
  Bell,
  CheckCircle2,
  ChevronRight,
  GitCompare,
  Heart,
  LockKeyhole,
  Search,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import Card from '../ui/Card';
import Input from '../ui/Input';

const nearbyMarkets = [
  ['E01012346', 'Beswick Central', '78', 'High'],
  ['E01012344', 'Ardwick West', '73', 'High'],
  ['E01012347', 'Openshaw South', '71', 'Med'],
  ['E01012342', 'Hulme North', '69', 'Med'],
  ['E01012348', 'Moss Side East', '65', 'Med'],
];

const themes = [
  [TrendingUp, 'Rising renter demand'],
  [Zap, 'Regeneration & infrastructure'],
  ['/micro-market-transport.svg', 'Good transport connectivity'],
  [Target, 'Relative value vs city core'],
  [Users, 'Improving investor activity'],
];

const strengths = [
  'Strong rental demand and occupier interest',
  'Major infrastructure investment pipeline',
  'Excellent links to city centre and key nodes',
  'Attractive pricing vs nearby core markets',
  'High liquidity and active investor base',
];

const contextRows = [
  ['Growth Outlook', 'Strong', 'text-emerald-600'],
  ['Relative Value', 'Attractive', 'text-emerald-600'],
  ['Market Activity', 'High', 'text-blue-600'],
  ['Supply Pressure', 'Moderate', 'text-orange-500'],
];

function NewTag() {
  return <img src="/micro-market-new-tag.svg" alt="New" width="46" height="19" className="h-[19px] w-[46px] shrink-0" />;
}

function LockedFooter({ title, copy }) {
  return (
    <a href="#signup" className="mt-auto flex items-center gap-2.5 border-t border-slate-100 pt-3 text-left hover:text-brand">
      <LockKeyhole size={15} className="shrink-0 text-slate-400" />
      <span><strong className="block text-[12px] font-semibold text-[#364153]">{title}</strong><span className="block text-[11px] text-slate-400">{copy}</span></span>
    </a>
  );
}

function AreaMap() {
  return (
    <div id="map" className="overflow-hidden rounded-[14px] border border-[#e2e5ec] bg-white">
      <div className="relative h-[150px] overflow-hidden bg-[radial-gradient(ellipse_at_50%_48%,rgba(217,224,255,.82),rgba(232,249,240,.78)_62%,rgba(246,249,248,.9))] text-[13px] font-medium text-[#7b8494]">
        <span className="absolute left-[10%] top-[49%]">Ardwick</span>
        <span className="absolute left-[13%] top-[76%]">Hulme</span>
        <span className="absolute left-[11%] top-[9%]">Beswick</span>
        <span className="absolute right-[11%] top-[9%]">Miles Platting</span>
        <span className="absolute right-[8%] top-[49%]">Liquidide</span>
        <span className="absolute right-[13%] top-[76%]">Openshaw</span>
        <img src="/micro-market-area.svg" alt="Selected micro-market E01012345" className="absolute left-1/2 top-1/2 h-[90px] w-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>
      <a href="#map" className="flex h-[34px] items-center gap-1.5 border-t border-slate-100 px-3.5 text-[12px] font-semibold text-[#6745f5]">View area on map <ChevronRight size={14} /></a>
    </div>
  );
}

export default function MicroMarketSnapshot() {
  const [search, setSearch] = useState('E01012345');

  return (
    <main className="min-h-screen bg-white pb-8">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-[65px] site-container">
        <section className="grid grid-cols-1 gap-7 pb-7 pt-8 md:grid-cols-[minmax(0,1fr)_minmax(400px,498px)] md:items-start md:gap-6 md:pb-[46px] md:pt-9">
          <div>
            <form role="search" className="mb-5 flex h-[37px] w-full max-w-[245px] items-center gap-2 rounded-[9px] border border-[#e2e5ec] px-3" onSubmit={(event) => event.preventDefault()}>
              <Search size={15} className="shrink-0 text-[#9aa2b1]" />
              <Input variant="search" aria-label="Search a micro-market code" value={search} onChange={(event) => setSearch(event.target.value)} className="text-[12px] text-[#364153]" />
              {search && <button type="button" aria-label="Clear search" onClick={() => setSearch('')} className="text-[16px] leading-none text-slate-400 hover:text-slate-700">×</button>}
            </form>
            <h1 className="text-[28px] font-extrabold leading-9 tracking-[-0.8px] text-[#101828] sm:text-[32px]">Micro-Market Snapshot</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-[15px] font-semibold text-[#364153]">
              <span className="text-[#6745f5]">E01012345</span><span className="text-slate-300">·</span><span>Manchester East / Beswick Corridor</span><NewTag />
            </div>
            <p className="mt-3 max-w-[500px] text-[14px] leading-[23px] text-[#687386]">An emerging corridor just east of Manchester city centre seeing steady growth in tenant demand and rental levels, supported by improving transport links and attractive value relative to nearby core areas.</p>
          </div>
          <div className="md:mt-[46px]"><AreaMap /></div>
        </section>

        <section aria-label="Opportunity metrics" className="w-full">
          <img
            src="/micro-market-metrics.svg"
            alt="Opportunity metrics: grade A, top 5 percent, 22 percent five-year growth outlook, favourable entry timing, high rental strength and improving liquidity"
            width="1310"
            height="98"
            className="block h-auto w-full"
          />
        </section>

        <section className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <Card as="article" variant="surface" className="flex min-h-[350px] flex-col rounded-[14px] border-[#e3e6ed] p-[18px]">
            <div className="flex items-center gap-3"><h2 className="text-[15px] font-bold text-[#202638]">PropSense Summary</h2><NewTag /></div>
            <div className="my-5 flex justify-center">
              <div className="relative grid h-[120px] w-[120px] place-items-center rounded-full" style={{ background: 'conic-gradient(#6d4df5 0deg 295deg, #e6e8ed 295deg 360deg)' }}>
                <div className="grid h-[105px] w-[105px] place-content-center rounded-full bg-white text-center"><span className="text-[10px] text-slate-400">Overall Signal</span><strong className="text-[24px] leading-7 text-[#202638]">82</strong><span className="text-[10px] text-slate-400">/100</span></div>
              </div>
            </div>
            <p className="mb-4 max-w-[285px] text-[12px] leading-5 text-[#7c8493]">This micro-market shows strong opportunity fundamentals across growth, rental demand and improving liquidity.</p>
            <LockedFooter title="Unlock exact score breakdown" copy="Join early access to see all drivers" />
          </Card>

          <Card as="article" variant="surface" className="flex min-h-[350px] flex-col rounded-[14px] border-[#e3e6ed] p-[18px]">
            <div className="mb-3 flex items-center gap-3"><h2 className="text-[15px] font-bold text-[#202638]">Nearby Micro-Markets</h2><NewTag /></div>
            <ol className="flex-1">
              {nearbyMarkets.map(([code, name, score, grade], index) => (
                <li key={code} className="grid grid-cols-[18px_minmax(0,1fr)_28px_34px] items-center gap-2 border-b border-slate-100 py-[7px] text-[11px] last:border-0">
                  <span className="text-slate-400">{index + 1}</span>
                  <span className="min-w-0"><strong className="block text-[12px] font-semibold text-[#7552f6]">{code}</strong><span className="block truncate text-[10px] text-slate-400">{name}</span></span>
                  <strong className="text-right text-[#364153]">{score}</strong>
                  <strong className={`text-right ${grade === 'High' ? 'text-emerald-600' : 'text-orange-500'}`}>{grade}</strong>
                </li>
              ))}
            </ol>
            <LockedFooter title="See comparable areas" copy="Join early access to unlock" />
          </Card>

          <Card as="article" variant="surface" className="flex min-h-[350px] flex-col rounded-[14px] border-[#e3e6ed] p-[18px]">
            <div className="mb-3 flex items-center gap-3"><h2 className="text-[15px] font-bold text-[#202638]">Strongest Local Themes</h2><NewTag /></div>
            <ul className="flex-1 space-y-4 pt-1">{themes.map(([Icon, label]) => <li key={label} className="flex items-center gap-2.5 text-[12px] text-[#586275]">{typeof Icon === 'string' ? <img src={Icon} alt="" width="14" height="14" className="shrink-0" /> : <Icon size={15} className="shrink-0 text-[#7654ff]" />}{label}</li>)}</ul>
            <LockedFooter title="View full signal drivers" copy="Join early access to see more" />
          </Card>

          <Card as="article" variant="surface" className="flex min-h-[296px] flex-col rounded-[14px] border-[#e3e6ed] p-[18px]">
            <h2 className="mb-4 text-[15px] font-bold text-[#202638]">Why this area stands out</h2>
            <ul className="flex-1 space-y-3">{strengths.map((item) => <li key={item} className="flex items-start gap-2 text-[12px] text-[#586275]"><CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-500" />{item}</li>)}</ul>
            <LockedFooter title="Learn more about this area" copy="Join early access to unlock" />
          </Card>

          <Card as="article" variant="surface" className="flex min-h-[296px] flex-col rounded-[14px] border-[#e3e6ed] p-[18px]">
            <div className="mb-4 flex items-center gap-3"><h2 className="text-[15px] font-bold text-[#202638]">Context &amp; Outlook</h2><NewTag /></div>
            <dl className="flex-1">{contextRows.map(([label, value, color]) => <div key={label} className="flex items-center justify-between border-b border-slate-100 py-3 text-[12px] last:border-0"><dt className="text-[#7c8493]">{label}</dt><dd className={`font-semibold ${color}`}>{value}</dd></div>)}</dl>
            <LockedFooter title="View detailed outlook" copy="Join early access to see more" />
          </Card>

          <Card as="article" id="signup" variant="feature" className="overflow-hidden rounded-[12px] border-0 bg-transparent p-0">
            <a href="#signup" aria-label="Follow this area and join early access" className="block">
              <img src="/micro-market-follow-card.svg" alt="Follow this area and unlock deeper intelligence. Full score breakdowns, historical trends and forecasts, comparisons with nearby areas, and a downloadable micro-market report. Join early access; no credit card required." width="426" height="268" className="block h-auto w-full" />
            </a>
          </Card>
        </section>

        <section aria-label="Area tools" className="mt-4 grid grid-cols-1 overflow-hidden rounded-[14px] border border-[#e3e6ed] sm:grid-cols-2 xl:grid-cols-4">
          {[[Heart, 'Save this area', 'Track and revisit', 'key areas'], ['/micro-market-download.svg', 'Download micro-market report', 'PDF with key insights', 'and outlook'], [GitCompare, 'Unlock compare tools', 'Compare with nearby areas', 'and corridors'], [Bell, 'Set alerts', 'Get updates on key changes', 'and signals']].map(([Icon, title, lineOne, lineTwo]) => <a key={title} href="#signup" className="flex min-h-[86px] items-center gap-3 border-b border-slate-100 px-4 py-3 transition hover:bg-violet-50/50 last:border-0 sm:border-r xl:border-b-0"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-violet-100 bg-[#faf8ff] text-[#7654ff]">{typeof Icon === 'string' ? <img src={Icon} alt="" width="16" height="16" /> : <Icon size={17} />}</span><span className="min-w-0 flex-1"><strong className="block text-[12px] font-semibold text-[#364153]">{title}</strong><span className="block text-[10px] leading-4 text-slate-400">{lineOne}<br />{lineTwo}</span></span><ChevronRight size={15} className="text-[#7654ff]" /></a>)}
        </section>

        <section aria-label="PropSense data standards" className="mt-4 grid grid-cols-1 overflow-hidden rounded-[14px] border border-[#e3e6ed] sm:grid-cols-2 xl:grid-cols-4">
          {[[Shield, 'Trusted data', 'Built on 10,000+ data points'], [Target, 'Clear methodology', 'Every score is transparent'], ['/micro-market-refresh.svg', 'Updated monthly', 'Always current, always relevant'], [Users, 'Built for property decision-makers', 'For investors, developers and advisors']].map(([Icon, title, copy]) => <div key={title} className="flex min-h-[100px] items-center gap-3 border-b border-slate-100 px-4 py-3 last:border-0 sm:border-r xl:border-b-0"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-violet-100 bg-[#faf8ff] text-[#7654ff]">{typeof Icon === 'string' ? <img src={Icon} alt="" width="20" height="20" /> : <Icon size={18} />}</span><span><strong className="block text-[12px] font-semibold text-[#364153]">{title}</strong><span className="mt-1 block text-[10px] text-slate-400">{copy}</span></span></div>)}
        </section>
      </div>
      <footer className="mt-8 flex min-h-[72px] items-center justify-center border-t border-slate-100 px-4 text-center text-[11px] text-slate-400">PropSense does not provide financial advice. Data last updated 24 May 2026.</footer>
    </main>
  );
}
