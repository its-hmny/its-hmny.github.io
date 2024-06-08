import { type Article } from '@hmny.dev/lib/types';
import Image from 'next/image';
import Link from 'next/link';

type Props = { post: Article };

export function Hero({ post }: Props) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
  const fmtDate = new Intl.DateTimeFormat(undefined, options).format(new Date(post.date));

  return (
    <section>
      <div className='mb-8 md:mb-16'>
        <div className='sm:mx-0'>
          <Link href={`/blog/${post.slug}`} aria-label={post.title}>
            <Image
              width={1300}
              height={630}
              src={post.coverImage}
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
            <time className='text-theme_secondary-500' dateTime={post.date}>
              {fmtDate}
            </time>
          </div>
        </div>
        <div>
          <p className='mb-4 text-lg leading-relaxed'>{post.excerpt}</p>
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
      </div>
    </section>
  );
}

export function Preview({ post }: Props) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
  const fmtDate = new Intl.DateTimeFormat(undefined, options).format(new Date(post.date));

  return (
    <div>
      <div className='mb-5'>
        <div className='sm:mx-0'>
          <Link href={`/blog/${post.slug}`} aria-label={post.title}>
            <Image
              width={1300}
              height={630}
              src={post.coverImage}
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
        <time className='text-theme_secondary-500' dateTime={post.date}>
          {fmtDate}
        </time>
      </div>
      <p className='mb-4 text-lg leading-relaxed'>{post.excerpt}</p>
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
  );
}
