import Navbar from '../../components/layout/Navbar';
import BestGrowthOutlook from '../../components/features/BestGrowthOutlook';

export const metadata = {
  title: 'Growth-Led Opportunities | PropScale',
  description:
    'Explore areas with the strongest modelled medium-term capital growth potential.',
};

export default function GrowthLedOpportunitiesPage() {
  return (
    <>
      <Navbar />
      <BestGrowthOutlook
        title="Growth-Led Opportunities"
        audience="For Deal sourcers / advisors"
        description="Areas with the strongest modelled medium-term capital growth potential."
        lastUpdated="24 May 2026"
      />
    </>
  );
}
