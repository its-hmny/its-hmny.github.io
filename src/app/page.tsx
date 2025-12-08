import Laptop from '@hmny.dev/3d/Laptop';
import NonEuclideanCube from '@hmny.dev/3d/NonEuclideanCube';
import Phone from '@hmny.dev/3d/Phone';
import { Experiences, Jobs } from '@hmny.dev/lib/data';
import * as Bento from '@hmny.dev/ui/Bento';
import * as Job from '@hmny.dev/ui/Job';
import { Product, Project, Tech } from '@hmny.dev/ui/Experience';
import Spinner from '@hmny.dev/ui/Spinner';
import * as Timeline from '@hmny.dev/ui/Timeline';
import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Suspense, useMemo } from 'react';

// TODO(hmny): Should try View to manage everything through one canvas
// ? Reference: https://github.com/pmndrs/drei?tab=readme-ov-file#view

export default function Home() {
  const experiences = useMemo(() => {
    const sizeMap = { tech: 'small', project: 'medium', product: 'large' } as const;
    const componentMap = { tech: Tech, project: Project, product: Product } as const;

    return Experiences.map(skill => ({
      ...skill,
      size: sizeMap[skill.type],
      component: componentMap[skill.type],
    }));
  }, []);

  return (
    <main>
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
              Software Engineer - Fullstack Developer
            </h4>
            <p className='text-justify text-lg text-theme_fg_accent'>
              I architect and deliver unique digital experiences on the Frontend while implementing robust and
              extensible server on the Backend. In order to deliver a reliable solution in the least amount of time I
              adopt already established tech stacks and mix it with some of the most cutting-edge solutions available on
              the market.
            </p>
          </div>

          <div className='mb-4 mt-8 w-full flex space-x-6'>
            <Link href='https://github.com/its-hmny' target='_blank' className='rounded-full bg-theme_primary-400 px-5 py-3 text-lg'>
              <Github strokeWidth={2} className='mr-1 inline' />
              <span>GitHub</span>
            </Link>
            <Link href='https://www.linkedin.com/in/enea-guidi' target='_blank' className='rounded-full bg-theme_primary-400 px-5 py-3 text-lg'>
              <Linkedin strokeWidth={2} className='mr-1 inline mt-[-0.3em]' />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
      </section>

      <section className='flex h-auto min-h-screen w-screen flex-row items-center justify-evenly align-middle max-lg:h-auto max-lg:min-h-screen max-lg:flex-col-reverse'>
        {/* First half of the page */}
        <div className='h-full w-6/12 p-10 max-lg:h-auto max-lg:w-screen'>
          <h3 className='font-italic mb-7 text-4xl text-theme_primary-400'>💼 Work Experience</h3>
          <p className='text-md mb-10 text-justify text-theme_fg_accent'>
            Don't let my young age fool you! In my previous work experiences I was fortunate enough to explore and
            broaden my skillset: from delving into the intricacies of blockchains to exploring the creative realms of 3D
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

      <section className='align-evenly flex h-full w-full flex-col justify-evenly p-20'>
        <h3 className='font-italic mb-7 text-4xl text-theme_primary-400'>💻 Projects and Technologies</h3>
        <p className='text-md mb-10 text-justify text-theme_fg_accent'>
          I thrive on the freedom to innovate and explore new technologies, frameworks and tools, whether through side
          projects or new challenging professional experiences. This section showcases some of my personal projects, the
          technologies and tools I used as well as significant work-related projects I led or took part in during my
          past work experiences. Each one of them pushed me to improve and has been a chance to delve deep, experiment
          and expand my technical skills.
        </p>

        <Bento.Grid>
          {experiences.map(exp => (
            <Bento.Item key={exp.name} size={exp.size}>
              <exp.component exp={exp} />
            </Bento.Item>
          ))}
        </Bento.Grid>
      </section>

      <section className='flex h-screen w-screen items-center justify-evenly align-middle max-lg:h-auto max-lg:min-h-screen max-lg:flex-col'>
        <div className='h-screen w-5/12 max-lg:h-[40vh] max-lg:w-screen'>
          <Suspense fallback={<Spinner />}>
            <Phone />
          </Suspense>
        </div>

        <div className='w-6/12 p-8 max-lg:h-auto max-lg:w-screen'>
          <h3 className='font-italic mb-7 text-4xl text-theme_primary-400'>📱 Let's keep in touch!</h3>
          <p className='text-md mb-10 text-justify text-theme_fg_accent'>
            I'm always open to new opportunities, collaborations or also just friendly conversations. Feel free to
            contact me if you have a project in mind, want to discuss the latest tech trends or just want to connect.
            Your feedback and ideas are always welcome! Looking forward to hearing from you soon!
          </p>
        </div>
      </section>
    </main>
  );
}
  