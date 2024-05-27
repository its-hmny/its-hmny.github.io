import { type Contact } from '@hmny.dev/lib/Data';
import Image from 'next/image';
import Link from 'next/link';

export function Card({ contact }: { contact: Contact }) {
  return (
    <div
      key={contact.link}
      className={`${contact.size === 'small' ? 'col-span-1' : 'col-span-2'} row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle max-sm:col-span-2 dark:bg-neutral-900`}
    >
      <Link
        href={contact.link}
        target='_blank'
        className='font-italic mb-3 text-center text-xl text-lime-400 hover:underline max-sm:text-sm'
      >
        {contact.description}
      </Link>
      <Image
        width={80}
        height={80}
        src={contact.icon}
        alt={contact.description}
        className='self-center max-md:h-10 max-md:w-10'
      />
    </div>
  );
}
