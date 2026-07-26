'use client';

import Link from 'next/link';

type Props = {
  /** Display name, e.g. "301chain" */
  name: string;
  /** Public-folder path, e.g. "/diagrams/301chain.excalidraw" */
  path: string;
};

export function Excalidraw({ name, path }: Props) {
  const origin = `https://its-hmny.github.io${path}`;
  const href = `https://excalidraw.com/#url=${encodeURIComponent(origin)}`;

  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='text-theme_secondary-500 hover:underline'
    >
      {name}
    </Link>
  );
}
