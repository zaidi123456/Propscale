import Navbar from '../../components/layout/Navbar';
import BestSourcingAreas from '../../components/features/BestSourcingAreas';

export const metadata = {
  title: 'Best Sourcing Areas | PropScale',
  description:
    'Explore UK micro-markets showing early signs of strengthening investment potential.',
};

export default function BestSourcingAreasPage() {
  return (
    <>
      <Navbar />
      <BestSourcingAreas />
    </>
  );
}
