import ContactSection from '@hmny.dev/composite/ContactSection';
import WorkSection from '@hmny.dev/composite/WorkSection';
import Laptop from '@hmny.dev/ui/Laptop';
import Spinner from '@hmny.dev/ui/Spinner';
import { Github } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

function Landing() {
  return (
    <section className='flex h-screen w-screen items-center justify-evenly bg-black align-middle text-white max-lg:h-auto max-lg:min-h-screen max-lg:flex-col'>
      <div className='h-screen w-5/12 max-lg:h-[40vh] max-lg:w-screen'>
        <Suspense fallback={<Spinner />}>
          <Laptop />
        </Suspense>
      </div>

      <div className='w-6/12 p-8 max-lg:h-auto max-lg:w-screen'>
        <div className='mb-3'>
          <h1 className='mb-3 text-4xl font-bold'>
            👋 Hi there! I'm <span className='text-lime-400'>Enea</span>
          </h1>
          <h4 className='font-italic mb-3 text-2xl text-orange-400'>Fullstack Developer & Blockchain Specialist</h4>
          <p className='text-justify text-lg text-gray-500'>
            I architect and deliver unique digital experiences on the Frontend while implementing robust and extensible
            server on the Backend. In order to deliver a reliable solution in the least amount of time I adopt already
            established tech stacks and mix it with some of the most cutting-edge solutions available on the market.
          </p>
        </div>

        <div className='mb-4 mt-8 '>
          <Link href='https://github.com/its-hmny' className='rounded-full bg-orange-400 px-4 py-4 text-lg text-white'>
            <Github strokeWidth={2} className='mr-1 inline' />
            <span>See some of my work</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Landing />
      <WorkSection />
      <ContactSection />
    </>
  );
}
