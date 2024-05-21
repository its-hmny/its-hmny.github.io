import ContactSection from '@hmny.dev/composite/ContactSection';
import WorkExperiences from '@hmny.dev/data/WorkExperiences';
import Laptop from '@hmny.dev/ui/Laptop';
import NonEuclideanCube from '@hmny.dev/ui/NonEuclideanCube';
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

function WorkExperience() { // TODO(hmny): Should move some basic pieces to 'components' (tags, roadmap, ...)
  return (
    <section className='flex h-auto min-h-screen w-screen flex-row items-center justify-evenly bg-black align-middle text-white max-lg:h-auto max-lg:min-h-screen max-lg:flex-col-reverse'>
      {/* First half of the page */}
      <div className='h-full w-6/12 p-10 max-lg:h-auto max-lg:w-screen'>
        <h3 className='font-italic mb-3 text-3xl text-orange-400'>💼 My work experience</h3>
        <p className='text-md mb-10 text-justify text-gray-500'>
          Don't let my young age fool you! In my previous work experiences I was fortunate enough to explore and broaden
          my skillset: from delving into the intricacies of blockchain technology to exploring the creative realms of 3D
          development, I bring a diverse range of expertise to the table.
        </p>

        {/* Past work experiences timeline */}
        <ol className='relative border-s border-gray-200 dark:border-orange-400'>
          {WorkExperiences.map(item => (
            <li key={item.role} className='mb-10 ms-4'>
              <div className='absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-orange-400' />
              <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
                {item.period[0]} - {item.period[1]}
              </time>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                <item.icon className='mr-1 inline' />
                {item.role} @{' '}
                <a href={item.company.website} target='_blank' className='text-orange-500 hover:underline'>
                  {item.company.name}
                </a>
              </h3>
              <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                {item.description}
                <br />
                <div className='max-sm:mt-1 max-sm:flex max-sm:flex-row max-sm:flex-wrap max-sm:justify-evenly'>
                  {item.skills.map(skill => (
                    <span
                      key={skill}
                      className='mr-2 inline-flex items-center rounded-full bg-lime-100 px-2.5 py-0.5 text-xs font-medium text-lime-600 max-lg:m-[8px] dark:bg-lime-700 dark:text-lime-300'
                    >
                      <span className='me-1 h-2 w-2 rounded-full bg-lime-500' />
                      {skill}
                    </span>
                  ))}
                </div>
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Second half of the page with the 3D model */}
      <div className='h-screen w-5/12 max-lg:h-[30vh] max-lg:w-screen'>
        <Suspense fallback={<Spinner />}>
          <NonEuclideanCube />
        </Suspense>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Landing />
      <WorkExperience />
      <ContactSection />
    </>
  );
}
