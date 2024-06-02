import { type Job } from '@hmny.dev/lib/Data';
import Link from 'next/link';

export function Title({ job }: { job: Job }) {
  return (
    <h3 className='text-theme_fg text-lg font-semibold'>
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
    <div className='text-theme_fg_accent mt-2 text-base font-normal'>
      <p>{job.description}</p>
      <div className='max-sm:mt-1 max-sm:flex max-sm:flex-row max-sm:flex-wrap max-sm:justify-evenly'>
        {job.skills.map(skill => (
          <span
            key={skill}
            className='bg-theme_secondary-700 text-theme_secondary-300 mr-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium max-lg:m-[8px]'
          >
            <span className='bg-theme_secondary-500 me-1 h-2 w-2 rounded-full' />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
