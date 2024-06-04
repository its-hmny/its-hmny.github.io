import cn from 'classnames';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

type AvatarProps = { name: string; picture: string };

export const Avatar = ({ name, picture }: AvatarProps) => {
  return (
    <div className='flex items-center'>
      <img src={picture} className='mr-4 h-12 w-12 rounded-full' alt={name} />
      <div className='text-xl font-bold'>{name}</div>
    </div>
  );
};

type DateFormatterProps = { dateString: string };

export const DateFormatter = ({ dateString }: DateFormatterProps) => {
  const date = parseISO(dateString);
  return (
    <time className='text-theme_secondary-500' dateTime={dateString}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  );
};

type CoverImageProps = { title: string; src: string; slug?: string };

export const CoverImage = ({ title, src, slug }: CoverImageProps) => {
  const image = (
    <img
      src={src}
      width={1300}
      height={630}
      alt={`Cover Image for ${title}`}
      className={cn('w-full shadow-sm', {
        'transition-shadow duration-200 hover:shadow-lg': slug,
      })}
    />
  );

  return (
    <div className='sm:mx-0'>
      {slug ? (
        <Link href={`/blog/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};
