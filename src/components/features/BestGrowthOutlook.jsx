'use client';

import { useMemo, useState } from 'react';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
  Sparkles,
} from 'lucide-react';
import { CheckIcon, LockIcon } from '../ui/AccessIcons';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';
import growthOutlookMarkets from './growthOutlookMarkets';

const regions = [...new Set(growthOutlookMarkets.map((market) => market.region))].sort();
const trendSpriteRowHeight = 35.75;

function Rating({ value }) {
  const color =
    value === 'Low'
      ? 'text-red-500'
      : value === 'Medium'
        ? 'text-amber-500'
        : 'text-emerald-600';

  return <span className={color}>{value}</span>;
}

function GrowthTrend({ index }) {
  return (
    <span
      aria-label="Positive growth trend"
      role="img"
      className="block h-[35.75px] w-16 bg-no-repeat"
      style={{
        backgroundImage: "url('/growth-trend-sprite.png')",
        backgroundPosition: `0 -${index * trendSpriteRowHeight}px`,
      }}
    />
  );
}

function FilterCheckbox({ label, checked, onChange }) {
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

export default function BestGrowthOutlook() {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All Regions');
  const [city, setCity] = useState('All Cities');
  const [highConfidenceOnly, setHighConfidenceOnly] = useState(false);
  const [highRentalOnly, setHighRentalOnly] = useState(false);

  const cities = useMemo(
    () =>
      [...new Set(
        growthOutlookMarkets
          .filter((market) => region === 'All Regions' || market.region === region)
          .map((market) => market.city),
      )].sort(),
    [region],
  );

  const filteredMarkets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return growthOutlookMarkets.filter((market) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${market.name} ${market.city} ${market.postcode}`
          .toLowerCase()
          .includes(normalizedQuery);

      return (
        matchesQuery &&
        (region === 'All Regions' || market.region === region) &&
        (city === 'All Cities' || market.city === city) &&
        (!highConfidenceOnly || market.confidence === 'High') &&
        (!highRentalOnly || market.rental === 'High')
      );
    });
  }, [city, highConfidenceOnly, highRentalOnly, query, region]);

  return (
    <main>
      <section className="relative isolate h-[298px] overflow-hidden border-b border-slate-100">
        <div
          className="absolute inset-0 -z-20"
          aria-hidden="true"
        >
          <img
            src="/best-growth-outlook-hero.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="mx-auto w-full max-w-[1440px] px-page-gutter pt-8 sm:px-8 md:px-[65px]">
          <a
            href="/"
            aria-label="Back to Explore"
            className="mb-5 inline-flex h-5 w-[115px] transition-opacity hover:opacity-80"
          >
            <img src="/back-to-explore.svg" alt="" aria-hidden="true" width="115" height="20" />
          </a>

          <div className="max-w-[540px]">
            <span className="mb-2 inline-flex rounded-full bg-brand px-3 py-1 text-[11.5px] font-semibold text-white">
              For Investors / Landlords
            </span>
            <h1 className="text-[34px] font-extrabold leading-[41px] tracking-[-0.95px] text-[#101828] sm:text-[38px]">
              Best Growth Outlook
            </h1>
            <p className="mt-1 max-w-[460px] text-[14.5px] leading-[23px] text-[#6a7282]">
              Areas with the strongest modelled medium-term capital growth
              potential.
            </p>

            <form
              role="search"
              className="mt-2 flex h-[40px] w-full max-w-[480px] items-center rounded-[9px] border border-[#e5e7eb] bg-white px-2 shadow-sm"
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
                <Search size={14} />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1440px] px-page-gutter sm:px-8 md:px-[65px]">
        <section
          aria-label="Filter growth outlook areas"
          className="flex min-h-[60px] flex-wrap items-center justify-between gap-3 border-b border-slate-100 py-3"
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
              <div className="absolute left-0 top-11 z-20 w-64 space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                <FilterCheckbox
                  label="High confidence"
                  checked={highConfidenceOnly}
                  onChange={() =>
                    setHighConfidenceOnly((selected) => !selected)
                  }
                />
                <FilterCheckbox
                  label="High rental strength"
                  checked={highRentalOnly}
                  onChange={() => setHighRentalOnly((selected) => !selected)}
                />
              </div>
            </details>
          </div>

          <span className="inline-flex h-[27.25px] items-center gap-1.5 rounded-full bg-[#ede9fe] px-3 text-[11.5px] font-semibold text-[#5b4fe8]">
            <Sparkles size={12} />
            Top 20 public preview
          </span>
        </section>

        <section
          aria-label="Best growth outlook ranking"
          className="overflow-x-auto pt-1"
        >
          <table className="w-full min-w-[1050px] table-fixed border-separate border-spacing-0 text-left">
            <colgroup>
              <col className="w-[4%]" />
              <col className="w-[16%]" />
              <col className="w-[10%]" />
              <col className="w-[10%]" />
              <col className="w-[11%]" />
              <col className="w-[10%]" />
              <col className="w-[13%]" />
              <col className="w-[8%]" />
              <col className="w-[18%]" />
            </colgroup>
            <thead>
              <tr className="h-[39px] text-[11.5px] font-semibold uppercase tracking-[0.025em] text-[#6a7282]">
                {[
                  'Rank',
                  'Micro-market',
                  'Location',
                  '5Y Outlook',
                  'Growth Trend',
                  'Confidence',
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
              {filteredMarkets.map((market) => {
                const rank = growthOutlookMarkets.indexOf(market) + 1;
                const isLocked = rank > 1;

                return (
                  <tr
                    key={market.name}
                    className={`${
                      rank === 1 ? 'h-[76.5px]' : 'h-[61.5px]'
                    } text-[12.5px] ${
                      rank === 1
                        ? 'bg-[#f8f7ff] text-[#101828]'
                        : 'bg-white text-[#687386] opacity-50'
                    }`}
                  >
                    <td
                      className={`border-y border-[#f3f4f6] px-2 py-2 ${
                        rank === 1 ? 'rounded-l-[10px]' : ''
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {rank}
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
                        rank === 1
                          ? 'font-semibold text-[#101828]'
                          : ''
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
                    <td className="border-y border-[#f3f4f6] px-2 py-2 font-bold text-emerald-600">
                      {market.outlook}
                    </td>
                    <td className="border-y border-[#f3f4f6] px-2 py-2">
                      <GrowthTrend index={market.trend} />
                    </td>
                    <td className="border-y border-[#f3f4f6] px-2 py-2 font-medium">
                      <Rating value={market.confidence} />
                    </td>
                    <td className="border-y border-[#f3f4f6] px-2 py-2 font-medium">
                      <Rating value={market.rental} />
                    </td>
                    <td className="border-y border-[#f3f4f6] px-2 py-2 font-medium">
                      <Rating value={market.liquidity} />
                    </td>
                    <td
                      className={`border-y border-[#f3f4f6] px-2 py-2 text-[11.5px] leading-[15px] ${
                        rank === 1
                          ? 'rounded-r-[10px] text-[#101828]'
                          : ''
                      }`}
                    >
                      {market.insight}
                    </td>
                  </tr>
                );
              })}
              {filteredMarkets.length === 0 && (
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
        </section>

        <nav
          aria-label="Ranking pagination"
          className="flex min-h-[42px] items-center justify-between text-[12px] text-[#6a7282]"
        >
          <span>
            Showing {filteredMarkets.length > 0 ? '1' : '0'} to{' '}
            {filteredMarkets.length} of {filteredMarkets.length}
          </span>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous page"
              disabled
              className="h-7 w-7 rounded-[5px] p-0"
            >
              <ChevronLeft size={13} />
            </Button>
            <Button
              variant="primary"
              size="icon"
              aria-label="Page 1"
              aria-current="page"
              className="h-7 w-7 rounded-[5px] p-0 text-[11px]"
            >
              1
            </Button>
            <Button
              href="#signup"
              variant="outline"
              size="icon"
              aria-label="Page 2 — join early access to unlock"
              className="h-7 w-7 rounded-[5px] p-0 text-[11px]"
            >
              2
            </Button>
            <Button
              href="#signup"
              variant="outline"
              size="icon"
              aria-label="Next page — join early access to unlock"
              className="h-7 w-7 rounded-[5px] p-0"
            >
              <ChevronRight size={13} />
            </Button>
          </div>
        </nav>

        <Card
          as="section"
          id="signup"
          variant="feature"
          className="mt-1 flex flex-col gap-3 rounded-[16px] border-violet-200 bg-[#f8f6ff] px-7 py-7"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-violet-100 text-brand">
            <LockIcon size={14} />
          </span>
          <div>
            <h2 className="text-[16px] font-bold leading-6 text-[#101828]">
              Unlock the full ranking and deeper insights
            </h2>
          </div>
          <ul className="space-y-1 text-[13px] leading-5 text-[#4a5565]">
            {[
              'See the full Top 100 with exact forecast scores',
              'View detailed growth drivers and risk factors',
              'Compare micro-markets side-by-side',
              'Download forecasts and deeper reports',
              'Save, track and get alerts on key markets',
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
