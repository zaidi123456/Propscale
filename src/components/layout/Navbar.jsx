'use client';
import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const links = ['Map', 'Reports', 'How It Works', 'Pricing'];
const exploreGroups = [
  {
    label: 'Discover markets',
    pages: [
      { label: 'Explore UK Markets', href: '/explore-uk-markets' },
      { label: 'Explore Liverpool', href: '/explore-liverpool' },
    ],
  },
  {
    label: 'Market opportunities',
    pages: [
      { label: 'Emerging Investment Areas', href: '/emerging-investment-areas' },
      { label: 'Best Growth Outlook', href: '/best-growth-outlook' },
      { label: 'Strongest Rental Pressure', href: '/strongest-rental-pressure' },
      { label: 'Strongest Relative Value', href: '/strongest-relative-value' },
      { label: 'Liquidity Expansion', href: '/liquidity-expansion' },
      { label: 'Best Sourcing Areas', href: '/best-sourcing-areas' },
      { label: 'Demand Growth Areas', href: '/demand-growth-areas' },
      { label: 'Easier Exit Markets', href: '/easier-exit-markets' },
      { label: 'Exit Liquidity Signals', href: '/exit-liquidity-signals' },
      { label: 'Growth-Led Opportunities', href: '/growth-led-opportunities' },
      { label: 'High-Potential Development Areas', href: '/high-potential-development-areas' },
      { label: 'Investor Demand Areas', href: '/investor-demand-areas' },
      { label: 'Rental Demand Strength', href: '/rental-demand-strength' },
      { label: 'Pricing Headroom', href: '/pricing-headroom' },
      { label: 'Undervalued Micro-Markets', href: '/undervalued-micromarkets' },
    ],
  },
  {
    label: 'Area intelligence',
    pages: [{ label: 'Micro-Market Snapshot', href: '/micro-market-snapshot' }],
  },
  {
    label: 'About PropScale',
    pages: [
      { label: 'About PropScale', href: '/about-propscale' },
      { label: 'How It Works', href: '/how-it-works' },
    ],
  },
];

const exploreOverview = { label: 'Explore overview', href: '/#explore' };
const exploreLinkClass = 'block rounded-lg px-3 py-2 text-[13px] text-[#364153] hover:bg-violet-50 hover:text-brand';
const mobileExploreLinkClass = 'block rounded-control px-3 py-2 text-sm text-slate-600 transition hover:bg-violet-50 hover:text-brand';

function ExplorePageLinks({ mobile = false, onNavigate }) {
  const linkClass = mobile ? mobileExploreLinkClass : exploreLinkClass;

  return (
    <>
      <a href={exploreOverview.href} onClick={onNavigate} className={linkClass}>
        {exploreOverview.label}
      </a>
      {exploreGroups.map((group) => (
        <div key={group.label} className="pt-2">
          <p className={`px-3 pb-1 font-semibold uppercase tracking-wide text-slate-400 ${mobile ? 'pt-2 text-[10px]' : 'pt-1 text-[9px]'}`}>
            {group.label}
          </p>
          {group.pages.map((page) => (
            <a key={page.href} href={page.href} onClick={onNavigate} className={linkClass}>
              {page.label}
            </a>
          ))}
        </div>
      ))}
    </>
  );
}

function AuthActions({ onNavigate, className = '' }) {
  return (
    <div className={`relative h-[37px] w-[136px] shrink-0 ${className}`}>
      <img
        src="/auth-actions.svg"
        alt=""
        aria-hidden="true"
        width="136"
        height="37"
        className="absolute inset-0"
      />
      <a
        href="#login"
        aria-label="Log in"
        onClick={onNavigate}
        className="absolute inset-y-0 left-0 w-[53px] rounded-l-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      />
      <a
        href="#signup"
        aria-label="Sign up"
        onClick={onNavigate}
        className="absolute inset-y-0 right-0 w-[83px] rounded-r-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
      />
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <header className="navbar-frame sticky top-0 z-50 border-b border-transparent bg-white/95 backdrop-blur">
        <nav className="mx-auto flex h-[64px] w-full max-w-[1440px] items-center justify-between px-6" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight text-slate-900 lg:mr-10">
            <img src="/propscale-logo.svg" alt="" width="32" height="32" className="h-8 w-8" />
            <span><span className="text-brand">PROP</span>SCALE</span>
          </a>

          <div className="hidden items-center gap-7 text-[14px] font-medium text-[#364153] md:flex">
            <details className="group relative">
              <summary className="inline-flex cursor-pointer list-none items-center gap-1 hover:text-brand [&::-webkit-details-marker]:hidden">
                Explore <ChevronDown size={15} className="transition-transform group-open:rotate-180" />
              </summary>
              <div className="absolute left-0 top-full z-50 min-w-[280px] pt-3">
                <nav
                  aria-label="Explore pages"
                  className="max-h-[min(75vh,640px)] overflow-y-auto rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
                >
                  <ExplorePageLinks />
                </nav>
              </div>
            </details>
            {links.map((x, i) => (
              <a
                key={x}
                href={i === 0 ? '#markets' : i === 2 ? '#how-it-works' : '#platform'}
                className="hover:text-brand"
              >
                {x}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-card-padding lg:ml-auto">
            <AuthActions className="hidden md:block" />
            <Button
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav-drawer"
              variant="icon"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <X size={21} /> : <Menu size={21} />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-[320px] flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-[62px] items-center justify-between border-b border-slate-200 px-page-gutter">
          <a
            href="#top"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 font-extrabold tracking-tight text-slate-900"
          >
            <img src="/propscale-logo.svg" alt="" width="32" height="32" className="h-8 w-8" />
            <span><span className="text-brand">PROP</span>SCALE</span>
          </a>
          <Button
            aria-label="Close menu"
            variant="icon"
            size="icon"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </Button>
        </div>

        <div className="flex flex-1 flex-col justify-between overflow-y-auto p-5">
          <nav className="flex flex-col gap-1" aria-label="Mobile links">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-control px-3 py-2.5 text-base font-medium text-slate-700 transition hover:bg-violet-50 hover:text-brand [&::-webkit-details-marker]:hidden">
                Explore
                <ChevronDown size={16} className="text-slate-400 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-1 border-l border-violet-100 pl-3">
                <ExplorePageLinks mobile onNavigate={() => setIsOpen(false)} />
              </div>
            </details>
            {links.map((x, i) => (
              <a
                key={x}
                href={i === 0 ? '#markets' : i === 2 ? '#how-it-works' : '#platform'}
                onClick={() => setIsOpen(false)}
                className="rounded-control px-3 py-2.5 text-base font-medium text-slate-700 transition hover:bg-violet-50 hover:text-brand"
              >
                {x}
              </a>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5">
            <AuthActions
              className="mx-auto"
              onNavigate={() => setIsOpen(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
