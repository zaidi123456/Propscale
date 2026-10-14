import Navbar from '../../components/layout/Navbar';
import LiquidityExpansion from '../../components/features/LiquidityExpansion';

export const metadata = {
  title: 'Easier Exit Markets | PropScale',
  description:
    'Discover micro-markets where market activity and exitability are improving, creating more liquidity and better routes to exit.',
};

export default function EasierExitMarketsPage() {
  return (
    <>
      <Navbar />
      <LiquidityExpansion
        title="Easier Exit Markets"
        audience="For Deal sourcers / advisors"
        lastUpdated="24 May 2026"
      />
    </>
  );
}
