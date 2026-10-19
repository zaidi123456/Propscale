'use client';

import { useMemo, useState } from 'react';
import {
  ChevronDown,
  ChevronLeft,
  Filter,
  Search,
} from 'lucide-react';
import { CheckIcon, LockIcon } from '../ui/AccessIcons';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Input from '../ui/Input';
import liquidityExpansionMarkets from './liquidityExpansionMarkets';

const regions = [
  ...new Set(liquidityExpansionMarkets.map((market) => market.region)),
].sort();

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

function ActivityTrend() {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] text-[#687386]">
      <svg
        aria-hidden="true"
        width="21"
        height="12"
        viewBox="0 0 21 12"
        fill="none"
        className="shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.0004 0.75V7.5C21.0005 7.64842 20.9566 7.79354 20.8742 7.91699C20.7918 8.04043 20.6746 8.13665 20.5375 8.19347C20.4004 8.25028 20.2495 8.26513 20.1039 8.23615C19.9584 8.20716 19.8247 8.13563 19.7198 8.03063L16.8754 5.18531L10.281 11.7806C10.2114 11.8504 10.1287 11.9057 10.0376 11.9434C9.94657 11.9812 9.84898 12.0006 9.75042 12.0006C9.65186 12.0006 9.55426 11.9812 9.46321 11.9434C9.37216 11.9057 9.28945 11.8504 9.21979 11.7806L0.219792 2.78063C0.0790616 2.63989 -2.09705e-09 2.44902 0 2.25C2.09705e-09 2.05098 0.0790616 1.86011 0.219792 1.71937C0.360523 1.57864 0.551394 1.49958 0.750417 1.49958C0.94944 1.49958 1.14031 1.57864 1.28104 1.71937L9.75042 10.1897L15.8151 4.125L12.9698 1.28063C12.8648 1.17573 12.7933 1.04204 12.7643 0.89648C12.7353 0.750917 12.7501 0.600025 12.807 0.462907C12.8638 0.32579 12.96 0.208613 13.0834 0.12621C13.2069 0.0438069 13.352 -0.000116571 13.5004 2.3235e-07H20.2504C20.4493 2.3235e-07 20.6401 0.079018 20.7807 0.21967C20.9214 0.360323 21.0004 0.551088 21.0004 0.75Z"
          fill="#6E4EEF"
        />
      </svg>
      Rising
    </span>
  );
}

function OpportunityGrade({ value }) {
  return (
    <span
      className={`inline-flex h-[21px] min-w-[24px] items-center justify-center rounded-full px-2 py-[2px] text-center align-middle text-[13px] font-medium leading-[19.5px] ${
        value === 'A'
          ? 'bg-[rgba(20,152,69,0.1)] text-[#16a34a]'
          : 'bg-[#eff6ff] text-[#3b82f6]'
      }`}
    >
      {value}
    </span>
  );
}

export default function LiquidityExpansion({
  title = 'Liquidity Expansion',
  audience = 'For Investors / Landlords',
  lastUpdated = '24 May 2025',
}) {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All Regions');
  const [city, setCity] = useState('All Cities');
  const [improvingOnly, setImprovingOnly] = useState(false);
  const [lowRiskOnly, setLowRiskOnly] = useState(false);
  const [sortBy, setSortBy] = useState('grade');

  const cities = useMemo(
    () =>
      [
        ...new Set(
          liquidityExpansionMarkets
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
    const markets = liquidityExpansionMarkets.filter((market) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${market.name} ${market.city} ${market.postcode}`
          .toLowerCase()
          .includes(normalizedQuery);

      return (
        matchesQuery &&
        (region === 'All Regions' || market.region === region) &&
        (city === 'All Cities' || market.city === city) &&
        (!improvingOnly || market.liquidity === 'Improving') &&
        (!lowRiskOnly || market.riskSignal === 'Low')
      );
    });

    const byGrade = (a, b) =>
      a.opportunityGrade.localeCompare(b.opportunityGrade) ||
      a.rank - b.rank;

    switch (sortBy) {
      case 'name':
        return markets.sort((a, b) => a.name.localeCompare(b.name));
      case 'liquidity':
        return markets.sort(
          (a, b) => a.liquidity.localeCompare(b.liquidity) || byGrade(a, b),
        );
      case 'risk':
        return markets.sort(
          (a, b) => a.riskSignal.localeCompare(b.riskSignal) || byGrade(a, b),
        );
      case 'grade':
      default:
        return markets.sort(byGrade);
    }
  }, [city, improvingOnly, lowRiskOnly, query, region, sortBy]);

  return (
    <main>
      <section className="relative isolate h-[298px] overflow-hidden border-b border-slate-100 bg-white">
        <img
          src="/liquidity-expansion-hero.png"
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
              Discover micro-markets where market activity and exitability are
              improving — creating more liquidity and better routes to exit.
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

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-2 px-page-gutter py-3 sm:px-8 md:px-[65px] site-container">
        <section
          aria-label="Filter and sort liquidity areas"
          className="flex min-h-[34px] flex-wrap items-center justify-between gap-3 py-1"
        >
          <div className="flex flex-wrap items-center gap-2">
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
              <summary className="flex h-[35.5px] w-[83.63px] cursor-pointer list-none items-center gap-1.5 rounded-[10px] border border-[#e5e7eb] bg-white px-3 text-[13px] text-[#364153] outline-none transition hover:border-violet-300 focus-visible:ring-2 focus-visible:ring-brand/20 [&::-webkit-details-marker]:hidden">
                <Filter size={14} className="shrink-0 text-[#99a1af]" />
                Filters
              </summary>
              <div className="absolute left-0 top-11 z-20 w-64 space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
                <FilterCheckbox
                  label="Improving liquidity"
                  checked={improvingOnly}
                  onChange={() => setImprovingOnly((selected) => !selected)}
                />
                <FilterCheckbox
                  label="Low risk signal"
                  checked={lowRiskOnly}
                  onChange={() => setLowRiskOnly((selected) => !selected)}
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
                <option value="liquidity">Liquidity</option>
                <option value="risk">Risk Signal</option>
                <option value="name">Area Name</option>
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
          className="flex min-h-[34px] flex-wrap items-center justify-between gap-3 rounded-[14px] border border-[rgba(91,79,232,0.2)] bg-[rgba(91,79,232,0.05)] px-3 py-1.5"
        >
          <div className="flex items-center gap-2 text-[11px] font-medium leading-4 text-[#364153]">
            <LockIcon size={13} className="shrink-0 text-[#5b4fe8]" />
            <p>
              You’re viewing a public preview of the top 20 micro-markets. Join
              early access to unlock full rankings, deeper liquidity metrics
              and exitability signals.
            </p>
          </div>
          <Button
            href="#signup"
            size="md"
            className="h-[30px] rounded-[6px] px-4 text-[11px]"
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
              <col className="w-[11%]" />
              <col className="w-[14%]" />
              <col className="w-[11%]" />
              <col className="w-[13%]" />
              <col className="w-[19%]" />
            </colgroup>
            <thead>
              <tr className="h-[27px] text-[10.5px] font-semibold uppercase tracking-[0.025em] text-[#6a7282]">
                {[
                  'Rank',
                  'Micro-market',
                  'Location',
                  'Liquidity',
                  'Market Activity Trend',
                  'Risk Signal',
                  'Opportunity Grade',
                  'Why it stands out',
                ].map((heading) => (
                  <th key={heading} scope="col" className="px-2 py-1.5">
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
                      market.rank === 1 ? 'h-[47px]' : 'h-[43px]'
                    } text-[11px] ${
                      market.rank === 1
                        ? 'bg-[#f8f7ff] text-[#101828]'
                        : 'bg-white text-[#687386] opacity-50'
                    }`}
                  >
                    <td
                      className={`border-y border-[#f3f4f6] px-2 py-1.5 ${
                        market.rank === 1 ? 'rounded-l-[8px]' : ''
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
                      className={`border-y border-[#f3f4f6] px-2 py-1.5 ${
                        market.rank === 1 ? 'font-semibold text-[#101828]' : ''
                      }`}
                    >
                      {market.name}
                    </td>
                    <td className="border-y border-[#f3f4f6] px-2 py-1.5">
                      <span className="block">{market.city}</span>
                      <span className="block text-[9px] text-slate-400">
                        {market.postcode}
                      </span>
                    </td>
                    <td className="border-y border-[#f3f4f6] px-2 py-1.5 font-medium text-[#16a34a]">
                      {market.liquidity}
                    </td>
                    <td className="border-y border-[#f3f4f6] px-2 py-1.5">
                      <ActivityTrend />
                    </td>
                    <td className="border-y border-[#f3f4f6] px-2 py-1.5 font-medium text-[#16a34a]">
                      {market.riskSignal}
                    </td>
                    <td className="border-y border-[#f3f4f6] px-2 py-1.5">
                      <OpportunityGrade value={market.opportunityGrade} />
                    </td>
                    <td
                      className={`border-y border-[#f3f4f6] px-2 py-1.5 text-[10px] leading-[13px] ${
                        market.rank === 1
                          ? 'rounded-r-[8px] text-[#101828]'
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

        <Card
          as="section"
          id="signup"
          variant="feature"
          className="mt-1 flex flex-col gap-2 rounded-[16px] border-violet-200 bg-[#f8f6ff] px-4 py-4"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-violet-100 text-brand">
            <LockIcon size={13} />
          </span>
          <div>
            <h2 className="text-[13px] font-bold leading-5 text-[#101828]">
              Unlock the full Top 100 and deeper insights
            </h2>
            <p className="text-[10px] leading-4 text-[#6a7282]">
              Join early access to unlock:
            </p>
          </div>
          <ul className="space-y-0.5 text-[10px] leading-[15px] text-[#4a5565]">
            {[
              'Full Top 100 rankings and custom filters',
              'Liquidity depth and market depth scores',
              'Exitability signals and time to exit estimates',
              'Historical liquidity trends and benchmarks',
              'Download detailed reports and charts',
            ].map((benefit) => (
              <li key={benefit} className="flex items-start gap-1.5">
                <CheckIcon
                  size={10}
                  className="mt-[3px] shrink-0 text-[#5b4fe8]"
                />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-3 pt-0.5">
            <Button
              href="#signup"
              size="md"
              className="h-[31px] rounded-[6px] px-4 text-[10px]"
            >
              Join early access — it’s free
            </Button>
            <span className="text-[9px] text-[#8a8fa1]">
              No credit card required. Early access members get priority
              updates.
            </span>
          </div>
        </Card>
      </div>

      <footer className="mt-2 flex min-h-[36px] items-center justify-center border-t border-[#f3f4f6] px-4 text-center text-[9px] text-[#99a1af]">
        PropScale does not provide financial advice. Data last updated {lastUpdated}.
      </footer>
    </main>
  );
}
