import Link from 'next/link';

type Props = {
  path: string // Public-folder path, e.g. "/diagrams/301chain.excalidraw"
  children: React.ReactNode;
};

export function Excalidraw({ path, children }: Props) {
  const origin = `https://its-hmny.github.io${path}`;
  const href = `https://excalidraw.com/#url=${encodeURIComponent(origin)}`;

  return (
    <Link href={href} target='_blank' rel='noopener noreferrer' className='text-theme_secondary-500 hover:underline'>
      {children}
    </Link>
  );
}
