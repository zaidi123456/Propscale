'use client';

import { useMemo, useState } from 'react';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search,
} from 'lucide-react';
import { CheckIcon, LockIcon } from '../ui/AccessIcons';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';
import relativeValueMarkets from './relativeValueMarkets';

const regions = [
  ...new Set(relativeValueMarkets.map((market) => market.region)),
].sort();
const propertyTypes = ['Flats', 'Houses', 'HMO'];

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

export default function StrongestRelativeValue({
  title = 'Strongest Relative Value',
  audience = 'For Investors / Landlords',
  lastUpdated = '24 May 2025',
}) {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All Regions');
  const [city, setCity] = useState('All Cities');
  const [propertyType, setPropertyType] = useState('All Property Types');
  const [belowBenchmarkOnly, setBelowBenchmarkOnly] = useState(false);
  const [positiveGrowthOnly, setPositiveGrowthOnly] = useState(false);
  const [sortBy, setSortBy] = useState('grade');

  const cities = useMemo(
    () =>
      [
        ...new Set(
          relativeValueMarkets
            .filter(
              (market) =>
                region === 'All Regions' || market.region === region,
            )
            .map((market) => market.city),
        ),
      ].sort(),
    [region],
  );

  const visibleMarkets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const filteredMarkets = relativeValueMarkets.filter((market) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${market.name} ${market.city} ${market.postcode}`
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesRegion = region === 'All Regions' || market.region === region;
      const matchesCity = city === 'All Cities' || market.city === city;
      const matchesPropertyType =
        propertyType === 'All Property Types' ||
        market.propertyTypes.includes(propertyType);
      const matchesPrice =
        !belowBenchmarkOnly || market.pricePosition === 'Below benchmark';
      const matchesGrowth =
        !positiveGrowthOnly || market.growthOutlook === 'Positive';

      return (
        matchesQuery &&
        matchesRegion &&
        matchesCity &&
        matchesPropertyType &&
        matchesPrice &&
        matchesGrowth
      );
    });

    if (sortBy === 'name') {
      return [...filteredMarkets].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === 'price') {
      return [...filteredMarkets].sort((a, b) =>
        a.pricePosition.localeCompare(b.pricePosition),
      );
    }

    return filteredMarkets;
  }, [
    belowBenchmarkOnly,
    city,
    positiveGrowthOnly,
    propertyType,
    query,
    region,
    sortBy,
  ]);

  return (
    <main>
      <section className="relative isolate h-[298px] overflow-hidden border-b border-slate-100 bg-white">
        <img
          src="/relative-value-hero.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
        />
        <div className="mx-auto w-full max-w-[1440px] px-page-gutter pt-8 sm:px-8 md:px-[65px] site-container">
          <a
            href="/"
            aria-label="Back to Explore"
            className="mb-5 inline-flex h-5 w-[115px] transition-opacity hover:opacity-80"
          >
            <img src="/back-to-explore.svg" alt="" aria-hidden="true" width="115" height="20" />
          </a>

          <div className="max-w-[540px]">
            <span className="mb-2 inline-flex h-[25px] items-center rounded-full bg-[#5b4fe8] px-3 text-[11.5px] font-semibold leading-[17px] text-white">
              {audience}
            </span>
            <h1 className="text-[34px] font-extrabold leading-[41px] tracking-[-0.95px] text-[#101828] sm:text-[38px]">
              {title}
            </h1>
            <p className="mt-1 max-w-[460px] text-[14.5px] leading-[23px] text-[#6a7282]">
              Micro-markets that look attractively priced versus local
              benchmarks and fundamentals.
            </p>
            <form
              role="search"
              className="mt-2 flex h-[40.25px] w-full max-w-[480px] items-center rounded-[9px] border border-[#e5e7eb] bg-white px-2 shadow-sm"
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

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-page-gutter py-5 sm:px-8 md:px-[65px] site-container">
        <section className="grid grid-cols-1 items-center gap-6 md:grid-cols-[minmax(0,1fr)_546px]">
          <div>
            <h2 className="text-[26px] font-extrabold leading-[41px] tracking-[-0.95px] text-[#101828] sm:text-[30px]">
              Top 20 Strongest Relative Value Micro-Markets
            </h2>
            <p className="mt-1 max-w-[659px] text-[13px] leading-5 text-[#6a7282]">
              These micro-markets appear attractively priced compared to local
              benchmarks, offering strong potential for income and capital
              growth.
            </p>
          </div>

          <Card
            as="aside"
            id="how-it-works"
            variant="feature"
            className="flex min-h-[159px] flex-col justify-center gap-2 rounded-[16px] bg-[rgba(110,78,239,0.05)] px-7 py-6"
          >
            <h2 className="text-[16px] font-bold leading-6 text-[#101828]">
              How this works
            </h2>
            <p className="text-[13px] leading-5 text-[#6a7282]">
              We compare key value metrics against local benchmarks and
              fundamentals to highlight areas with the strongest relative value.
            </p>
            <a
              href="#how-it-works"
              className="text-[13.5px] font-semibold text-[#5b4fe8] hover:text-violet-800"
            >
              Learn More
            </a>
          </Card>
        </section>

        <section
          aria-label="Filter and sort relative value areas"
          className="flex min-h-[60.5px] flex-wrap items-center justify-between gap-3 border-b border-slate-100 py-3"
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

            <label className="relative inline-flex h-[34px] w-[158px] cursor-pointer items-center gap-[10px] rounded-[10px] border border-[#e5e7eb] bg-white px-[13px] py-[7px] text-[13px] font-normal leading-[19.5px] text-[#364153] transition focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20">
              <span className="sr-only">Filter by property type</span>
              <select
                aria-label="Filter by property type"
                value={propertyType}
                onChange={(event) => setPropertyType(event.target.value)}
                className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
              >
                <option>All Property Types</option>
                {propertyTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
              <span className="min-w-0 flex-1 whitespace-nowrap text-center">
                {propertyType}
              </span>
              <ChevronDown
                size={14}
                className="pointer-events-none shrink-0 text-[#99a1af]"
              />
            </label>

            <details className="group relative">
              <summary className="flex h-[35.5px] w-[83.63px] cursor-pointer list-none items-center gap-1.5 rounded-[10px] border border-[#e5e7eb] bg-white px-3 text-[13px] text-[#364153] outline-none transition hover:border-violet-300 focus-visible:ring-2 focus-visible:ring-brand/20 [&::-webkit-details-marker]:hidden">
                <Filter size={14} className="shrink-0 text-[#99a1af]" />
                Filters
              </summary>
              <div className="absolute left-0 top-11 z-20 w-64 space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                <FilterCheckbox
                  label="Below local benchmark"
                  checked={belowBenchmarkOnly}
                  onChange={() =>
                    setBelowBenchmarkOnly((selected) => !selected)
                  }
                />
                <FilterCheckbox
                  label="Positive growth outlook"
                  checked={positiveGrowthOnly}
                  onChange={() =>
                    setPositiveGrowthOnly((selected) => !selected)
                  }
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
                <option value="price">Price Position</option>
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

        <aside className="flex min-h-[64px] flex-wrap items-center justify-between gap-3 rounded-[14px] border border-[rgba(91,79,232,0.2)] bg-[rgba(91,79,232,0.05)] px-4 py-3">
          <div className="flex items-start gap-2 text-[13px] font-medium leading-5 text-[#364153]">
            <LockIcon size={14} className="mt-0.5 shrink-0 text-[#5b4fe8]" />
            <p>
              You’re viewing a public preview of the Top 20.
              <br />
              Join early access to unlock exact value gaps, benchmarks,
              comparisons and downloadable reports.
            </p>
          </div>
          <Button
            href="#signup"
            size="md"
            className="h-[38.25px] rounded-[8px] px-6 text-[13.5px]"
          >
            Join early access
          </Button>
        </aside>

        <section
          aria-label={`${title} ranking`}
          className="overflow-x-auto pt-1"
        >
          <table className="w-full min-w-[1050px] table-fixed border-separate border-spacing-0 text-left">
            <colgroup>
              <col className="w-[5%]" />
              <col className="w-[16%]" />
              <col className="w-[11%]" />
              <col className="w-[13%]" />
              <col className="w-[13%]" />
              <col className="w-[13%]" />
              <col className="w-[9%]" />
              <col className="w-[20%]" />
            </colgroup>
            <thead>
              <tr className="h-[39px] text-[11.5px] font-semibold uppercase tracking-[0.025em] text-[#6a7282]">
                {[
                  'Rank',
                  'Micro-market',
                  'Location',
                  'Rental Strength',
                  'Price Position',
                  'Growth Outlook',
                  'Rental Strength',
                  'Why it stands out',
                ].map((heading, index) => (
                  <th
                    key={`${heading}-${index}`}
                    scope="col"
                    className="px-2 py-2"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleMarkets.map((market) => {
                const isLocked = market.rank > 1;

                return (
                  <tr
                    key={market.name}
                    className={`${
                      market.rank === 1 ? 'h-[76.5px]' : 'h-[75.5px]'
                    } text-[12.5px] ${
                      market.rank === 1
                        ? 'bg-[#f8f7ff] text-[#101828]'
                        : 'bg-white text-[#687386] opacity-50'
                    }`}
                  >
                    <td
                      className={`border-y border-[#f3f4f6] px-2 py-2 ${
                        market.rank === 1 ? 'rounded-l-[10px]' : ''
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {market.rank}
                        {isLocked && (
                          <a
                            href="#signup"
                            aria-label={`Unlock ${market.name}`}
                            title="Create an account to unlock this area"
                            className="text-[#5b4fe8] transition hover:text-violet-800"
                          >
                            <LockIcon size={12} />
                          </a>
                        )}
                      </span>
                    </td>
                    <td
                      className={`border-y border-[#f3f4f6] px-2 py-2 ${
                        market.rank === 1 ? 'font-semibold text-[#101828]' : ''
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
                    <td className="border-y border-[#f3f4f6] px-2 py-2 font-semibold text-[#16a34a]">
                      {market.valueAssessment}
                    </td>
                    <td className="border-y border-[#f3f4f6] px-2 py-2 font-semibold text-[#5b4fe8]">
                      {market.pricePosition}
                    </td>
                    <td className="border-y border-[#f3f4f6] px-2 py-2 font-semibold text-[#16a34a]">
                      {market.growthOutlook}
                    </td>
                    <td className="border-y border-[#f3f4f6] px-2 py-2 font-semibold text-[#16a34a]">
                      {market.rentalStrength}
                    </td>
                    <td
                      className={`border-y border-[#f3f4f6] px-2 py-2 text-[11.5px] leading-[15px] ${
                        market.rank === 1
                          ? 'rounded-r-[10px] text-[#101828]'
                          : ''
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
                    colSpan={8}
                    className="border-y border-[#f3f4f6] px-4 py-12 text-center text-sm text-slate-500"
                  >
                    No areas match those search and filter options.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>

        <nav
          aria-label="Relative value pagination"
          className="flex min-h-[42px] items-center justify-between text-[12px] text-[#6a7282]"
        >
          <span>
            Showing {visibleMarkets.length > 0 ? '1' : '0'} to{' '}
            {visibleMarkets.length === relativeValueMarkets.length
              ? 20
              : visibleMarkets.length}{' '}
            of{' '}
            {visibleMarkets.length === relativeValueMarkets.length
              ? 20
              : visibleMarkets.length}
          </span>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous page"
              disabled
              className="h-7 w-7 rounded-[4px] p-0"
            >
              <ChevronLeft size={13} />
            </Button>
            <Button
              variant="primary"
              size="icon"
              aria-label="Page 1"
              aria-current="page"
              className="h-7 w-7 rounded-[4px] p-0 text-[11px]"
            >
              1
            </Button>
            <Button
              href="#signup"
              variant="outline"
              size="icon"
              aria-label="Page 2 — join early access to unlock"
              className="h-7 w-7 rounded-[4px] p-0 text-[11px]"
            >
              2
            </Button>
            <Button
              href="#signup"
              variant="outline"
              size="icon"
              aria-label="Next page — join early access to unlock"
              className="h-7 w-7 rounded-[4px] p-0"
            >
              <ChevronRight size={13} />
            </Button>
          </div>
        </nav>

        <Card
          as="section"
          id="signup"
          variant="feature"
          className="flex flex-col gap-3 rounded-[16px] border-violet-200 bg-[#f8f6ff] px-7 py-7"
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
          <ul className="grid gap-x-8 gap-y-1 text-[13px] leading-5 text-[#4a5565] sm:grid-cols-2">
            {[
              'Exact value gaps and local benchmarks',
              'Area comparisons and downloadable reports',
              'Price and growth fundamentals',
              'Detailed reports and export data',
            ].map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <CheckIcon
                  size={12}
                  className="mt-1 shrink-0 text-[#5b4fe8]"
                />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Button href="#signup" size="md" className="rounded-[8px] px-6">
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
        PropScale does not provide financial advice. Data last updated {lastUpdated}.
      </footer>
    </main>
  );
}
