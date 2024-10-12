import Laptop from '@hmny.dev/3d/Laptop';
import NonEuclideanCube from '@hmny.dev/3d/NonEuclideanCube';
import Phone from '@hmny.dev/3d/Phone';
import { Contacts, Jobs } from '@hmny.dev/lib/Data';
import * as Contact from '@hmny.dev/ui/Contact';
import * as Job from '@hmny.dev/ui/Job';
import Spinner from '@hmny.dev/ui/Spinner';
import * as Timeline from '@hmny.dev/ui/Timeline';
import { Github } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

// TODO(hmny): Should try View to manage everything through one canvas
// ? Reference: https://github.com/pmndrs/drei?tab=readme-ov-file#view

export default function Home() {
  return (
    <main className='bg-theme_bg text-theme_fg'>
      <section className='flex h-screen w-screen items-center justify-evenly align-middle max-lg:h-auto max-lg:min-h-screen max-lg:flex-col'>
        <div className='h-screen w-5/12 max-lg:h-[40vh] max-lg:w-screen'>
          <Suspense fallback={<Spinner />}>
            <Laptop />
          </Suspense>
        </div>

        <div className='w-6/12 p-8 max-lg:h-auto max-lg:w-screen'>
          <div className='mb-3'>
            <h1 className='mb-3 text-4xl font-bold'>
              👋 Hi there! I'm <span className='text-theme_secondary-400'>Enea</span>
            </h1>
            <h4 className='font-italic mb-3 text-2xl text-theme_primary-400'>
              Fullstack Developer & Blockchain Specialist
            </h4>
            <p className='text-justify text-lg text-theme_fg_accent'>
              I architect and deliver unique digital experiences on the Frontend while implementing robust and
              extensible server on the Backend. In order to deliver a reliable solution in the least amount of time I
              adopt already established tech stacks and mix it with some of the most cutting-edge solutions available on
              the market.
            </p>
          </div>

          <div className='mb-4 mt-8 '>
            <Link href='https://github.com/its-hmny' className='rounded-full bg-theme_primary-400 px-4 py-4 text-lg'>
              <Github strokeWidth={2} className='mr-1 inline' />
              <span>See some of my work</span>
            </Link>
          </div>
        </div>
      </section>

      <section className='flex h-auto min-h-screen w-screen flex-row items-center justify-evenly align-middle max-lg:h-auto max-lg:min-h-screen max-lg:flex-col-reverse'>
        {/* First half of the page */}
        <div className='h-full w-6/12 p-10 max-lg:h-auto max-lg:w-screen'>
          <h3 className='font-italic mb-3 text-3xl text-theme_primary-400'>💼 My work experience</h3>
          <p className='text-md mb-10 text-justify text-theme_fg_accent'>
            Don't let my young age fool you! In my previous work experiences I was fortunate enough to explore and
            broaden my skillset: from delving into the intricacies of blockchain technology to exploring the creative
            realms of 3D development, I bring a diverse range of expertise to the table.
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

      <section className='flex h-screen w-screen items-center justify-evenly align-middle max-lg:h-auto max-lg:min-h-screen max-lg:flex-col'>
        <div className='h-screen w-5/12 max-lg:h-[40vh] max-lg:w-screen'>
          <Phone />
        </div>

        <div className='w-6/12 p-8 max-lg:h-auto max-lg:w-screen'>
          <h3 className='font-italic mb-3 text-3xl text-theme_primary-400'>📱 Let's keep in touch!</h3>
          <p className='text-md mb-10 text-justify text-theme_fg_accent'>
            I'm always open to new opportunities, collaborations, and friendly conversations. Feel free to drop me a
            line if you have a project in mind, want to discuss the latest tech trends or just want to connect. Your
            feedback and ideas are always welcome! Looking forward to hearing from you soon!
          </p>
          <div className='m-7 grid auto-rows-[192px] grid-cols-3 gap-4 max-sm:grid-cols-4'>
            {Contacts.map(c => (
              <Contact.Card key={c.link} contact={c} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
