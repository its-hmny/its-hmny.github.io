import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';

import './index.css';

const inter = Ubuntu({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  // TODO(hmny): Add full metadata generation
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
