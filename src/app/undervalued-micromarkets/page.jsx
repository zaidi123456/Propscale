import Navbar from '../../components/layout/Navbar';
import StrongestRelativeValue from '../../components/features/StrongestRelativeValue';

export const metadata = {
  title: 'Undervalued MicroMarkets | PropScale',
  description:
    'Explore micro-markets that look attractively priced versus local benchmarks and fundamentals.',
};

export default function UndervaluedMicroMarketsPage() {
  return (
    <>
      <Navbar />
      <StrongestRelativeValue
        title="Undervalued MicroMarkets"
        audience="For Deal sourcers / advisors"
        lastUpdated="24 May 2026"
      />
    </>
  );
}
