import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import NonEuclideanCube from '../components/NonEuclideanCube';
import WorkExperiences from '../data/WorkExperiences';

export default function WorkSection() {
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
            <li className='mb-10 ms-4'>
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
                    <span className='mr-2 inline-flex items-center rounded-full bg-lime-100 px-2.5 py-0.5 text-xs font-medium text-lime-600 dark:bg-lime-700 dark:text-lime-300 max-lg:m-[8px]'>
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
        <Canvas shadows camera={{ position: [-3, 0.5, 3] }} style={{ width: '100%', height: '100%' }}>
          <OrbitControls maxDistance={5} minDistance={2} enableZoom={true} enablePan={false} />
          <NonEuclideanCube />
        </Canvas>
      </div>
    </section>
  );
}
