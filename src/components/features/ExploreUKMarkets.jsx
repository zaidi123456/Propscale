'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Map, RefreshCw, Search, ShieldCheck, Users } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';
import ukMarkets, { marketRegions } from './ukMarkets';

const imageUrl = (image) =>
  image.startsWith('/')
    ? image
    : `https://images.unsplash.com/${image}?auto=format&fit=crop&w=900&q=85`;

function MarketCard({ market }) {
  return (
    <Card as="article" variant="market" className="flex min-h-[272px] flex-col rounded-[12px] border-[#e6e3ed] shadow-[0_1px_3px_rgba(18,24,40,0.05)]">
      <div className="relative h-[99px] shrink-0 overflow-hidden">
        <img src={imageUrl(market.image)} alt={`${market.name} city view`} className="h-full w-full object-cover" />
        <div className="absolute right-3 top-3 flex min-w-[78px] flex-col items-center rounded-[10px] bg-white px-3 py-2 text-center shadow-sm">
          <strong className="text-[16px] leading-5 text-[#252238]">{market.count}</strong>
          <span className="mt-1 text-[9px] text-[#8a8797]">micro-markets</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col px-3 py-3">
        <h2 className="text-[14px] font-extrabold leading-5 text-[#28253a]">{market.name}</h2>
        <p className="text-[10px] leading-4 text-[#777385]">{market.area}</p>
        <p className="mt-2 text-[9.5px] leading-4 text-[#8b8796]">
          {market.count} micro-markets <span className="mx-1.5">•</span> {market.localAreas} local areas
        </p>
        <div className="mt-2">
          <p className="mb-1 text-[9px] font-semibold text-[#8b8796]">Includes</p>
          <div className="flex flex-wrap gap-1">
            {market.includes.map((area) => (
              <span key={area} className="rounded-full bg-[#f7f6f9] px-2 py-1 text-[8px] leading-3 text-[#858191]">{area}</span>
            ))}
          </div>
        </div>
        <a href="/#markets" className="mt-auto inline-flex items-center gap-1 pt-2 text-[10px] font-bold text-[#673cf4] hover:text-violet-800">
          Explore market <ArrowRight size={12} />
        </a>
      </div>
    </Card>
  );
}

export default function ExploreUKMarkets() {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All markets');
  const visibleMarkets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return ukMarkets.filter((market) => {
      const matchesRegion = region === 'All markets' || market.region === region;
      const searchable = `${market.name} ${market.area} ${market.region} ${market.includes.join(' ')}`.toLowerCase();
      return matchesRegion && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [query, region]);

  return (
    <main className="min-h-[calc(100vh-64px)] bg-[#fdfcff] pb-10">
      <section className="mx-auto grid w-full max-w-[1536px] grid-cols-1 gap-6 px-5 pb-8 pt-10 sm:px-8 md:grid-cols-[minmax(0,1fr)_320px] md:gap-12 md:px-[5%] md:pb-[92px] md:pt-[62px] site-container">
        <div>
          <h1 className="text-[36px] font-extrabold leading-[1.08] tracking-[-1.3px] text-[#272438] sm:text-[44px]">Explore UK Markets</h1>
          <p className="mt-3 max-w-[470px] text-[14px] leading-[21px] text-[#777385]">Explore property markets across England and discover<br className="hidden sm:block" /> the micro-markets shaping performance in each area.</p>
          <form role="search" className="mt-5 flex h-[47px] w-full max-w-[660px] items-center gap-3 rounded-[8px] border border-[#dedbe8] bg-white pl-4 pr-2 shadow-[0_1px_3px_rgba(18,24,40,0.08)]" onSubmit={(event) => event.preventDefault()}>
            <Search size={17} className="shrink-0 text-[#a29daf]" />
            <Input variant="search" aria-label="Search markets" placeholder="Search market, local area or postcode..." value={query} onChange={(event) => setQuery(event.target.value)} className="h-full text-[11px] placeholder:text-[#a29daf]" />
            <Button type="submit" style={{ backgroundColor: '#5D2BEF' }} className="h-[34px] rounded-[6px] px-5 text-[11px]">Search</Button>
          </form>
          <div className="mt-4 flex max-w-[730px] flex-wrap gap-2" aria-label="Filter by region">
            {marketRegions.map((item) => (
              <button key={item} type="button" aria-pressed={region === item} onClick={() => setRegion(item)} className={`h-[35px] rounded-full border px-[17px] text-[10px] font-semibold transition ${region === item ? 'border-[#693cf4] bg-[#693cf4] text-white' : 'border-[#dedbe8] bg-white text-[#625e6d] hover:border-violet-300 hover:text-[#673cf4]'}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="relative hidden h-[260px] w-full items-start justify-center overflow-visible md:flex">
          <img src="/england-market-map.png" alt="Map showing markets across England" className="h-[260px] w-[586px] max-w-none object-contain" />
        </div>
      </section>

      <section aria-label="UK market regions" className="mx-auto grid w-full max-w-[1536px] grid-cols-1 gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 xl:grid-cols-4 md:px-[5%] site-container">
        {visibleMarkets.map((market) => <MarketCard key={market.name} market={market} />)}
        {visibleMarkets.length === 0 && <p className="col-span-full py-12 text-center text-sm text-slate-500">No markets match your search.</p>}
      </section>

      <section className="mx-auto mt-8 flex w-full max-w-[1536px] flex-col gap-4 px-5 sm:px-8 md:px-[5%] site-container">
        <div id="signup" className="flex flex-col gap-4 rounded-[10px] border border-[#e5dcff] bg-[#f5f0ff] px-6 py-5 md:flex-row md:items-center md:justify-between md:px-7">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[10px] bg-[#e9ddff] text-[#673cf4]"><Users size={24} /></span>
            <div><h2 className="text-[15px] font-extrabold text-[#28253a]">Create a free account to unlock deeper market insights</h2><p className="mt-1 max-w-[430px] text-[11px] leading-4 text-[#777385]">Explore more micro-markets, unlock local Area views,<br className="hidden sm:block" /> advanced filters and richer market intelligence.</p></div>
          </div>
          <div className="flex shrink-0 gap-3"><Button href="#signup" className="h-[42px] rounded-[6px] px-6 text-[10px]">Create free account</Button><Button href="#how-it-works" variant="secondary" className="h-[42px] min-w-[122px] rounded-[6px] px-5 text-[10px]">Learn more</Button></div>
        </div>

        <div id="how-it-works" className="grid grid-cols-1 overflow-hidden rounded-[10px] border border-[#e6e2ef] bg-white sm:grid-cols-2 lg:grid-cols-4">
          {[
            [ShieldCheck, 'Public-safe previews', 'No raw scores, exact ranks or component weights.'],
            [Map, 'Reusable routes', 'Save and revisit your favourite markets and local areas.'],
            [RefreshCw, 'Updated monthly', 'Always current, always ahead.'],
            [Users, 'Built for property decision-makers', 'Investors, developers, lenders & advisors.'],
          ].map(([Icon, title, copy], index) => (
            <div key={title} className={`flex items-center gap-3 px-5 py-4 ${index ? 'border-t border-[#eeeaf5] sm:border-t-0 sm:border-l' : ''}`}>
              <Icon size={24} className="shrink-0 text-[#673cf4]" />
              <div><h3 className="text-[10px] font-extrabold text-[#373347]">{title}</h3><p className="mt-1 text-[9px] leading-3 text-[#898594]">{copy}</p></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
