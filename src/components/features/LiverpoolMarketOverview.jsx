'use client';

import { useState } from 'react';
import {
  ArrowRight,
  ChevronRight,
  FileText,
  Filter,
  Grid2X2,
  LockKeyhole,
  MapPin,
  RefreshCw,
  Search,
  ShieldCheck,
  Target,
  UsersRound,
} from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';
import PlatformPreview from './PlatformPreview';

const areaTabs = [
  { name: 'All areas', count: '1003' },
  { name: 'Liverpool', count: '302', locked: true },
  { name: 'Sefton', count: '191', locked: true },
  { name: 'Wirral', count: '209', locked: true },
  { name: 'St. Helens', count: '121', locked: true },
  { name: 'Knowsley', count: '100', locked: true },
  { name: 'Halton', count: '80', locked: true },
];

const categoryCards = [
  {
    title: 'Top Emerging Areas',
    copy: 'Early signals showing strong upside potential.',
    href: '/emerging-investment-areas',
    rows: [['Allerton', 'High'], ['Bootle'], ['Prescot'], ['Maghull'], ['Huyton']],
  },
  {
    title: 'Strongest Rental Pressure',
    copy: 'Areas with the highest rental supply-demand imbalance.',
    href: '/strongest-rental-pressure',
    rows: [['Aigburth', 'High'], ['Mossley Hill'], ['Childwall'], ['West Kirby'], ['Widnes']],
  },
  {
    title: 'Best Growth Outlook',
    copy: 'Highest predicted value uplift through 5 years.',
    href: '/best-growth-outlook',
    rows: [['Southport', 'High'], ['Crosby'], ['Formby'], ['Calderstones'], ['Allerton']],
  },
  {
    title: 'Strongest Relative Value',
    copy: 'High potential returns with relative affordability.',
    href: '/strongest-relative-value',
    rows: [['Kirkdale', 'High'], ['Bootle'], ['Huyton'], ['Norris Green'], ['Old Swan']],
  },
  {
    title: 'Liquidity Expansion',
    copy: 'Areas seeing liquidity growth and expanding buyer pools.',
    href: '/liquidity-expansion',
    rows: [['Bebington', 'High'], ['Widnes'], ['Crosby'], ['Prescot'], ['St. Helens Town Centre']],
  },
];

const accountBenefits = [
  [Grid2X2, 'Unlock hundreds of micro-markets', 'Go beyond this preview and access the full universe of micro-markets across Liverpool City Region.'],
  [FileText, 'View every micro-market name', 'Open complete area pages with deeper market context, rankings and signal-level detail.'],
  [Filter, 'Advanced filters & insights', 'Refine discovery with richer filters, sharper comparisons and more actionable intelligence.'],
];

const trustItems = [
  [ShieldCheck, 'Trusted data', 'Built on 1000+ data points'],
  [Target, 'Clear methodology', 'Every score is transparent'],
  [RefreshCw, 'Updated monthly', 'Always current, always ahead'],
  [UsersRound, 'Built for property decision-makers', 'Investors, developers, lenders & advisors'],
];

function EmergingCategoryCard({ card, index }) {
  return (
    <Card as="article" variant="surface" className="min-h-[150px] rounded-[9px] border-[#e6e2ef] p-3 shadow-[0_1px_3px_rgba(56,34,120,0.04)]">
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 items-start gap-2">
          <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#704cf6] text-[10px] font-bold text-white">{index + 1}</span>
          <div className="min-w-0">
            <h2 className="text-[11px] font-extrabold leading-[14px] text-[#17142c]">{card.title}</h2>
            <p className="mt-0.5 text-[8px] leading-3 text-[#737373]">{card.copy}</p>
          </div>
        </div>
        <a href={card.href} className="shrink-0 pt-0.5 text-[8px] font-bold text-[#6e4eef] hover:text-violet-800">View all</a>
      </div>
      <ol className="mt-2 space-y-0.5">
        {card.rows.map(([name, status], rowIndex) => (
          <li key={name} className="flex h-[17px] items-center gap-2 text-[9px] leading-[14px]">
            <span className="w-2.5 shrink-0 text-right font-bold text-[#17142c]">{rowIndex + 1}</span>
            <span className={`min-w-0 flex-1 truncate ${rowIndex === 0 ? 'font-bold text-[#737373]' : 'text-[#737373]'}`}>{name}</span>
            {status ? (
              <span className="font-bold text-[#ec003f]">{status}</span>
            ) : (
              <span className="flex shrink-0 items-center gap-1.5 text-[8px] text-[#858585]">Locked <LockKeyhole size={9} /></span>
            )}
          </li>
        ))}
      </ol>
    </Card>
  );
}

export default function LiverpoolMarketOverview() {
  const [query, setQuery] = useState('Liverpool');
  const [activeArea, setActiveArea] = useState('All areas');

  return (
    <main className="bg-white">
      <section className="relative isolate h-[282px] overflow-hidden border-b border-[#eeeaf5] bg-white">
        <img src="/relative-value-hero.png" alt="Liverpool terraced houses" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#fff_0%,#fff_34%,rgba(255,255,255,0.94)_46%,rgba(255,255,255,0.55)_61%,rgba(255,255,255,0.02)_82%)]" />
        <div className="mx-auto w-full max-w-[1440px] px-5 pt-8 sm:px-8 md:px-[65px] site-container">
          <form role="search" className="flex h-[34px] w-full max-w-[220px] items-center gap-2 rounded-[8px] border border-[#e5e7eb] bg-white/90 px-3" onSubmit={(event) => event.preventDefault()}>
            <Search size={14} className="shrink-0 text-[#99a1af]" />
            <Input variant="search" aria-label="Search market" value={query} onChange={(event) => setQuery(event.target.value)} className="h-full text-[12px] text-[#364153]" />
            {query && <button type="button" aria-label="Clear search" onClick={() => setQuery('')} className="text-[14px] leading-none text-[#99a1af]">×</button>}
          </form>
          <div className="mt-[19px] flex items-center gap-2">
            <h1 className="text-[26px] font-bold leading-[39px] tracking-[-0.5px] text-[#101828]">Explore Liverpool</h1>
            <img src="/micro-market-new-tag.svg" width="46" height="19" alt="New" className="h-[19px] w-[46px]" />
          </div>
          <p className="mt-1 max-w-[372px] text-[13px] leading-[21px] text-[#4a5565]">Actionable residential investment insights across Liverpool City Region. Explore top-performing micro-markets, demand drivers and growth signals to invest with confidence.</p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 md:px-[65px] site-container">
        <nav aria-label="Liverpool areas" className="mt-[19px] flex flex-wrap gap-2 border-b border-[#eeeaf5] pb-[14px] pt-3">
          {areaTabs.map((area) => {
            const active = activeArea === area.name;
            return (
              <button key={area.name} type="button" aria-pressed={active} onClick={() => setActiveArea(area.name)} className={`inline-flex h-[32px] items-center gap-2 rounded-[6px] border px-3 text-[9px] transition ${active ? 'border-[#704cf6] bg-[#704cf6] font-bold text-white' : 'border-[#e6e2ef] bg-white font-semibold text-[#4f4962] hover:border-violet-300'}`}>
                <MapPin size={11} />
                <span>{area.name}</span>
                <span className={active ? 'text-white/70' : 'text-[#858191]'}>{area.count}</span>
                {area.locked && <LockKeyhole size={9} className="text-[#858191]" />}
              </button>
            );
          })}
        </nav>

        <section id="categories" aria-label="Liverpool opportunity categories" className="grid grid-cols-1 gap-2 pt-3 sm:grid-cols-2 xl:grid-cols-3">
          {categoryCards.map((card, index) => <EmergingCategoryCard key={card.title} card={card} index={index} />)}
        </section>

        <section className="mt-[10px] grid grid-cols-1 gap-[10px] pb-3 lg:grid-cols-[0.85fr_1.15fr]">
          <Card as="div" id="signup" variant="feature" className="flex min-h-[133px] flex-col justify-center rounded-[9px] border-[#e5dcff] bg-[#f5f0ff] px-4 py-3 sm:flex-row sm:items-start sm:gap-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#d9c9ff] bg-white text-[#704cf6]"><UsersRound size={17} /></span>
            <div>
              <h2 className="text-[13px] font-extrabold leading-[18px] text-[#17142c]">Create a free account to open more<br className="hidden sm:block" /> micro-market pages</h2>
              <p className="mt-1.5 max-w-[440px] text-[9px] leading-[13px] text-[#737373]">You’ve viewed the public preview. <strong>Sign up</strong> to explore more micro-markets in this city, save areas and unlock deeper previews.</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <Button href="#signup" size="xs" className="h-[25px] rounded-[5px] px-3 text-[8px]">Create free account</Button>
                <a href="#categories" className="inline-flex items-center gap-1 text-[8px] font-bold text-[#6e4eef]">Continue browsing preview <ArrowRight size={10} /></a>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 gap-2 rounded-[9px] border border-[#e5dcff] bg-[#faf8ff] p-2 sm:grid-cols-3">
            {accountBenefits.map(([Icon, title, copy]) => (
              <Card as="article" key={title} variant="surface" className="min-h-[117px] rounded-[7px] border-[#e6e2ef] p-2.5">
                <Icon size={16} className="text-[#704cf6]" />
                <h3 className="mt-2 text-[9px] font-extrabold leading-3 text-[#17142c]">{title}</h3>
                <p className="mt-1 text-[8px] leading-[11px] text-[#737373]">{copy}</p>
                <a href="#signup" className="mt-2 inline-flex items-center gap-1 text-[8px] font-bold text-[#6e4eef]">Learn more <ArrowRight size={9} /></a>
              </Card>
            ))}
          </div>
        </section>

        <section aria-label="PropScale standards" className="mb-5 grid grid-cols-1 overflow-hidden rounded-[9px] border border-[#e6e2ef] sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map(([Icon, title, copy], index) => (
            <div key={title} className={`flex min-h-[62px] items-center gap-2.5 px-3 py-2 ${index ? 'border-t border-[#eeeaf5] sm:border-t-0 sm:border-l' : ''}`}>
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[#e9ddff] bg-[#faf8ff] text-[#704cf6]"><Icon size={14} /></span>
              <span><strong className="block text-[9px] font-extrabold text-[#28253a]">{title}</strong><span className="mt-1 block text-[8px] leading-3 text-[#898594]">{copy}</span></span>
            </div>
          ))}
        </section>
      </div>

      <PlatformPreview compact />
      <footer className="flex min-h-[66px] items-center justify-center border-t border-[#eeeaf5] bg-[#faf8ff] px-4 text-center text-[11.5px] text-[#99a1af]">
        PropSense does not provide financial advice. Data last updated 24 May 2026.
      </footer>
    </main>
  );
}
