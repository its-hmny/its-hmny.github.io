import { type Article } from '@hmny.dev/lib/types';
import Link from 'next/link';

export function Hero({ post }: Readonly<{ post: Article }>) {
  const dateFmtOpt = { year: 'numeric', month: 'long', day: 'numeric' } as const;

  return (
    <article>
      <div className='mb-8 md:mb-16'>
        <div className='sm:mx-0'>
          <Link href={`/blog/${post.slug}`} aria-label={post.title}>
            <img
              width={1300}
              height={650}
              src={post.images.cover_large}
              className='w-full shadow-sm'
              alt={`Cover Image for ${post.title}`}
            />
          </Link>
        </div>
      </div>
      <div className='mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8'>
        <div>
          <h3 className='mb-4 text-4xl leading-tight lg:text-5xl'>
            <Link href={`/blog/${post.slug}`} className='hover:text-theme_secondary-400 hover:underline'>
              {post.title}
            </Link>
          </h3>
          <div className='mb-4 text-lg md:mb-0'>
            <time className='text-theme_secondary-500' dateTime={post.date.toISOString()}>
              {new Intl.DateTimeFormat(undefined, dateFmtOpt).format(post.date)}
            </time>
          </div>
        </div>
        <div>
          <p className='mb-4 text-justify text-lg  leading-relaxed'>{post.excerpt}</p>
          <div className='flex items-center'>
            <img
              width={50}
              height={50}
              alt={post.author.name}
              src={post.author.picture}
              className='mr-4 h-12 w-12 rounded-full'
            />
            <div className='text-xl font-bold'>{post.author.name}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function Preview({ post }: Readonly<{ post: Article }>) {
  const dateFmtOpt = { year: 'numeric', month: 'long', day: 'numeric' } as const;

  return (
    <article>
      <div className='mb-5'>
        <div className='sm:mx-0'>
          <Link href={`/blog/${post.slug}`} aria-label={post.title}>
            <img
              width={600}
              height={400}
              src={post.images.cover_small}
              className='w-full shadow-sm'
              alt={`Cover Image for ${post.title}`}
            />
          </Link>
        </div>
      </div>
      <h3 className='mb-3 text-3xl leading-snug'>
        <Link href={`/blog/${post.slug}`} className='hover:text-theme_secondary-400 hover:underline'>
          {post.title}
        </Link>
      </h3>
      <div className='mb-4 text-lg'>
        <time className='text-theme_secondary-500' dateTime={post.date.toISOString()}>
          {new Intl.DateTimeFormat(undefined, dateFmtOpt).format(post.date)}
        </time>
      </div>
      <p className='mb-4 text-justify text-lg leading-relaxed'>{post.excerpt}</p>
      <div className='flex items-center'>
        <img
          width={50}
          height={50}
          alt={post.author.name}
          src={post.author.picture}
          className='mr-4 h-12 w-12 rounded-full'
        />
        <div className='text-xl font-bold'>{post.author.name}</div>
      </div>
    </article>
  );
}
