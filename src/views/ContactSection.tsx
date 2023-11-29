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
          {/* TODO(Enea): Add comment to the 3D section */}
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
          </div>

          {/* Three small boxes: LinkedIn, Twitter, and Telegram */}
          <div className='row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            <h1 className='font-italic mb-3 text-center text-xl text-lime-400'>Work, skills and past experiences</h1>
            <img src='/socials/LinkedIn.svg' className='h-20 w-20 self-center' />
          </div>
          <div className='row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            {/* TODO (Enea): Find new X.com SVG logo */}
            <h1 className='font-italic mb-3 text-center text-xl text-lime-400'>See my posts and discussions</h1>
            <img src='/socials/Twitter.svg' className='h-20 w-20 self-center' />
          </div>
          <div className='row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            <h1 className='font-italic mb-3 text-center text-xl text-lime-400'>Have a private chat with me</h1>
            <img src='/socials/Telegram.svg' className='h-20 w-20 self-center' />
          </div>

          {/* One medium, one small box: Personal blog and e-mail for business enquiries */}
          <div className='col-span-2 row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            <h1 className='font-italic mb-3 text-center text-xl text-lime-400'>Read my articles and blogposts</h1>
            <img src='/socials/Medium.svg' className='h-20 w-20 self-center dark:invert' />
          </div>
          <div className='row-span-1 flex flex-col justify-center rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 align-middle dark:bg-neutral-900'>
            <h1 className='font-italic mb-3 text-center text-xl text-lime-400'>Send your business enquiries</h1>
            <img src='/socials/Email.svg' className='h-20 w-20 self-center' />
          </div>
        </div>
      </div>
    </section>
  );
}
