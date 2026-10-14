import Navbar from '../../components/layout/Navbar';
import PlatformOverview from '../../components/features/PlatformOverview';

export const metadata = {
  title: 'The PropScale Platform | From Market Signal to Decision',
  description: 'Discover how PropSense helps property professionals analyse local markets, evaluate properties and turn evidence into better decisions.',
};

export default function HowItWorksPage() {
  return <><Navbar /><PlatformOverview /></>;
}
