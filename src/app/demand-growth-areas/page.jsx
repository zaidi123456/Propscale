import Navbar from '../../components/layout/Navbar';
import BestGrowthOutlook from '../../components/features/BestGrowthOutlook';

export const metadata = {
  title: 'Demand Growth Areas | PropScale',
  description:
    'Explore areas with the strongest modelled medium-term capital growth potential.',
};

export default function DemandGrowthAreasPage() {
  return (
    <>
      <Navbar />
      <BestGrowthOutlook
        title="Demand Growth Areas"
        audience="For Developers / operators"
        description="Areas with the strongest modelled medium-term capital growth potential."
        lastUpdated="24 May 2026"
      />
    </>
  );
}
