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
  // openGraph: { images: [HOME_OG_IMAGE_URL] },
};

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html className='bg-theme_bg text-theme_fg' lang='en'>
      {/* TODO(hmny): Add also multi-system icon support */}
      {/* <head>
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#000000' />
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
        <meta name='msapplication-TileColor' content='#000000' />
        <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
        <meta name='theme-color' content='#000' />
        <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      </head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
