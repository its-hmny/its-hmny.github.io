'use client';

import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';

type Props = Readonly<{ children: Array<ReactNode> }>;

export default function Carousel({ children }: Props) {
  const [direction, setDirection] = useState<1 | -1>(1);
  const [offset, setOffset] = useState(0);

  const [min, step, max] = useMemo(() => [0, 10, 50], []);

  const advance = useCallback(() => {
    const updated = offset + step * direction;
    if (updated >= max) setDirection(-1);
    if (updated <= min) setDirection(+1);
    setOffset(offset + step * direction);
  }, [offset, direction, max, min, step]);

  useEffect(() => {
    const id = setTimeout(advance, 1500);
    return () => clearTimeout(id);
  }, [advance]);

  return (
    <div className='flex h-full w-full items-center justify-center px-4 py-24 sm:py-8'>
      <div className='relative flex w-full items-center justify-center'>
        <div className='mx-auto h-full w-full overflow-x-hidden'>
          <div
            className='flex h-full items-center justify-start gap-14 transition duration-700 ease-out md:gap-6 lg:gap-8'
            style={{ transform: `translateX(-${offset}%)` }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
