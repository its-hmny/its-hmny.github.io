import { ReactNode } from 'react';

type TimelineItemProps = Readonly<{
  children: [ReactNode, ReactNode];
  period: [string | Date, string | Date];
}>;

export function Item({ children, period }: TimelineItemProps) {
  const [title, description] = children;

  return (
    <li className='mb-10 ms-4'>
      <div className='bg-theme_primary-400 absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border-none' />
      <time className='text-theme_fg_accent mb-1 text-sm font-normal leading-none'>
        {period[0].toLocaleString()} - {period[1].toLocaleString()}
      </time>
      <>{title}</>
      <>{description}</>
    </li>
  );
}

type TimelineProps = Readonly<{ children: ReactNode }>;

export function Vertical({ children }: TimelineProps) {
  return <ol className='border-theme_primary-400 relative border-s'>{children}</ol>;
}
