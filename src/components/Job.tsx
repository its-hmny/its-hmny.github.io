import { type Job } from '@hmny.dev/lib/types';
import Link from 'next/link';

export function Title({ job }: { job: Job }) {
  return (
    <h3 className='text-lg font-semibold text-theme_fg'>
      <job.icon className='mr-1 inline' />
      {job.role} @{' '}
      <Link href={job.company.website} target='_blank' className='text-theme_primary-500 hover:underline'>
        {job.company.name}
      </Link>
    </h3>
  );
}

export function Description({ job }: { job: Job }) {
  return (
    <div className='mt-2 text-base font-normal text-theme_fg_accent'>
      <div className='mb-5 max-sm:flex max-sm:flex-row max-sm:flex-wrap max-sm:justify-evenly'>
        {job.skills.map(skill => (
          <span
            key={skill}
            className='mr-2 inline-flex items-center rounded-full bg-theme_secondary-700 px-2.5 py-0.5 text-xs font-medium text-theme_secondary-300 max-lg:m-[8px]'
          >
            <span className='me-1 h-2 w-2 rounded-full bg-theme_secondary-500' />
            {skill}
          </span>
        ))}
      </div>
      <p>{job.description}</p>
    </div>
  );
}
