import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/features/HeroSection';
import CategoryCards from '../components/features/CategoryCards';
import MicroMarketsSection from '../components/features/MicroMarketsSection';
import MarketsSection from '../components/features/MarketsSection';
import FeatureBanners from '../components/features/FeatureBanners';
import PlatformPreview from '../components/features/PlatformPreview';
import { MarketRotationProvider } from '../components/features/MarketRotationContext';

export default function HomePage(){return <><Navbar/><MarketRotationProvider><main><HeroSection/><CategoryCards/><MicroMarketsSection/><MarketsSection/><FeatureBanners/><PlatformPreview/></main></MarketRotationProvider></>}
