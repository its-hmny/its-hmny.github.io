import { getArticlesList } from '@hmny.dev/lib/blog';
import * as Article from '@hmny.dev/ui/Articles';
import Link from 'next/link';

export default async function Blog() {
  const [main, ...others] = await getArticlesList();

  const subtitle = `  {
    "articles_count": ${others.length + 1},
    "updated_at": "${main.date}",
    "topics": ["tech", "coding", "languages"],
    "disclaimer": "Opinions are my own, let's discuss"
  }`;

  return (
    <main className='container mx-auto px-5'>
      <section className='mb-8 mt-8 flex flex-col items-center md:mb-12 md:flex-row md:justify-between'>
        <h1 className='text-5xl font-bold leading-tight tracking-tighter md:pr-8'>
          <Link href='/' className='text-theme_primary-500 hover:underline'>
            its_hmny
          </Link>
          's blog.
        </h1>
        <pre>{subtitle}</pre>
      </section>

      <Article.Hero post={main} />

      <section>
        <h2 className='mb-8 text-5xl font-bold leading-tight tracking-tighter'>More Stories</h2>
        <div className='mb-32 grid grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2'>
          {others.map(p => (
            <Article.Preview key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
