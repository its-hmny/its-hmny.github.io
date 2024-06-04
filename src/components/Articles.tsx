import { type Article } from '@hmny.dev/lib/types';
import { Avatar, CoverImage, DateFormatter } from '@hmny.dev/ui/Temp';
import Link from 'next/link';

type Props = { post: Article };

export function Hero({ post }: Props) {
  return (
    <section>
      <div className='mb-8 md:mb-16'>
        <CoverImage title={post.title} src={post.coverImage} slug={post.slug} />
      </div>
      <div className='mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8'>
        <div>
          <h3 className='mb-4 text-4xl leading-tight lg:text-5xl'>
            <Link href={`/blog/${post.slug}`} className='hover:text-theme_secondary-400 hover:underline'>
              {post.title}
            </Link>
          </h3>
          <div className='mb-4 text-lg md:mb-0'>
            <DateFormatter dateString={post.date} />
          </div>
        </div>
        <div>
          <p className='mb-4 text-lg leading-relaxed'>{post.excerpt}</p>
          <Avatar name={post.author.name} picture={post.author.picture} />
        </div>
      </div>
    </section>
  );
}

export function Preview({ post }: Props) {
  return (
    <div>
      <div className='mb-5'>
        <CoverImage slug={post.slug} title={post.title} src={post.coverImage} />
      </div>
      <h3 className='mb-3 text-3xl leading-snug'>
        <Link href={`/blog/${post.slug}`} className='hover:text-theme_secondary-400 hover:underline'>
          {post.title}
        </Link>
      </h3>
      <div className='mb-4 text-lg'>
        <DateFormatter dateString={post.date} />
      </div>
      <p className='mb-4 text-lg leading-relaxed'>{post.excerpt}</p>
      <Avatar name={post.author.name} picture={post.author.picture} />
    </div>
  );
}
