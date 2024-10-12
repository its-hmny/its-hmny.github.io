'use client';
import Stormtrooper from '@hmny.dev/ui/3d_models/StormTrooper';
import Spinner from '@hmny.dev/ui/Spinner';
import Link from 'next/link';
import { Suspense } from 'react';

export default function NotFound() {
  return (
    <main className='bg-theme_bg text-theme_fg'>
      <section className='flex h-screen w-screen items-center justify-evenly align-middle max-lg:h-auto max-lg:min-h-screen max-lg:flex-col'>
        <div className='h-screen w-5/12 max-lg:h-[40vh] max-lg:w-screen'>
          <Suspense fallback={<Spinner />}>
            <Stormtrooper />
          </Suspense>
        </div>

        <div className='w-6/12 p-8 max-lg:h-auto max-lg:w-screen'>
          <div className='mb-3'>
            <h1 className='mb-3 text-4xl font-bold'>😱 Oops! Looks like you're lost.</h1>
            <h4 className='mb-3 text-2xl text-theme_primary-400'>We couldn't find the page you're looking for.</h4>
            <p className='text-justify text-lg text-theme_fg_accent'>
              It seems like the page you're searching for doesn't exist or has been moved. Don't worry, you can head
              back to the homepage, or explore the links below to find what you're looking for.
            </p>
          </div>

          <div className='mb-4 mt-8'>
            <Link href='/' className='rounded-full bg-theme_primary-400 px-4 py-4 text-lg'>
              {/* <Home strokeWidth={2} className='mr-1 inline' /> */}
              <span>Go back to home</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
