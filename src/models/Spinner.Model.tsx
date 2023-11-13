import { Torus } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

export default function Spinner() {
  const ref = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 5;
    ref.current.rotation.y += delta * 5;
  });

  return <Torus ref={ref} scale={2} />;
}
