import Navbar from '../../components/layout/Navbar';
import StrongestRelativeValue from '../../components/features/StrongestRelativeValue';

export const metadata = {
  title: 'Strongest Relative Value | PropScale',
  description:
    'Explore UK micro-markets that look attractively priced against local benchmarks and fundamentals.',
};

export default function StrongestRelativeValuePage() {
  return (
    <>
      <Navbar />
      <StrongestRelativeValue />
    </>
  );
}
