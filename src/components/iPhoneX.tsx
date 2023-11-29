import { useGLTF, useVideoTexture } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import { Group, Vector2 } from 'three';

export default function iPhoneX() {
  const group = useRef<Group>(null!);
  const { nodes, materials } = useGLTF('/iPhoneX.gltf') as any;
  const texture = useVideoTexture('/Particles.mp4', { start: true });

  // Overwrites the VideoTexture before applying to the Mesh
  useEffect(() => {
    // Scales down by x3 the texture (by default is way too zoomed)
    texture.repeat.setScalar(3);
    // Center the texture so that its center is matched w/ the model's center
    texture.offset = new Vector2(-0.4, 0.05);
  }, []);

  return (
    <group ref={group} rotation={[0, -75, 0]}>
      <group position={[0, 1.56, 0]}>
        <mesh geometry={nodes.Circle038.geometry} material={nodes.Circle038.material} />
        <mesh geometry={nodes.Circle038_1.geometry} material={materials['Front.001']} />
        <mesh geometry={nodes.Circle038_2.geometry} material={nodes.Circle038_2.material} />
        <mesh geometry={nodes.Circle038_3.geometry} material={materials['BackGrey.001']} />
        <mesh geometry={nodes.Circle038_4.geometry} material={materials['Rubber.001']} />
        <mesh
          geometry={nodes.AntennaLineTop001.geometry}
          material={nodes.AntennaLineTop001.material}
          position={[0, 0.02, 0]}
        />
        <mesh
          geometry={nodes.AntennaLineBottom001.geometry}
          material={nodes.AntennaLineBottom001.material}
          position={[0, -2.68, 0]}
        />
        <mesh
          geometry={nodes.AppleLogo001.geometry}
          material={materials['AppleLogo.001']}
          position={[0.17, 0.52, -0.08]}
        />
        <mesh
          geometry={nodes.BackCameraBottomLens001.geometry}
          material={nodes.BackCameraBottomLens001.material}
          position={[0.7, 0.88, -0.08]}
        />
        <mesh
          geometry={nodes.BackCameraBottomGreyRing001.geometry}
          material={nodes.BackCameraBottomGreyRing001.material}
          position={[0.7, 0.88, -0.09]}
        />
        <mesh
          geometry={nodes.BackCameraTopLens001.geometry}
          material={nodes.BackCameraTopLens001.material}
          position={[0.7, 1.18, -0.08]}
        />
        <mesh
          geometry={nodes.BackCameraP1001.geometry}
          material={materials['Black.015']}
          position={[0.7, 1.03, -0.09]}
        />
        <mesh
          geometry={nodes.FrontSpeakerBG001.geometry}
          material={materials['FrontSpeaker.001']}
          position={[0.16, 1.32, 0.08]}
        />
        <mesh
          geometry={nodes.FrontCameraContainer001.geometry}
          material={materials['FrontCameraBlack.002']}
          position={[0.34, 1.32, 0.08]}
        />
        <mesh
          geometry={nodes.CameraBump001.geometry}
          material={nodes.CameraBump001.material}
          position={[0.7, 1.04, -0.08]}
        />
        <mesh
          geometry={nodes.MuteSwitch001.geometry}
          material={nodes.MuteSwitch001.material}
          position={[-0.65, 0.92, 0.01]}
        />
        <mesh
          geometry={nodes.iPhoneLogo001.geometry}
          material={materials['iPhoneLogo.001']}
          position={[0.2, -1.18, -0.08]}
        />
        <mesh
          geometry={nodes.BackCameraTopGreyRing001.geometry}
          material={nodes.BackCameraTopGreyRing001.material}
          position={[0.7, 1.18, -0.09]}
        />
        <group position={[0.98, -0.04, 0]}>
          <mesh geometry={nodes.Circle031.geometry} material={materials['Black.014']} />
          <mesh geometry={nodes.Circle031_1.geometry} material={nodes.Circle031_1.material} />
        </group>
        <mesh
          geometry={nodes.VolumeButtons001.geometry}
          material={nodes.VolumeButtons001.material}
          position={[-0.66, 0.21, 0]}
        />
        <group position={[0.97, 0.56, 0]}>
          <mesh geometry={nodes.Circle032.geometry} material={nodes.Circle032.material} />
          <mesh geometry={nodes.Circle032_1.geometry} material={nodes.Circle032_1.material} />
        </group>
        <mesh geometry={nodes.SCREEN.geometry}>
          <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}
