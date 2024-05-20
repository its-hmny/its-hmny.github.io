import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google'; // TODO(hmny): Change the font as well

import "./index.css"

const inter = Ubuntu({ weight: '300', subsets: ['latin'] });

type Props = Readonly<{ children: React.ReactNode; }>

export const metadata: Metadata = { title: 'TODO', description: 'TODO as well' };

export default function RootLayout({  children}: Props) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
