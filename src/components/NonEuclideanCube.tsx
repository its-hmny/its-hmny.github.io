import { Edges, MeshPortalMaterial, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { ReactNode, useRef } from 'react';
import { Mesh } from 'three';

type NonEuclideanBoxSideProps = {
  index: number;
  color: string;
  children: ReactNode;
  rotation: [number, number, number];
};

function NonEuclideanBoxSide({ index, color, rotation, children }: NonEuclideanBoxSideProps) {
  // Gets a mutable reference to the 'mesh' component that will contain the 'children' element
  const mesh = useRef<Mesh>(null!);
  // Loads the GLTF model asynchronously, we need especially the 'Ambient Occlusion Map'.
  const { nodes } = useGLTF('/NonEuclideanBox.glb') as any;

  // This rotation velocity is equal for every content/shape available in every side of the
  // 'NonEuclideanBox' component, given a seamless rotation effect when exploring the scene.
  useFrame((_, delta) => {
    mesh.current.rotation.x = mesh.current.rotation.y += delta;
  });

  return (
    <MeshPortalMaterial attach={`material-${index}`}>
      {/* ...everything in here is inside the portal and isolated from the rest of canvas */}

      {/* Lighthing management, the directional light is used to cast shadows inside the box */}
      <ambientLight intensity={2} />
      <directionalLight position={[1, 4, 0]} intensity={2} />

      {/** The box 'boundaries' is baked with Ambient Occlusion to give depth effects */}
      <mesh castShadow receiveShadow rotation={rotation} geometry={nodes.Cube.geometry}>
        <meshStandardMaterial aoMapIntensity={1} aoMap={nodes.Cube.material.aoMap} color={color} />
      </mesh>

      {/* At last the only remaining thing is the floating shape inside */}
      <mesh castShadow receiveShadow ref={mesh}>
        {children}
        <meshLambertMaterial color={color} />
      </mesh>
    </MeshPortalMaterial>
  );
}

export default function NonEuclideanCube() {
  // Gets a mutable reference to the 'mesh' component that will contain the 'children' element
  const mesh = useRef<Mesh>(null!);

  // Slowly rotates the 'NonEuclideanCube' to tempt the user interaction
  useFrame((_, delta) => {
    mesh.current.rotation.x += delta * 0.3;
    mesh.current.rotation.y += delta * 0.1;
    mesh.current.rotation.z += delta * 0.2;
  });

  return (
    <mesh castShadow receiveShadow ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      {/* When used, with the 'NonEuclideanBoxSide' this component will complete the 'hollow box' effect */}
      <Edges />

      {/* First cube side */}
      <NonEuclideanBoxSide rotation={[0, 0, 0]} color='#006E90' index={0}>
        <torusGeometry args={[0.65, 0.3, 64]} />
      </NonEuclideanBoxSide>

      {/* Second cube side */}
      <NonEuclideanBoxSide rotation={[0, Math.PI / 2, 0]} color='#f0abfc' index={5}>
        <dodecahedronGeometry />
      </NonEuclideanBoxSide>

      {/* Third cube side */}
      <NonEuclideanBoxSide rotation={[0, Math.PI, 0]} color='#F18F01' index={1}>
        <torusKnotGeometry args={[0.55, 0.2, 128, 32]} />
      </NonEuclideanBoxSide>

      {/* Fourth cube side */}
      <NonEuclideanBoxSide rotation={[0, -Math.PI / 2, 0]} color='#22D3EE' index={4}>
        <sphereGeometry />
      </NonEuclideanBoxSide>

      {/* Top cube side */}
      <NonEuclideanBoxSide rotation={[0, Math.PI / 2, Math.PI / 2]} color='#ADCAD6' index={2}>
        <boxGeometry args={[1.15, 1.15, 1.15]} />
      </NonEuclideanBoxSide>

      {/* Bottom cube side */}
      <NonEuclideanBoxSide rotation={[0, Math.PI / 2, -Math.PI / 2]} color='#A3E635' index={3}>
        <octahedronGeometry />
      </NonEuclideanBoxSide>
    </mesh>
  );
}
