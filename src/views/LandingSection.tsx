'use client'

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Github } from 'lucide-react';

import Macbook from '../components/Macbook';

export default function LandingSection() {
  return (
    <section className='flex h-screen w-screen items-center justify-evenly bg-black align-middle text-white max-lg:h-auto max-lg:min-h-screen max-lg:flex-col'>
      <div className='h-screen w-5/12 max-lg:h-[40vh] max-lg:w-screen'>
        <Canvas camera={{ position: [-5, 0, -23], fov: 55 }} style={{ width: '100%', height: '100%' }}>
          {/* Generic and simple diffusion lighting */}
          <ambientLight />
          {/* Studio-like lighting (top-left-behind, top-right-behind, refractive light on the bottom) */}
          <directionalLight position={[1, 4, 0]} intensity={2} />
          <directionalLight position={[-1, 4, 0]} intensity={2} />
          <directionalLight position={[4, -6, -4]} intensity={1} />
          {/* Macbook Air model with simple open/close interaction */}
          <group rotation={[0, Math.PI, 0]} position={[0, 0, 0]}>
            <Macbook />
          </group>
          <OrbitControls maxDistance={30} minDistance={20} enableZoom={true} enablePan={false} />
        </Canvas>
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
          <button
            onClick={() => window.open('https://github.com/its-hmny', '_blank')}
            className='rounded-full bg-orange-400 px-4 py-2 text-lg text-white'
          >
            <Github strokeWidth={2} className='mr-1 inline' />
            <span>See some of my work</span>
          </button>
        </div>
      </div>
    </section>
  );
}
