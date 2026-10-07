import { Activity, ChevronDown, Menu } from 'lucide-react';
import Button from '../ui/Button';

const links = ['Map', 'Reports', 'How It Works', 'Pricing'];
export default function Navbar() {
  return <header className="navbar-frame sticky top-0 z-50 border-b border-transparent bg-white/95 backdrop-blur">
    <nav className="mx-auto flex h-[62px] w-full max-w-[1440px] items-center justify-between px-page-gutter lg:px-8" aria-label="Main navigation">
      <a href="#top" className="flex items-center gap-2 font-extrabold tracking-tight text-slate-900 lg:mr-10"><span className="grid h-8 w-8 place-items-center rounded-[10px] bg-brand text-white shadow-sm"><Activity size={18} strokeWidth={2.5}/></span><span><span className="text-brand">PROP</span>SCALE</span></a>
      <div className="hidden items-center gap-8 text-[16px] font-medium text-slate-600 md:flex"><a href="#explore" className="inline-flex items-center gap-1 hover:text-brand">Explore <ChevronDown size={15}/></a>{links.map((x,i)=><a key={x} href={i===0?'#markets':i===2?'#how-it-works':'#platform'} className="hover:text-brand">{x}</a>)}</div>
      <div className="flex items-center gap-card-padding lg:ml-auto"><a className="hidden px-2 text-[16px] font-medium text-slate-600 hover:text-brand sm:inline" href="#login">Log in</a><Button href="#signup" size="md">Sign up</Button><Button aria-label="Open menu" variant="icon" size="icon" className="md:hidden"><Menu size={21}/></Button></div>
    </nav>
  </header>;
}
