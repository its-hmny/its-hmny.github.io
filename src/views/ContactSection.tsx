import { Center, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import IPhoneX from '../components/iPhoneX';

export default function ContactSection() {
  return (
    <section className='flex h-screen w-screen items-center justify-evenly bg-black align-middle text-white max-lg:h-auto max-lg:min-h-screen max-lg:flex-col'>
      <div className='h-screen w-5/12 max-lg:h-[40vh] max-lg:w-screen'>
        <Canvas camera={{ position: [0, 0, 5], fov: 55 }} style={{ width: '100%', height: '100%' }}>
          {/* Generic and simple diffusion lighting */}
          <ambientLight />
          {/* Studio-like lighting (top-left-behind, top-right-behind, refractive light on the bottom) */}
          <directionalLight position={[1, 4, 0]} intensity={1} />
          <directionalLight position={[-1, 4, 0]} intensity={1} />
          <directionalLight position={[4, -6, -4]} intensity={1} />
          {/* Simple iPhone X model with looped video as the screen material */}
          <Center>
            <IPhoneX />
          </Center>
          <OrbitControls enableZoom={true} enablePan={false} />
        </Canvas>
      </div>

      <div className='w-6/12 p-8 max-lg:h-auto max-lg:w-screen'>
        <h3 className='font-italic mb-3 text-3xl text-orange-400'>📱 Let's keep in touch!</h3>
        <p className='text-md mb-10 text-justify text-gray-500'>
          I'm always open to new opportunities, collaborations, and friendly conversations. Feel free to drop me a line
          if you have a project in mind, want to discuss the latest tech trends or just want to connect. Your feedback
          and ideas are always welcome! Looking forward to hearing from you soon!
        </p>
        <div className='m-7 grid auto-rows-[192px] grid-cols-3 gap-4'>
          {/* One small, one medium: The link to my resume and  GitHub profile */}
          <div className='col-span-1 row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            <a
              target='_blank'
              href='/Resume.pdf'
              className='font-italic mb-3 text-center text-xl text-lime-400 hover:underline max-sm:text-sm'
            >
              Download my resume
            </a>
            <img src='/socials/Resume.svg' className='h-20 w-20 self-center max-md:h-10 max-md:w-10' />
          </div>
          <div className='col-span-2 row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            <a
              target='_blank'
              href='https://www.github.com/its-hmny'
              className='font-italic mb-3 text-center text-xl text-lime-400 hover:underline max-sm:text-sm'
            >
              Enough talk! Let me see the code
            </a>
            <img src='/socials/GitHub.svg' className='h-20 w-20 self-center dark:invert max-md:h-10 max-md:w-10' />
          </div>

          {/* Three small boxes: LinkedIn, Twitter, and Telegram */}
          <div className='row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/enea-guidi/'
              className='font-italic mb-3 text-center text-xl text-lime-400 hover:underline max-sm:text-sm'
            >
              Past work experience and skills
            </a>
            <img src='/socials/LinkedIn.svg' className='h-20 w-20 self-center max-md:h-10 max-md:w-10' />
          </div>
          <div className='row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            <a // TODO (hmny): Find new X.com SVG logo
              target='_blank'
              href='https://twitter.com/its_hmny'
              className='font-italic mb-3 text-center text-xl text-lime-400 hover:underline max-sm:text-sm'
            >
              See my posts and discussions
            </a>
            <img src='/socials/Twitter.svg' className='h-20 w-20 self-center max-md:h-10 max-md:w-10' />
          </div>
          <div className='row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            <a
              target='_blank'
              href='https://t.me/its_hmny'
              className='font-italic mb-3 text-center text-xl text-lime-400 hover:underline max-sm:text-sm'
            >
              Have a private chat with me
            </a>
            <img src='/socials/Telegram.svg' className='h-20 w-20 self-center max-md:h-10 max-md:w-10' />
          </div>

          {/* One medium, one small box: Personal blog and e-mail for business enquiries */}
          <div className='col-span-2 row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            <a
              target='_blank'
              href='https://dev.to/its_hmny'
              className='font-italic mb-3 text-center text-xl text-lime-400 hover:underline max-sm:text-sm'
            >
              Read my articles and blogposts
            </a>
            <img src='/socials/Medium.svg' className='h-20 w-20 self-center dark:invert max-md:h-10 max-md:w-10' />
          </div>
          <div className='row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            <a
              target='_blank'
              href='mailto:guidi.enea@gmail.com'
              className='font-italic mb-3 text-center text-xl text-lime-400 hover:underline max-sm:text-sm'
            >
              Send business enquiries
            </a>
            <img src='/socials/Email.svg' className='h-20 w-20 self-center max-md:h-10 max-md:w-10' />
          </div>
        </div>
      </div>
    </section>
  );
}
