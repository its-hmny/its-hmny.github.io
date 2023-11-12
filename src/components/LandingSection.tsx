import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import MacbookAir from './MacbookAir';

export default function LandingSection() {
  return (
    <section className='flex h-screen items-center justify-evenly bg-black align-middle text-white max-lg:w-screen max-lg:flex-col'>
      <div className='h-screen w-1/2 max-lg:h-1/3 max-lg:w-screen'>
        <Canvas camera={{ position: [-5, 0, -23], fov: 55 }} style={{ width: '100%', height: '100%' }}>
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={null}>
            <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
              <MacbookAir />
            </group>
            {/* TODO(Enea): Remove the <Environment /> preset in favor of something more lean */}
            {/* While this 'Environment' component is really good for quick iteration is better to remove it before
            production given that is pretty heavy and slows down the 3D model rendering, I think it can be simply
            implemented with an 'AmbientLight' component plus some minor tweaking (reflective surface, ...) */}
            <Environment preset='city' />
          </Suspense>
          <OrbitControls enableZoom={true} enablePan={false} />
        </Canvas>
      </div>

      <div className='w-1/2 p-8 max-lg:h-2/3 max-lg:w-screen'>
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
          <button onClick={alert} className='rounded-full bg-orange-400 px-4 py-2 text-lg text-white'>
            💼 See some of my work
          </button>
        </div>
      </div>
    </section>
  );
}
