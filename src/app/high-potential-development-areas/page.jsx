import Navbar from '../../components/layout/Navbar';
import BestSourcingAreas from '../../components/features/BestSourcingAreas';

export const metadata = {
  title: 'High-Potential Development Areas | PropScale',
  description:
    'Explore micro-markets showing early signs of strengthening investment potential across growth, rental demand, liquidity and value.',
};

export default function HighPotentialDevelopmentAreasPage() {
  return (
    <>
      <Navbar />
      <BestSourcingAreas
        title="High-Potential Development Areas"
        audience="For Developers / operators"
      />
    </>
  );
}
