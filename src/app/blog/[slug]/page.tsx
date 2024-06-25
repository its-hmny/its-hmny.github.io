import { getArticleBySlug, getArticlesList } from '@hmny.dev/lib/blog';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams() {
  const posts = await getArticlesList();
  return posts.map(post => ({ slug: post.slug }));
}

export default async function Post({ params }: Readonly<{ params: { slug: string } }>) {
  const post = await getArticleBySlug(params.slug);
  if (!post) return notFound();

  const dateFmtOpt = { year: 'numeric', month: 'long', day: 'numeric' } as const;

  const result = await remark().use(html).use().process(post.content);
  const content = result.toString();

  return (
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
  );
}
