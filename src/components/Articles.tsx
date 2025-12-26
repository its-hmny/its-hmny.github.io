import { type Article } from '@hmny.dev/lib/types';
import Link from 'next/link';

export function Hero({ post }: Readonly<{ post: Article }>) {
  const dateFmtOpt = { year: 'numeric', month: 'long', day: 'numeric' } as const;

  return (
    <article className='flex flex-col w-full md:flex-row justify-between items-center col-span-2 mb-16'>
      <div className='md:w-2/6 m-10'>
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
      <div className='md:w-4/6 flex flex-col'>
          <h3 className='w-full mb-4 text-4xl leading-tight lg:text-5xl'>
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
      </div>
    </article>
  );
}

export function Preview({ post }: Readonly<{ post: Article }>) {
  const dateFmtOpt = { year: 'numeric', month: 'long', day: 'numeric' } as const;

  return (
    <article className='flex flex-col justify-center'>
        <div className='sm:mx-0'>
          <Link href={`/blog/${post.slug}`} aria-label={post.title}>
            <img
              width={600}
              height={400}
              src={post.images.cover_small}
              className='w-full p-auto shadow-sm'
              alt={`Cover Image for ${post.title}`}
            />
          </Link>
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
