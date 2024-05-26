import { ReactNode } from 'react';

type TimelineItemProps = Readonly<{
  children: [ReactNode, ReactNode];
  period: [string | Date, string | Date];
}>;

export function Item({ children, period }: TimelineItemProps) {
  const [title, description] = children;

  return (
    <li className='mb-10 ms-4'>
      <div className='absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-orange-400' />
      <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
        {period[0].toLocaleString()} - {period[1].toLocaleString()}
      </time>
      <>{title}</>
      <>{description}</>
    </li>
  );
}

type TimelineProps = Readonly<{ children: ReactNode }>;

export function Vertical({ children }: TimelineProps) {
  return <ol className='relative border-s border-gray-200 dark:border-orange-400'>{children}</ol>;
}
