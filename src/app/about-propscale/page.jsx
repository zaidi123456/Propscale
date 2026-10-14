import Navbar from '../../components/layout/Navbar';
import AboutPropScale from '../../components/features/AboutPropScale';

export const metadata = {
  title: 'About PropScale | Local Property Market Intelligence',
  description: 'Learn how PropSense turns neighbourhood-level residential market data into clearer property investment decisions.',
};

export default function AboutPropScalePage() {
  return <><Navbar /><AboutPropScale /></>;
}
