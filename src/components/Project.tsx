'use client';

import { type Project } from '@hmny.dev/lib/Data';
import Image from 'next/image';

export function Summary({ project }: { project: Project }) {
  return (
    <div
      className='relative h-96 w-72 flex-shrink-0 flex-row justify-center rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 p-3'
      // TODO(hmny): Push query string param to open dialog
      onClick={() => alert(project.name)}
    >
      <h3 className='mb-2 text-center text-2xl text-orange-400'>{project.name}</h3>
      <h5 className='text-white-500 mb-6 text-center text-lg'>{project.description}</h5>
      <div className='flex h-3/5 w-full justify-center align-middle'>
        <Image width={200} height={200} alt={project.name} src={project.static.logo} className='h-48 w-[unset]' />
      </div>
    </div>
  );
}
