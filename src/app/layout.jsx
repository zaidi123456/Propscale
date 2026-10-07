import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = { title: 'PropScale | UK Property Intelligence', description: 'Discover where UK property opportunities are strengthening first.' };

export default function RootLayout({ children }) {
  return <html lang="en"><body className={inter.className}>{children}</body></html>;
}
