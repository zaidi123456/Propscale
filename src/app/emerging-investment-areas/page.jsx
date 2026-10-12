import Navbar from '../../components/layout/Navbar';
import EmergingInvestmentAreas from '../../components/features/EmergingInvestmentAreas';

export const metadata = {
  title: 'Top Emerging Investment Areas | PropScale',
  description:
    'Explore UK micro-markets showing early signs of strengthening investment potential.',
};

export default function EmergingInvestmentAreasPage() {
  return (
    <>
      <Navbar />
      <EmergingInvestmentAreas />
    </>
  );
}
