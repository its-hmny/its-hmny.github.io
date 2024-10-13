import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';

import './index.css';

const inter = Ubuntu({ weight: '400', subsets: ['latin'] });

// TODO(hmny): Add full metadata generation, per-route basis
// TODO(hmny): Check support for 'vercel/og' with static exports
export const metadata: Metadata = {
  creator: 'Enea Guidi',
  title: 'Enea Guidi (hmny)',
  icons: [{ rel: 'icon', url: '/PenroseTriangle.png' }],
  authors: [{ name: 'Enea Guidi', url: 'https://github.com/its-hmny' }],
  keywords: ['portfolio', 'fullstack', 'developer', '3d', 'threejs', 'react', 'nextjs'],
  description:
    'Showcase of the work by Enea Guidi, a skilled Fullstack Developer and Blockchain Specialist. Explore reliable, fast, and cutting-edge applications built for various clients using the latest technologies.',

  generator: 'Next.js',
  publisher: 'Enea Guidi',
  manifest: '/manifest.json',
  robots: { index: true, follow: true },
  applicationName: 'My personal website',
  alternates: { canonical: 'https://its-hmny.github.io' },

  // openGraph: { images: [HOME_OG_IMAGE_URL] },s
};

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html className='bg-theme_bg text-theme_fg' lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
