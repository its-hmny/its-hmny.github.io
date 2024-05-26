import { type Job } from '@hmny.dev/lib/Data';
import Link from 'next/link';

export function Title({ job }: { job: Job }) {
  return (
    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
      <job.icon className='mr-1 inline' />
      {job.role} @{' '}
      <Link href={job.company.website} target='_blank' className='text-orange-500 hover:underline'>
        {job.company.name}
      </Link>
    </h3>
  );
}

export function Description({ job }: { job: Job }) {
  return (
    <div className='mt-2 text-base font-normal text-gray-500 dark:text-gray-400'>
      <p>{job.description}</p>
      <div className='max-sm:mt-1 max-sm:flex max-sm:flex-row max-sm:flex-wrap max-sm:justify-evenly'>
        {job.skills.map(skill => (
          <span
            key={skill}
            className='mr-2 inline-flex items-center rounded-full bg-lime-100 px-2.5 py-0.5 text-xs font-medium text-lime-600 max-lg:m-[8px] dark:bg-lime-700 dark:text-lime-300'
          >
            <span className='me-1 h-2 w-2 rounded-full bg-lime-500' />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
