import { Bitcoin, LibraryBig, Store } from 'lucide-react';

/* 
 This view is the second section of my portfolio, as other sections of the website it's also split in two section:
 the first contains my work experience timeline with a brief explanaton about each one of them, the second is just
 another R3F Canvas that will contain some sorts of interactive 3D elements.
 
 TODO (Enea): I think it would be nice to have one model for each experience with a seamless animation when scrolling
*/
export default function WorkSection() {
  return (
    <section className='flex h-screen w-screen flex-row items-center justify-evenly bg-black align-middle text-white'>
      {/* First half of the page */}
      <div className='h-full w-1/2 p-10'>
        <h3 className='font-italic mb-3 text-2xl text-orange-400'>My work experience</h3>
        <p className='text-md mb-10 text-justify text-gray-500'>
          Don't let my young age fool you! In my previous work experiences I was fortunate enough to explore and broaden
          my skillset: from delving into the intricacies of blockchain technology to exploring the creative realms of 3D
          development, I bring a diverse range of expertise to the table.
        </p>

        {/* Past work experiences timeline */}
        <ol className='relative border-s border-gray-200 dark:border-orange-400'>
          <li className='mb-10 ms-4'>
            <div className='absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-orange-400' />
            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              October 2022 - Present
            </time>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              <Bitcoin className='mr-1 inline' />
              Fullstack Developer @ BKN301
            </h3>
            <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
              Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
              E-commerce & Marketing pages. Get access to over 20+ pages including a dashboard layout, charts, kanban
              board, calendar, and pre-order E-commerce & Marketing pages. Get access to over 20+ pages including a
              dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.
              <br />
              <span className='inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-600 dark:bg-orange-700 dark:text-orange-300'>
                <span className='me-1 h-2 w-2 rounded-full bg-orange-500' />
                Available
              </span>
            </p>
          </li>
          <li className='mb-10 ms-4'>
            <div className='absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-orange-400' />
            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              February 2021 - October 2022
            </time>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              <Store className='mr-1 inline' /> Fullstack Developer @ Botika
            </h3>
            <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
              All of the pages and components are first designed in Figma and we keep a parity between the two versions
              even as we update the project.
            </p>
          </li>
          <li className='ms-4'>
            <div className='absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-orange-400' />
            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              September 2018 - March 2022
            </time>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              <LibraryBig className='mr-1 inline' />
              BSc in Computer Science @ UniBo
            </h3>
            <p className='text-base font-normal text-gray-500 dark:text-gray-400'>
              Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
      </div>
      <div className='h-full w-1/2'></div>
    </section>
  );
}
