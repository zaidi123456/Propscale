import Navbar from '../../components/layout/Navbar';
import StrongestRentalPressure from '../../components/features/StrongestRentalPressure';

export const metadata = {
  title: 'Strongest Rental Pressure | PropScale',
  description:
    'Explore UK micro-markets where rental demand is outpacing supply and buy-to-let fundamentals are attractive.',
};

export default function StrongestRentalPressurePage() {
  return (
    <>
      <Navbar />
      <StrongestRentalPressure />
    </>
  );
}
