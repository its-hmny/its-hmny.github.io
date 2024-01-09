import { useProgress } from '@react-three/drei';
import { ReactNode, Suspense } from 'react';

type SplashscreenProps = { children: ReactNode };

export default function Splashscreen({ children }: SplashscreenProps) {
  const { progress } = useProgress();

  return (
    <>
      {progress < 100 ? (
        // Overlay component with full width and height that will 'hide' the real content behind
        <div className='z-1 absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-black'>
          <div className='h-[250px] w-[250px] rounded-full border-8 border-solid border-gray-300'>
            <div className='circle animate-spin-fast absolute h-10 w-10 rounded-full bg-lime-500' />
            <div className='circle animate-spin-slow absolute h-10 w-10 rounded-full bg-orange-500' />
          </div>
        </div>
      ) : null}

      <Suspense>{children}</Suspense>
    </>
  );
}
