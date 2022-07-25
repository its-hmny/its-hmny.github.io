import { useFBX } from '@react-three/drei';

import type { Model3DProps } from '../../schema/types';

const Avatar = ({ position, onModelClick }: Model3DProps) => {
  // Helper hook to load and parse the .fbx 3D model
  const AvatarFBX = useFBX(`${window.location.origin}/3d-models/boy.fbx`);

  // Renders a downscaled version of the loaded FBX model
  return <primitive scale={0.25} position={position} object={AvatarFBX} onClick={onModelClick} />;
};

export default Avatar;
