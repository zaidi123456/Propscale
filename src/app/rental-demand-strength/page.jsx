import Navbar from '../../components/layout/Navbar';
import StrongestRentalPressure from '../../components/features/StrongestRentalPressure';
import rentalPressureMarkets from '../../components/features/rentalPressureMarkets';

export const metadata = {
  title: 'Rental Demand Strength | PropScale',
  description:
    'Explore micro-markets where rental demand is outpacing supply and buy-to-let fundamentals are attractive.',
};

const rentalDemandMarkets = rentalPressureMarkets.filter(
  (market) => market.name !== 'Exeter City Centre',
);

export default function RentalDemandStrengthPage() {
  return (
    <>
      <Navbar />
      <StrongestRentalPressure
        title="Rental Demand Strength"
        audience="For Developers / operators"
        lastUpdated="24 May 2026"
        markets={rentalDemandMarkets}
        totalCount={rentalPressureMarkets.length}
      />
    </>
  );
}
