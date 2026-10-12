import Navbar from '../../components/layout/Navbar';
import BestGrowthOutlook from '../../components/features/BestGrowthOutlook';

export const metadata = {
  title: 'Best Growth Outlook | PropScale',
  description:
    'Explore UK micro-markets with the strongest modelled medium-term capital growth potential.',
};

export default function BestGrowthOutlookPage() {
  return (
    <>
      <Navbar />
      <BestGrowthOutlook />
    </>
  );
}
