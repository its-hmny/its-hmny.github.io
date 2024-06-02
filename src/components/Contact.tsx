import { type Contact } from '@hmny.dev/lib/Data';
import Image from 'next/image';
import Link from 'next/link';

export function Card({ contact }: { contact: Contact }) {
  return (
    <div
      key={contact.link}
      className={`${contact.size === 'small' ? 'col-span-1' : 'col-span-2'} max-sm:col-span-2w border-theme_bg_accent bg-theme_bg_accent row-span-1 flex flex-col justify-center rounded-xl border-2 p-4 align-middle`}
    >
      <Link
        href={contact.link}
        target='_blank'
        className='font-italic text-theme_secondary-400 mb-3 text-center text-xl hover:underline max-sm:text-sm'
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
