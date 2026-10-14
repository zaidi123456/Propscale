import Navbar from '../../components/layout/Navbar';
import ExploreUKMarkets from '../../components/features/ExploreUKMarkets';

export const metadata = {
  title: 'Explore UK Markets | PropScale',
  description:
    'Explore property markets across England and discover the micro-markets shaping performance in each area.',
};

export default function ExploreUKMarketsPage() {
  return (
    <>
      <Navbar />
      <ExploreUKMarkets />
    </>
  );
}
