'use client';

import { ArrowRight, ChevronRight } from 'lucide-react';
import Card from '../ui/Card';
import { useMarketRotation } from './MarketRotationContext';

const cardImages = [
  '/Salford%20Central.png',
  '/Digbeth.png',
  '/Leeds%20South%20bank.png',
  '/Sunderland%20City%20Center.png',
  '/Milton%20keyner%20central.png',
];

const sourcingItems = [
  { name: 'Stockport', code: 'SK1', growth: '+28.4%', liquidity: 'High Liquidity' },
  { name: 'Digbeth', code: 'B5', growth: '+24.7%', liquidity: 'High Liquidity' },
  { name: 'Leeds South Bank', code: 'LS10', growth: '+22.1%', liquidity: 'High Liquidity' },
  { name: 'Salford Central', code: 'M3', growth: '+22.1%', liquidity: 'Medium Liquidity' },
  { name: 'Liverpool City Centre', code: 'L1', growth: '+19.8%', liquidity: 'Medium Liquidity' },
];

const emergingItems = [
  { name: 'Salford Central', code: 'M3', growth: '+28.4%', liquidity: 'High Liquidity' },
  { name: 'Digbeth', code: 'B5', growth: '+24.7%', liquidity: 'High Liquidity' },
  { name: 'Leeds South Bank', code: 'LS10', growth: '+22.1%', liquidity: 'High Liquidity' },
  { name: 'Sunderland City Centre', code: 'SR1', growth: '+22.1%', liquidity: 'Medium Liquidity' },
  { name: 'Milton Keynes Central', code: 'MK9', growth: '+19.8%', liquidity: 'Medium Liquidity' },
];

const developmentItems = [
  { name: 'Manchester East', code: 'M3', growth: '+28.4%', liquidity: 'High Liquidity' },
  { name: 'Birmingham City Centre', code: 'M3', growth: '+24.7%', liquidity: 'High Liquidity' },
  { name: 'Leeds South Bank', code: 'LS10', growth: '+22.1%', liquidity: 'High Liquidity' },
  { name: 'Salford Quays (M5)', code: 'SR1', growth: '+22.1%', liquidity: 'Medium Liquidity' },
  { name: 'Liverpool Waters', code: 'MK9', growth: '+19.8%', liquidity: 'Medium Liquidity' },
];

export default function MicroMarketsSection(){
  const messageIndex = useMarketRotation();
  const items = messageIndex === 0
    ? sourcingItems
    : messageIndex === 1
      ? emergingItems
      : developmentItems;
  const heading = [
    'Top sourcing opportunities this month',
    'Top emerging micro-markets this month',
    'Top development areas this month',
  ][messageIndex];

  return (
    <section id="micro-markets" className="mx-auto w-full max-w-[1440px] px-page-gutter pb-0 pt-section-y sm:px-8 xl:px-[63px]">
      <div className="mb-5 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-[19px] font-bold leading-7 text-[#171717]">{heading}</h2>
        <a href="#markets" className="inline-flex items-center gap-1 text-[13px] font-semibold text-brand transition-colors hover:text-violet-800">
          View all <ChevronRight size={16}/>
        </a>
      </div>
      <div key={messageIndex} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((market, index) => (
          <Card
            href="#markets"
            key={market.name}
            variant="microMarket"
            className={`micro-market-card min-h-[266px] micro-market-card-${index + 1}`}
          >
            <div className="relative h-[122px] overflow-hidden">
              <img
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                src={cardImages[index]}
                alt={`${market.name} neighbourhood`}
              />
              <span className="absolute left-2 top-2 grid h-6 w-6 place-items-center rounded-[8px] bg-brand text-xs font-bold text-white">
                {index + 1}
              </span>
            </div>
            <div className="p-3">
              <h3 className="text-[13.5px] font-bold text-[#171717]">{market.name}</h3>
              <p className="text-[11.5px] text-slate-400">{market.code}</p>
              <div className="mt-2 flex items-center justify-between text-[12.5px]">
                <b className="text-emerald-600">{market.growth}</b>
                <span className="font-semibold text-emerald-600">● High</span>
              </div>
              <div className="mt-0.5 flex justify-between text-[11px] text-slate-400">
                <span>Growth Outlook</span>
                <span>Rental Pressure</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${market.liquidity.startsWith('High') ? 'bg-violet-100 text-brand' : 'bg-amber-50 text-amber-700'}`}>
                  {market.liquidity}
                </span>
                <ArrowRight size={15} className="text-brand"/>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
