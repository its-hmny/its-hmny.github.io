import { getArticleBySlug, getArticlesList } from '@hmny.dev/lib/blog';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  const posts = await getArticlesList();
  return posts.map(post => ({ slug: post.slug }));
}

export default async function Post({ params }: Readonly<{ params: { slug: string } }>) {
  const [main, ...others] = await getArticlesList();

  const post = await getArticleBySlug(params.slug);
  if (!post) return notFound();

  const dateFmtOpt = { year: 'numeric', month: 'long', day: 'numeric' } as const;
  const subtitle = `  {
    "articles_count": ${others.length + 1},
    "updated_at": "${main.date.toISOString()}",
    "topics": ["tech", "coding", "languages"],
    "disclaimer": "Opinions are my own, let's discuss"
  }`;

  const result = await remark().use(html).use().process(post.content);
  const content = result.toString();

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

      <article className='mb-32'>
        <h1 className='mb-12 text-center text-5xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl'>
          {post.title}
        </h1>
        <div className='hidden md:mb-12 md:block'>
          <div className='flex items-center'>
            <Image
              width={48}
              height={48}
              alt={post.author.name}
              src={post.author.picture}
              className='mr-4 h-12 w-12 rounded-full'
            />
            <div className='text-xl font-bold'>{post.author.name}</div>
          </div>
        </div>
        <div className='mb-8 sm:mx-0 md:mb-16'>
          <Image
            width={1300}
            height={630}
            src={post.cover}
            className='w-full shadow-sm'
            alt={`Cover Image for ${post.title}`}
          />
        </div>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-6 block md:hidden'>
            <div className='flex items-center'>
              <Image
                width={48}
                height={48}
                alt={post.author.name}
                src={post.author.picture}
                className='mr-4 h-12 w-12 rounded-full'
              />
              <div className='text-xl font-bold'>{post.author.name}</div>
            </div>
          </div>
          <div className='mb-6 text-lg'>
            <time className='text-theme_secondary-500' dateTime={post.date.toISOString()}>
              {new Intl.DateTimeFormat(undefined, dateFmtOpt).format(post.date)}
            </time>
          </div>
        </div>

        <div className='mx-auto max-w-7xl'>
          <div className='markdown' dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </article>
    </main>
  );
}
