'use client';

import { type Product, type Project, type Skill, type Tech } from '@hmny.dev/lib/types';
import { Github } from 'lucide-react';
import { useCallback } from 'react';

export function Tech({ skill }: { skill: Skill }) {
  const tech = skill as Tech;

  return (
    <div>
      <h3 className='mb-2 text-center text-2xl text-theme_primary-400'>{tech.name}</h3>
      <div className='flex h-3/5 w-full justify-center align-middle'>
        <img width={128} height={128} alt={tech.name} src={tech.logo} className='h-32 w-[unset]' />
      </div>
    </div>
  );
}

export function Project({ skill }: { skill: Skill }) {
  const project = skill as Project;

  const openGitHub = useCallback(() => {
    window.open(project.github, '_blank');
  }, [project.github]);

  return (
    <div className='flex-column flex h-full items-center justify-center gap-2'>
      <img width={128} height={128} alt={project.name} src={project.logo} className='h-32 w-[unset]' />
      <div className='ml-3'>
        <h3 className='mb-2 text-2xl text-theme_primary-400'>{project.name}</h3>
        <h5 className='text-white-500 mb-6 text-lg'>{project.excerpt}</h5>
        <div className=''>
          <button onClick={openGitHub} className='mr-4 rounded-full bg-theme_secondary-400 px-3 py-1 text-lg'>
            <Github strokeWidth={2} className='mr-1 inline' />
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

export function Product({ skill }: { skill: Skill }) {
  const product = skill as Product;

  return (
    <div className='flex-column flex h-full items-center justify-center gap-2'>
      <img width={128} height={128} alt={product.name} src={product.logo} className='h-32 w-[unset]' />
      <div className='ml-3'>
        <h3 className='mb-2 text-2xl text-theme_primary-400'>{product.name}</h3>
        <h5 className='text-white-500 text-md mb-6'>{product.excerpt}</h5>
      </div>
    </div>
  );
}
