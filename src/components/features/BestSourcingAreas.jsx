'use client';

import { useMemo, useState } from 'react';
import { ChevronDown, Filter, Info, Search } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';
import { CheckIcon, LockIcon } from '../ui/AccessIcons';
import bestSourcingMarkets from './bestSourcingMarkets';

const regions = [...new Set(bestSourcingMarkets.map((market) => market.region))].sort();

function FilterCheckbox({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-[13px] text-slate-600">
      <input type="checkbox" checked={checked} onChange={onChange} className="h-3.5 w-3.5 accent-brand" />
      {label}
    </label>
  );
}

export default function BestSourcingAreas({
  title = 'Best Sourcing Areas',
  audience = 'For Deal sourcers / advisors',
}) {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All Regions');
  const [city, setCity] = useState('All Cities');
  const [sort, setSort] = useState('Opportunity Grade');
  const [topTierOnly, setTopTierOnly] = useState(false);
  const [highRentalOnly, setHighRentalOnly] = useState(false);

  const cities = useMemo(() => [...new Set(bestSourcingMarkets
    .filter((market) => region === 'All Regions' || market.region === region)
    .map((market) => market.city))].sort(), [region]);

  const markets = useMemo(() => {
    const search = query.trim().toLowerCase();
    const result = bestSourcingMarkets.filter((market) =>
      (!search || `${market.name} ${market.city} ${market.postcode}`.toLowerCase().includes(search)) &&
      (region === 'All Regions' || market.region === region) &&
      (city === 'All Cities' || market.city === city) &&
      (!topTierOnly || market.tier === 'Top 1%') &&
      (!highRentalOnly || market.rental === 'High'));
    if (sort === 'Micro-market') return [...result].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'National Tier') return [...result].sort((a, b) => a.tier.localeCompare(b.tier));
    return result;
  }, [city, highRentalOnly, query, region, sort, topTierOnly]);

  return (
    <main>
      <section className="relative isolate h-[266px] overflow-hidden border-b border-slate-100 bg-white sm:h-[298px]">
        <img src="/emerging-areas-hero.png" alt="" aria-hidden="true" className="absolute inset-0 -z-10 h-full w-full object-cover object-center" />
        <div className="mx-auto w-full max-w-[1440px] px-page-gutter pt-6 sm:px-8 sm:pt-8 md:px-[65px]">
          <a href="/#explore" aria-label="Back to Explore" className="mb-4 inline-flex h-5 w-[115px] transition-opacity hover:opacity-80 sm:mb-5">
            <img src="/back-to-explore.svg" alt="" aria-hidden="true" width="115" height="20" />
          </a>
          <div className="max-w-[540px]">
            <span className="mb-2 inline-flex h-[25px] items-center rounded-full bg-[#5b4fe8] px-3 text-[11.5px] font-semibold text-white">{audience}</span>
            <h1 className="text-[32px] font-extrabold leading-[41px] tracking-[-0.95px] text-[#101828] sm:text-[38px]">{title}</h1>
            <p className="mt-1 max-w-[460px] text-[14.5px] leading-[23px] text-[#6a7282]">Micro-markets showing early signs of strengthening investment potential across growth, rental demand, liquidity and value.</p>
            <form role="search" className="mt-2 flex h-[40px] w-full max-w-[480px] items-center rounded-[9px] border border-[#e5e7eb] bg-white px-2 shadow-sm" onSubmit={(event) => event.preventDefault()}>
              <Input variant="search" aria-label="Search a city, postcode, town or area" placeholder="Search a city, postcode, town or area..." value={query} onChange={(event) => setQuery(event.target.value)} className="h-full text-[13.5px]" />
              <Button type="submit" size="icon" aria-label="Search areas" className="h-7 w-7 rounded-[6px] p-0"><Search size={14} /></Button>
            </form>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1440px] px-page-gutter sm:px-8 md:px-[65px]">
        <section aria-label="Filter sourcing areas" className="flex min-h-[60px] flex-wrap items-center justify-between gap-3 border-b border-slate-100 py-3">
          <div className="flex flex-wrap items-center gap-3">
            <label className="relative"><span className="sr-only">Filter by region</span><span aria-hidden="true" className="pointer-events-none absolute left-[13px] top-1/2 -translate-y-1/2 text-[11px]">📍</span>
              <select aria-label="Filter by region" value={region} onChange={(event) => { setRegion(event.target.value); setCity('All Cities'); }} className="h-[35.5px] w-[128px] appearance-none rounded-[10px] border border-[#e5e7eb] bg-white py-0 pl-8 pr-8 text-[13px] text-[#364153] outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"><option>All Regions</option>{regions.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            </label>
            <label className="relative"><span className="sr-only">Filter by city</span><select aria-label="Filter by city" value={city} onChange={(event) => setCity(event.target.value)} className="h-[35.5px] w-[99px] appearance-none rounded-[10px] border border-[#e5e7eb] bg-white py-0 pl-3 pr-8 text-[13px] text-[#364153] outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"><option>All Cities</option>{cities.map((item) => <option key={item}>{item}</option>)}</select><ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" /></label>
            <details className="group relative"><summary className="flex h-[35.5px] cursor-pointer list-none items-center gap-2 rounded-[10px] border border-[#e5e7eb] bg-white px-3 text-[13px] text-[#364153] hover:border-violet-300 [&::-webkit-details-marker]:hidden"><Filter size={14} className="text-slate-400" />Filters</summary><div className="absolute left-0 top-11 z-20 w-64 space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-lg"><FilterCheckbox label="Top 1% national tier" checked={topTierOnly} onChange={() => setTopTierOnly((value) => !value)} /><FilterCheckbox label="High rental strength" checked={highRentalOnly} onChange={() => setHighRentalOnly((value) => !value)} /></div></details>
          </div>
          <label className="flex items-center gap-2 text-[12px] text-[#8a8fa1]">Sort by <span className="relative"><select aria-label="Sort by" value={sort} onChange={(event) => setSort(event.target.value)} className="h-[35px] appearance-none rounded-[10px] border border-[#e5e7eb] bg-white py-0 pl-3 pr-8 text-[12px] font-medium text-[#364153] outline-none focus:border-brand"><option>Opportunity Grade</option><option>Micro-market</option><option>National Tier</option></select><ChevronDown size={13} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-400" /></span></label>
        </section>

        <div className="mt-4 flex min-h-[41px] items-center gap-2 rounded-[12px] border border-violet-200 bg-[#f8f7ff] px-3.5 py-2 text-[12px] font-medium leading-5 text-[#596579] sm:px-4"><Info size={14} className="shrink-0 text-[#6e4eef]" /><span>Showing a preview of the top 20 micro-markets. Create a free account to view the full Top 100. <a href="#signup" className="font-semibold text-[#5b4fe8] underline underline-offset-2">Create a free account</a></span></div>

        <section aria-label={`${title} ranking`} className="overflow-x-auto pt-4">
          <table className="w-full min-w-[1040px] table-fixed border-separate border-spacing-0 text-left">
            <colgroup><col className="w-[4%]" /><col className="w-[15%]" /><col className="w-[9.5%]" /><col className="w-[13%]" /><col className="w-[9.5%]" /><col className="w-[12%]" /><col className="w-[12%]" /><col className="w-[8%]" /><col className="w-[17%]" /></colgroup>
            <thead><tr className="h-[36px] text-[10.5px] font-semibold uppercase tracking-[0.02em] text-[#7a8495]">{['Rank', 'Micro-market', 'Location', 'Opportunity Grade', 'National Tier', 'Growth Outlook', 'Rental Strength', 'Liquidity', 'Why it stands out'].map((heading) => <th key={heading} scope="col" className="px-2 py-2">{heading}</th>)}</tr></thead>
            <tbody>{markets.map((market) => {
              const locked = market.rank !== 1;
              return <tr key={market.name} className={`${market.rank === 1 ? 'h-[56px] bg-[#f8f7ff]' : 'h-[61px] bg-white'} text-[12px] ${locked ? 'text-[#687386] opacity-50' : 'text-[#101828]'}`}>
                <td className={`border-y border-[#f0eef7] px-2 py-2 ${market.rank === 1 ? 'rounded-l-[10px] border-l border-violet-200' : ''}`}><span className="flex items-center gap-2">{market.rank}{locked && <a href="#signup" aria-label={`Unlock ${market.name}`} title="Create a free account to unlock this area" className="text-violet-400 hover:text-brand"><LockIcon size={14} /></a>}</span></td>
                <td className={`border-y border-[#f0eef7] px-2 py-2 font-semibold ${market.rank === 1 ? 'text-[#101828]' : ''}`}>{market.name}</td>
                <td className="border-y border-[#f0eef7] px-2 py-2"><span className="block">{market.city}</span><span className="block text-[10px] text-slate-400">{market.postcode}</span></td>
                <td className="border-y border-[#f0eef7] px-2 py-2 text-center font-bold text-emerald-600">{market.grade}</td>
                <td className="border-y border-[#f0eef7] px-2 py-2"><span className="rounded-full bg-[#ede9fe] px-2 py-1 text-[10px] font-semibold text-[#5b4fe8]">{market.tier}</span></td>
                <td className="border-y border-[#f0eef7] px-2 py-2 font-semibold text-emerald-600">{market.growth}</td><td className="border-y border-[#f0eef7] px-2 py-2 font-semibold text-emerald-600">{market.rental}</td><td className="border-y border-[#f0eef7] px-2 py-2 font-semibold text-emerald-600">{market.liquidity}</td>
                <td className={`border-y border-[#f0eef7] px-2 py-2 text-[11px] leading-[15px] ${market.rank === 1 ? 'rounded-r-[10px] border-r border-violet-200 text-[#101828]' : ''}`}>{market.insight}</td>
              </tr>;
            })}{markets.length === 0 && <tr><td colSpan={9} className="border-y border-slate-100 px-4 py-12 text-center text-sm text-slate-500">No areas match those search and filter options.</td></tr>}</tbody>
          </table>
        </section>

        <Card as="section" id="signup" variant="feature" className="mt-4 flex flex-col gap-3 rounded-[16px] border-violet-200 bg-[#f8f6ff] px-6 py-6 sm:px-7">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-violet-100 text-brand"><LockIcon size={14} /></span>
          <div><h2 className="text-[16px] font-bold leading-6 text-[#101828]">Unlock the full Top 100 and deeper insights</h2><p className="text-[12px] text-[#8a8fa1]">Join early access to unlock:</p></div>
          <ul className="space-y-1 text-[12px] leading-[18px] text-[#4a5565]">{['See the complete Top 100 ranked by our Opportunity Signal', 'View exact scores for growth, rental strength, liquidity and value', 'Compare micro-markets side-by-side', 'Download detailed area reports and historical trends'].map((benefit) => <li key={benefit} className="flex items-start gap-2"><CheckIcon size={12} className="mt-1 shrink-0 text-[#5b4fe8]" />{benefit}</li>)}</ul>
          <div className="flex flex-wrap items-center gap-4 pt-1"><Button href="#signup" size="md" className="rounded-[9px] px-5 py-2 text-[12px]">Join early access — it&apos;s free</Button><span className="text-[11px] text-[#8a8fa1]">No credit card required. Early access members get priority updates.</span></div>
        </Card>
      </div>
      <footer className="mt-2 flex min-h-[66px] items-center justify-center border-t border-[#f3f4f6] px-4 text-center text-[11px] text-[#99a1af]">PropSense does not provide financial advice. Data last updated 24 May 2026.</footer>
    </main>
  );
}
