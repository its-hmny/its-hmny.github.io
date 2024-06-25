import { getArticlesList } from '@hmny.dev/lib/blog';
import Link from 'next/link';

type Props = Readonly<{ children: React.ReactNode }>;

export default async function RootLayout({ children }: Props) {
  const [main, ...others] = await getArticlesList();

  const subtitle = `  {
        "articles_count": ${others.length + 1},
        "updated_at": "${main.date.toISOString()}",
        "topics": ["tech", "coding", "languages"],
        "disclaimer": "Opinions are my own, let's discuss"
      }`;

  return (
    <main className='container mx-auto px-5'>
      <header className='mb-8 mt-8 flex flex-col items-center md:mb-12 md:flex-row md:justify-between'>
        <h1 className='text-5xl font-bold leading-tight tracking-tighter md:pr-8'>
          <Link href='/' className='text-theme_primary-500 hover:underline'>
            its_hmny
          </Link>
          's blog.
        </h1>
        <pre>{subtitle}</pre>
      </header>

      {children}
    </main>
  );
}
