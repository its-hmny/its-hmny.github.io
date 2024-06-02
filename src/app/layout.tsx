import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';

import './index.css';

const inter = Ubuntu({ weight: '400', subsets: ['latin'] });

// TODO(hmny): Add full metadata generation, per-route basis
// TODO(hmny): Check support for 'vercel/og' with static exports
export const metadata: Metadata = {
  title: 'Enea Guidi',
  icons: '/PenroseTriangle.png',
  description: 'TODO as well',
};

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
