'use client';

import { useSearchParams } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

type ModalProps = Readonly<{ children: ReactNode }>;

export default function Modal({ children }: ModalProps) {
  const params = useSearchParams();

  useEffect(() => {
    console.log(params.get('project'));
  }, [params]);

  // TODO(hmny): Complete all rendering logic

  return <div className='absolute hidden border-s border-gray-200 dark:border-orange-400'>{children}</div>;
}
