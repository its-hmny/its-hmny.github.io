import { useProgress } from '@react-three/drei';
import { ReactNode, Suspense } from 'react';

import './Splashscreen.css';

type SplashscreenProps = { children: ReactNode };

export default function Splashscreen({ children }: SplashscreenProps) {
  const { progress } = useProgress();

  return (
    <>
      {progress < 100 ? (
        // Overlay component with full width and height that will 'hide' the real content behind
        <div className='z-1 absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-black'>
          <div className='pl'>
            <div className='pl__outer-ring'></div>
            <div className='pl__inner-ring'></div>
            <div className='pl__track-cover'></div>
            <div className='pl__ball'>
              <div className='pl__ball-texture'></div>
              <div className='pl__ball-outer-shadow'></div>
              <div className='pl__ball-inner-shadow'></div>
              <div className='pl__ball-side-shadows'></div>
            </div>
          </div>
        </div>
      ) : null}

      <Suspense>{children}</Suspense>
    </>
  );
}
