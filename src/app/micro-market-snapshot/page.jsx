import Navbar from '../../components/layout/Navbar';
import MicroMarketSnapshot from '../../components/features/MicroMarketSnapshot';

export const metadata = {
  title: 'Micro-Market Snapshot | PropScale',
  description:
    'A detailed overview of opportunity signals, nearby markets, local themes and growth context.',
};

export default function MicroMarketSnapshotPage() {
  return (
    <>
      <Navbar />
      <MicroMarketSnapshot />
    </>
  );
}
