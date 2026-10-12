'use client';

import { useMemo, useState } from 'react';
import {
  ChevronDown,
  ChevronLeft,
  Filter,
  Info,
  Search,
} from 'lucide-react';
import { CheckIcon, LockIcon } from '../ui/AccessIcons';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';
import emergingInvestmentMarkets from './emergingInvestmentMarkets';

const regions = [
  'East Midlands',
  'Greater London',
  'North East',
  'North West',
  'Scotland',
  'South East',
  'South West',
  'Wales',
  'West Midlands',
  'Yorkshire and the Humber',
];

const cityRegions = {
  Bradford: 'Yorkshire and the Humber',
  Bristol: 'South West',
  Cardiff: 'Wales',
  Coventry: 'West Midlands',
  Glasgow: 'Scotland',
  Leeds: 'Yorkshire and the Humber',
  Leicester: 'East Midlands',
  Liverpool: 'North West',
  London: 'Greater London',
  Manchester: 'North West',
  'Milton Keynes': 'South East',
  Newcastle: 'North East',
  Nottingham: 'East Midlands',
  Portsmouth: 'South East',
  Reading: 'South East',
  Sheffield: 'Yorkshire and the Humber',
  Southampton: 'South East',
  Sunderland: 'North East',
  Birmingham: 'West Midlands',
};

const gradeRank = { A: 2, 'A-': 1 };

function FilterControl({ label, checked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 text-[13px] text-slate-600">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-3.5 w-3.5 rounded border-slate-300 accent-brand"
      />
      {label}
    </label>
  );
}

export default function EmergingInvestmentAreas() {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All Regions');
  const [city, setCity] = useState('All Cities');
  const [sortBy, setSortBy] = useState('grade');
  const [tiers, setTiers] = useState([]);
  const [positiveOnly, setPositiveOnly] = useState(false);

  const cities = useMemo(() => {
    const filteredMarkets = emergingInvestmentMarkets.filter(
      (market) => region === 'All Regions' || cityRegions[market.city] === region,
    );
    return [...new Set(filteredMarkets.map((market) => market.city))].sort();
  }, [region]);

  const visibleMarkets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filteredMarkets = emergingInvestmentMarkets.filter((market) => {
      const matchesQuery =
        !normalizedQuery ||
        `${market.name} ${market.city} ${market.postcode}`.toLowerCase().includes(normalizedQuery);
      const matchesRegion = region === 'All Regions' || cityRegions[market.city] === region;
      const matchesCity = city === 'All Cities' || market.city === city;
      const matchesTier = tiers.length === 0 || tiers.includes(market.tier);
      const matchesGrowth = !positiveOnly || market.growth === 'Positive';

      return matchesQuery && matchesRegion && matchesCity && matchesTier && matchesGrowth;
    });

    if (sortBy === 'name') {
      return filteredMarkets.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === 'grade') {
      return filteredMarkets.sort(
        (a, b) => gradeRank[b.grade] - gradeRank[a.grade],
      );
    }

    return filteredMarkets;
  }, [city, positiveOnly, query, region, sortBy, tiers]);

  function toggleTier(tier) {
    setTiers((selectedTiers) =>
      selectedTiers.includes(tier)
        ? selectedTiers.filter((selectedTier) => selectedTier !== tier)
        : [...selectedTiers, tier],
    );
  }

  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-slate-100">
        <div
          className="absolute inset-0 -z-20"
          aria-hidden="true"
        >
          <img
            src="/emerging-areas-hero.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          className="absolute inset-x-0 bottom-0 -z-10 h-12 bg-gradient-to-t from-white/80 to-transparent"
          aria-hidden="true"
        />

        <div className="mx-auto min-h-[340px] w-full max-w-[1440px] px-page-gutter pb-7 pt-8 sm:px-8 md:px-[65px]">
          <a
            href="/"
            aria-label="Back to Explore"
            className="mb-5 inline-flex h-5 w-[115px] transition-opacity hover:opacity-80"
          >
            <img src="/back-to-explore.svg" alt="" aria-hidden="true" width="115" height="20" />
          </a>

          <div className="max-w-[540px]">
            <span className="mb-3 inline-flex rounded-full bg-brand px-3 py-1 text-[11px] font-semibold text-white">
              For Investors / Landlords
            </span>
            <h1 className="max-w-[540px] text-[32px] font-extrabold leading-[1.08] tracking-[-0.8px] text-[#101828] sm:text-[38px]">
              Top Emerging Investment Areas
            </h1>
            <p className="mt-3 max-w-[460px] text-[14px] leading-[23px] text-[#6a7282]">
              Micro-markets showing early signs of strengthening investment
              potential across growth, rental demand, liquidity and value.
            </p>

            <form
              role="search"
              className="mt-5 flex h-[40px] w-full max-w-[480px] items-center rounded-[9px] border border-[#e5e7eb] bg-white px-2 shadow-sm"
              onSubmit={(event) => event.preventDefault()}
            >
              <Input
                variant="search"
                aria-label="Search a city, postcode, town or area"
                placeholder="Search a city, postcode, town or area..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="h-full text-[13.5px]"
              />
              <Button
                type="submit"
                size="icon"
                aria-label="Search areas"
                className="h-7 w-7 rounded-[6px] p-0"
              >
                <Search size={15} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1440px] px-page-gutter sm:px-8 md:px-[65px]">
        <section
          aria-label="Filter and sort areas"
          className="flex flex-wrap items-center justify-between gap-3 py-3"
        >
          <div className="flex flex-wrap items-center gap-3">
            <label className="relative">
              <span className="sr-only">Filter by region</span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-[13px] top-1/2 -translate-y-1/2 text-[11px] leading-none"
              >
                📍
              </span>
              <select
                aria-label="Filter by region"
                value={region}
                onChange={(event) => {
                  setRegion(event.target.value);
                  setCity('All Cities');
                }}
                className="h-[35.5px] w-[128.39px] appearance-none rounded-[10px] border border-[#e5e7eb] bg-white py-0 pl-8 pr-8 text-[13px] text-[#364153] outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              >
                <option>All Regions</option>
                {regions.map((regionName) => (
                  <option key={regionName}>{regionName}</option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-[13px] top-1/2 -translate-y-1/2 text-[#99a1af]"
              />
            </label>

            <label className="relative">
              <span className="sr-only">Filter by city</span>
              <select
                aria-label="Filter by city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
                className="h-[35.5px] w-[99.42px] appearance-none rounded-[10px] border border-[#e5e7eb] bg-white py-0 pl-3 pr-8 text-[13px] text-[#364153] outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
              >
                <option>All Cities</option>
                {cities.map((cityName) => (
                  <option key={cityName}>{cityName}</option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-[13px] top-1/2 -translate-y-1/2 text-[#99a1af]"
              />
            </label>

            <details className="group relative">
              <summary className="flex h-[35.5px] w-[83.63px] cursor-pointer list-none items-center gap-2 rounded-[10px] border border-[#e5e7eb] bg-white px-3 text-[13px] text-[#364153] outline-none transition hover:border-violet-300 focus-visible:ring-2 focus-visible:ring-brand/20 [&::-webkit-details-marker]:hidden">
                <Filter size={14} className="shrink-0 text-[#99a1af]" />
                Filters
              </summary>
              <div className="absolute left-0 top-11 z-20 w-64 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  National tier
                </p>
                <div className="space-y-2">
                  {['Top 1%', 'Top 5%'].map((tier) => (
                    <FilterControl
                      key={tier}
                      label={tier}
                      checked={tiers.includes(tier)}
                      onChange={() => toggleTier(tier)}
                    />
                  ))}
                </div>
                <div className="my-3 border-t border-slate-100" />
                <FilterControl
                  label="Positive growth outlook"
                  checked={positiveOnly}
                  onChange={() => setPositiveOnly((current) => !current)}
                />
              </div>
            </details>
          </div>

          <label className="flex items-center gap-2 text-[13px] text-[#6a7282]">
            Sort by
            <span className="relative">
              <select
                aria-label="Sort areas"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className={`peer h-[35.5px] w-[159.86px] appearance-none rounded-[10px] border border-[#e5e7eb] bg-white py-0 pl-3 pr-8 text-[13px] text-[#364153] outline-none transition focus:border-brand focus:text-[#364153] focus:ring-2 focus:ring-brand/20 ${
                  sortBy === 'grade' ? 'text-transparent' : ''
                }`}
              >
                <option value="grade">Opportunity Grade</option>
                <option value="name">Area Name</option>
                <option value="recommended">Recommended</option>
              </select>
              {sortBy === 'grade' && (
                <img
                  src="/opportunity-grade-label.svg"
                  alt=""
                  aria-hidden="true"
                  width="115"
                  height="13"
                  className="pointer-events-none absolute left-3 top-1/2 h-[13px] w-[115px] -translate-y-1/2 peer-focus:invisible"
                />
              )}
              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-[13px] top-1/2 -translate-y-1/2 text-[#99a1af]"
              />
            </span>
          </label>
        </section>

        <aside
          role="status"
          className="flex min-h-[45px] flex-wrap items-center gap-2 rounded-[14px] border border-[rgba(91,79,232,0.2)] bg-[rgba(91,79,232,0.05)] px-4 py-2.5 text-[13px] text-[#364153]"
        >
          <Info size={14} className="shrink-0 text-brand" />
          <span>
            Showing a preview of the top 20 micro-markets. Create a free account
            to view the full Top 100.
          </span>
          <a
            href="#signup"
            className="font-semibold text-brand underline underline-offset-2 hover:text-violet-800"
          >
            Create a free account
          </a>
        </aside>

        <section aria-label="Emerging investment areas" className="mt-5">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px] table-fixed border-separate border-spacing-0 text-left">
              <colgroup>
                <col className="w-[5.5%]" />
                <col className="w-[15.5%]" />
                <col className="w-[9.5%]" />
                <col className="w-[13%]" />
                <col className="w-[10%]" />
                <col className="w-[11.5%]" />
                <col className="w-[12%]" />
                <col className="w-[8%]" />
                <col className="w-[15%]" />
              </colgroup>
              <thead>
                <tr className="h-[38px] text-[11.5px] font-semibold uppercase tracking-[0.035em] text-[#6a7282]">
                  {[
                    'Rank',
                    'Micro-market',
                    'Location',
                    'Opportunity Grade',
                    'National Tier',
                    'Growth Outlook',
                    'Rental Strength',
                    'Liquidity',
                    'Why it stands out',
                  ].map((heading) => (
                    <th key={heading} scope="col" className="px-2 py-2">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visibleMarkets.map((market) => {
                  const rank = emergingInvestmentMarkets.indexOf(market) + 1;
                  const isLocked = rank > 1;

                  return (
                    <tr
                      key={market.name}
                      className={`h-[62px] text-[12.5px] ${
                        isLocked
                          ? 'bg-white text-[#687386] opacity-50'
                          : 'bg-violet-50/70 font-medium text-[#101828]'
                      }`}
                    >
                      <td
                        className={`border-y border-[#f3f4f6] px-2 py-2 ${
                          rank === 1 ? 'rounded-l-[10px]' : ''
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="w-5 text-center">{rank}</span>
                          {isLocked && (
                            <a
                              href="#signup"
                              aria-label={`Unlock ${market.name}`}
                              title="Create an account to unlock this area"
                              className="text-violet-400 transition hover:text-brand"
                            >
                              <LockIcon size={12} />
                            </a>
                          )}
                        </span>
                      </td>
                      <td
                        className={`border-y border-[#f3f4f6] px-2 py-2 ${
                          rank === 1 ? 'font-semibold' : ''
                        }`}
                      >
                        {market.name}
                      </td>
                      <td className="border-y border-[#f3f4f6] px-2 py-2">
                        <span className="block">{market.city}</span>
                        <span className="block text-[11px] text-slate-400">
                          {market.postcode}
                        </span>
                      </td>
                      <td className="border-y border-[#f3f4f6] px-2 py-2">
                        <span className="font-semibold text-emerald-600">
                          {market.grade}
                        </span>
                      </td>
                      <td className="border-y border-[#f3f4f6] px-2 py-2">
                        <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[11px] font-medium text-brand">
                          {market.tier}
                        </span>
                      </td>
                      <td className="border-y border-[#f3f4f6] px-2 py-2 text-emerald-600">
                        {market.growth}
                      </td>
                      <td className="border-y border-[#f3f4f6] px-2 py-2 text-emerald-600">
                        {market.rental}
                      </td>
                      <td className="border-y border-[#f3f4f6] px-2 py-2 text-emerald-600">
                        {market.liquidity}
                      </td>
                      <td
                        className={`border-y border-[#f3f4f6] px-2 py-2 leading-[16px] ${
                          rank === 1 ? 'rounded-r-[10px]' : ''
                        }`}
                      >
                        {market.insight}
                      </td>
                    </tr>
                  );
                })}
                {visibleMarkets.length === 0 && (
                  <tr>
                    <td
                      colSpan={9}
                      className="border-y border-slate-100 px-4 py-12 text-center text-sm text-slate-500"
                    >
                      No areas match those search and filter options.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <Card
          as="section"
          id="signup"
          variant="feature"
          className="mt-6 flex flex-col gap-3 rounded-[16px] border-violet-200 bg-[#f8f6ff] px-7 py-7"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-violet-100 text-brand">
            <LockIcon size={14} />
          </span>
          <div>
            <h2 className="text-[16px] font-bold leading-6 text-[#101828]">
              Unlock the full Top 100 and deeper insights
            </h2>
            <p className="text-[13px] leading-5 text-[#6a7282]">
              Join early access to unlock:
            </p>
          </div>
          <ul className="space-y-1 text-[13px] leading-5 text-[#4a5565]">
            {[
              'See the complete Top 100 ranked by our Opportunity Signal',
              'View exact scores for growth, rental strength, liquidity and value',
              'Compare micro-markets side-by-side',
              'Download detailed area reports and historical trends',
            ].map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <CheckIcon size={12} className="mt-1 shrink-0 text-[#5b4fe8]" />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Button href="#signup" size="md" className="rounded-[10px]">
              Join early access — it’s free
            </Button>
            <span className="text-[12px] text-[#8a8fa1]">
              No credit card required. Early access members get priority
              updates.
            </span>
          </div>
        </Card>
      </div>

      <footer className="mt-3 flex min-h-[66px] items-center justify-center border-t border-[#f3f4f6] px-4 text-center text-[11.5px] text-[#99a1af]">
        PropSense does not provide financial advice. Data last updated 24 May
        2025.
      </footer>
    </main>
  );
}
