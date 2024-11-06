import cn from 'classnames';
import { type ReactNode } from 'react';

type ItemProps = Readonly<{ size: 'small' | 'medium' | 'large'; children: ReactNode }>;

export function Item({ size, children }: ItemProps) {
  const span = { small: 'w-[17%]', medium: 'w-2/5', large: 'w-[58%]' }[size];

  return (
    <div
      className={cn(
        'h-56 rounded-xl border-2 border-theme_bg_accent bg-theme_bg_accent p-4 transition-shadow duration-500 ease-in-out hover:shadow-glowing_secondary hover:ring-2 hover:ring-theme_secondary-500',
        span,
      )}
    >
      {children}
    </div>
  );
}

type GridProps = Readonly<{ children: ReactNode }>;

export function Grid({ children }: GridProps) {
  return <div className='flex flex-row flex-wrap justify-between gap-y-8 align-middle'>{children}</div>;
}
