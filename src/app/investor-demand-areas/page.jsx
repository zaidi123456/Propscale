import Navbar from '../../components/layout/Navbar';
import StrongestRentalPressure from '../../components/features/StrongestRentalPressure';
import rentalPressureMarkets from '../../components/features/rentalPressureMarkets';

export const metadata = {
  title: 'Investor Demand Areas | PropScale',
  description:
    'Explore micro-markets where rental demand is outpacing supply and buy-to-let fundamentals are attractive.',
};

const investorDemandMarkets = rentalPressureMarkets.filter(
  (market) => market.name !== 'Exeter City Centre',
);

export default function InvestorDemandAreasPage() {
  return (
    <>
      <Navbar />
      <StrongestRentalPressure
        title="Investor Demand Areas"
        audience="For Deal sourcers / advisors"
        lastUpdated="24 May 2026"
        markets={investorDemandMarkets}
        totalCount={rentalPressureMarkets.length}
      />
    </>
  );
}
