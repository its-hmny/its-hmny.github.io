import { ReactNode } from 'react';

type TimelineItemProps = Readonly<{
  children: [ReactNode, ReactNode];
  period: [string | Date, string | Date];
}>;

export function Item({ children, period }: TimelineItemProps) {
  const [title, description] = children;

  return (
    <li className='mb-10 ms-4'>
      <div className='absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border-none bg-theme_primary-400' />
      <time className='mb-1 text-sm font-normal leading-none text-theme_fg_accent'>
        {period[0].toLocaleString()} - {period[1].toLocaleString()}
      </time>
      <>{title}</>
      <>{description}</>
    </li>
  );
}

type TimelineProps = Readonly<{ children: ReactNode }>;

export function Vertical({ children }: TimelineProps) {
  return <ol className='relative border-s border-theme_primary-400'>{children}</ol>;
}
