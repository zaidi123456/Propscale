import Navbar from '../../components/layout/Navbar';
import LiquidityExpansion from '../../components/features/LiquidityExpansion';

export const metadata = {
  title: 'Liquidity Expansion | PropScale',
  description:
    'Discover UK micro-markets where market activity and exitability are improving.',
};

export default function LiquidityExpansionPage() {
  return (
    <>
      <Navbar />
      <LiquidityExpansion />
    </>
  );
}
