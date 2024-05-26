import * as Job from '@hmny.dev/ui/Job';
import Laptop from '@hmny.dev/ui/Laptop';
import NonEuclideanCube from '@hmny.dev/ui/NonEuclideanCube';
import Phone from '@hmny.dev/ui/Phone';
import Spinner from '@hmny.dev/ui/Spinner';
import * as Timeline from '@hmny.dev/ui/Timeline';
import { Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { Contacts, Jobs } from '../lib/Data';

// TODO(hmny): Should try View to manage everything through one canvas
// ? https://github.com/pmndrs/drei?tab=readme-ov-file#view

function Introduction() {
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

function WorkExperience() {
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
        <Timeline.Vertical>
          {Jobs.map(j => (
            <Timeline.Item key={j.role} period={[j.period.start, j.period.end]}>
              {/* Title section w/ role and company */}
              <Job.Title job={j} />
              {/* Brief description about the job and the activities completed */}
              <Job.Description job={j} />
            </Timeline.Item>
          ))}
        </Timeline.Vertical>
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

function ContactsList() {
  return (
    <section className='flex h-screen w-screen items-center justify-evenly bg-black align-middle text-white max-lg:h-auto max-lg:min-h-screen max-lg:flex-col'>
      <div className='h-screen w-5/12 max-lg:h-[40vh] max-lg:w-screen'>
        <Phone />
      </div>

      <div className='w-6/12 p-8 max-lg:h-auto max-lg:w-screen'>
        <h3 className='font-italic mb-3 text-3xl text-orange-400'>📱 Let's keep in touch!</h3>
        <p className='text-md mb-10 text-justify text-gray-500'>
          I'm always open to new opportunities, collaborations, and friendly conversations. Feel free to drop me a line
          if you have a project in mind, want to discuss the latest tech trends or just want to connect. Your feedback
          and ideas are always welcome! Looking forward to hearing from you soon!
        </p>
        <div className='m-7 grid auto-rows-[192px] grid-cols-3 gap-4'>
          {Contacts.map(c => (
            <div
              key={c.href}
              className={`${c.size} row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900`}
            >
              <a
                target='_blank'
                href={c.href}
                className='font-italic mb-3 text-center text-xl text-lime-400 hover:underline max-sm:text-sm'
              >
                {c.description}
              </a>
              <Image
                width={80}
                height={80}
                src={c.icon}
                alt={c.description}
                className='self-center max-md:h-10 max-md:w-10'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Introduction />
      <WorkExperience />
      <ContactsList />
    </>
  );
}
