import { Project } from '@hmny.dev/lib/types';
import { ComponentPropsWithoutRef } from 'react';

export function ReviewCard({ project }: { project: Project }) {
  return (
    <figure className='relative h-48 w-64 cursor-pointer overflow-hidden rounded-xl border border-gray-950/[.1] bg-gray-950/[.01] p-4 hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'>
      <div className='flex flex-row items-center justify-evenly gap-2'>
        <img className='rounded-full' width='48' height='48' alt={project.name} src={project.logo} />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>{project.name}</figcaption>
          <p className='text-xs font-medium dark:text-white/40'>{project.type === 'personal_project' ? 'Personal Project' : 'Work Project'}</p>
        </div>
      </div>
      <blockquote className='mt-2 text-sm'>{project.excerpt}</blockquote>
    </figure>
  );
};


interface MarqueeProps extends ComponentPropsWithoutRef<'div'> {
    reverse?: boolean;
    pauseOnHover?: boolean;
    //   repeat?: number;
    //   vertical?: boolean;
    //   className?: string;
  children: React.ReactNode;
}

export function Marquee({children, reverse = false, pauseOnHover = false}: MarqueeProps) {
  return (
    <div
      className='group flex flex-row overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]'
      // {
      //   "flex-row": !vertical,
      //   "flex-col": vertical,
      // },
      // className
    >
      {Array(4).fill(0).map((_, i) => (
          <div
            key={i}
            className='flex shrink-0 flex-row justify-around [gap:var(--gap)]'
            //   "animate-marquee flex-row": !vertical,
            //   "animate-marquee-vertical flex-col": vertical,
            //   "group-hover:[animation-play-state:paused]": pauseOnHover,
            //   "[animation-direction:reverse]": reverse,
          >
            {children}
          </div>
        ))}
    </div>
  );
}
