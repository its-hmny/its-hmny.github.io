import { getArticlesList } from '@hmny.dev/lib/blog';
import * as Article from '@hmny.dev/ui/Articles';

export default async function Blog() {
  const [main, ...others] = await getArticlesList();

  return (
    <>
      <section>
        <Article.Hero post={main} />
      </section>

      <section>
        <h2 className='mb-8 text-5xl font-bold leading-tight tracking-tighter'>More Stories</h2>
        <div className='mb-32 grid grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2'>
          {others.map(p => (
            <Article.Preview key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </>
  );
}
