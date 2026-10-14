import Navbar from '../../components/layout/Navbar';
import LiverpoolMarketOverview from '../../components/features/LiverpoolMarketOverview';

export const metadata = {
  title: 'Explore Liverpool | PropScale',
  description:
    'Explore Liverpool City Region micro-markets, investment signals, demand drivers and growth outlooks.',
};

export default function ExploreLiverpoolPage() {
  return (
    <>
      <Navbar />
      <LiverpoolMarketOverview />
    </>
  );
}
