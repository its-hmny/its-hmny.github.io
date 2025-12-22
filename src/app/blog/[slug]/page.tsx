import { getArticleBySlug, getArticlesList } from '@hmny.dev/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getArticlesList();
  return posts.map(post => ({ slug: post.slug }));
}

type StaticProps = Readonly<{ params: { slug: string } }>;

// TODO(hmny): Check support for 'vercel/og' with static exports
export async function generateMetadata({ params }: StaticProps) {
  const post = await getArticleBySlug(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://its-hmny.github.io/blog/${params.slug}` },
  };
}

export default async function Post({ params }: StaticProps) {
  const post = await getArticleBySlug(params.slug);
  if (!post) return notFound();

  const dateFmtOpt = { year: 'numeric', month: 'long', day: 'numeric' } as const;

  return (
    <article className='mb-32'>
      <h1 className='mx-auto mb-12 text-center text-3xl font-bold leading-tight tracking-tighter md:text-left md:text-5xl md:leading-none lg:text-6xl'>
        {post.title}
      </h1>

      <div className='w-full flex flex-cols justify-between items-center md:mb-6'>
        <div className='max-w-2/4 flex items-center'>
          <img
            width={48}
            height={48}
            alt={post.author.name}
            src={post.author.picture}
            className='mr-4 h-12 w-12 rounded-full'
          />
          <div className='text-xl font-bold'>{post.author.name}</div>
        </div>
        <div className='text-lg '>
          <time className='text-theme_secondary-500' dateTime={post.date.toISOString()}>
            {new Intl.DateTimeFormat(undefined, dateFmtOpt).format(post.date)}
          </time>
        </div>
      </div>

      <div id='markdown' className='mx-auto max-w-7xl text-justify'>
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
