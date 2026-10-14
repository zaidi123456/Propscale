import Navbar from '../../components/layout/Navbar';
import StrongestRelativeValue from '../../components/features/StrongestRelativeValue';

export const metadata = {
  title: 'Pricing Headroom | PropScale',
  description:
    'Explore micro-markets that look attractively priced versus local benchmarks and fundamentals.',
};

export default function PricingHeadroomPage() {
  return (
    <>
      <Navbar />
      <StrongestRelativeValue
        title="Pricing Headroom"
        audience="For Developers / operators"
        lastUpdated="24 May 2026"
      />
    </>
  );
}
