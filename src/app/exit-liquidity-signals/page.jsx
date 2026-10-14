import Navbar from '../../components/layout/Navbar';
import LiquidityExpansion from '../../components/features/LiquidityExpansion';

export const metadata = {
  title: 'Exit Liquidity Signals | PropScale',
  description:
    'Discover micro-markets where market activity and exitability are improving, creating more liquidity and better routes to exit.',
};

export default function ExitLiquiditySignalsPage() {
  return (
    <>
      <Navbar />
      <LiquidityExpansion
        title="Exit Liquidity Signals"
        audience="For Developers / operators"
        lastUpdated="24 May 2026"
      />
    </>
  );
}
