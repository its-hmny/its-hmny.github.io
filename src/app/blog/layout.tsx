import { getArticlesList } from '@hmny.dev/lib/blog';
import { Metadata } from 'next';
import Link from 'next/link';

// TODO(hmny): Check support for 'vercel/og' with static exports
export const metadata: Metadata = {
  title: "hmny's blog",
  keywords: ['blog', 'articles', 'tech', 'technology', 'developer', 'works'],
  description:
    'Showcase of the work by Enea Guidi, a skilled Fullstack Developer and Blockchain Specialist. Explore reliable, fast, and cutting-edge applications built for various clients using the latest technologies.',
  robots: { index: true, follow: true },
  applicationName: "Enea Guidi's (hmny) personal blog",
  alternates: { canonical: 'https://its-hmny.github.io/blog' },

  // openGraph: { images: [HOME_OG_IMAGE_URL] },s
};

type Props = Readonly<{ children: React.ReactNode }>;

export default async function RootLayout({ children }: Props) {
  const [main, ...others] = await getArticlesList();

  // This is purposefully formatted to that when put in the <pre> tag we will
  // not have any formatting issues, JSON.stringify couldn't make it beautiful.
  const subtitle = `  {
    "articles_count": ${others.length + 1},
    "updated_at": "${main.date.toISOString()}",
    "topics": ["tech", "coding", "languages"],
    "tagline": "Tech reflections from my coding journey"
  }`;

  return (
    <main className='container mx-auto px-5'>
      <header className='mb-8 mt-8 flex flex-col items-center max-lg:hidden md:mb-12 md:flex-row md:justify-between'>
        <h1 className='text-5xl font-bold leading-tight tracking-tighter md:pr-8'>
          <Link href='/' className='text-theme_primary-500 hover:underline'>
            its_hmny
          </Link>
          's blog.
        </h1>
        <pre className='text-sm'>{subtitle}</pre>
      </header>

      <div className='mt-8'>{children}</div>
    </main>
  );
}
