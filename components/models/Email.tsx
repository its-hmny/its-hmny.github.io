import { useFBX } from '@react-three/drei';

import type { Model3DProps } from '../../schema/types';

const Email = ({ position, onModelClick }: Model3DProps) => {
  // Helper hook to load and parse the .fbx 3D model
  const EmailFBX = useFBX(`${window.location.origin}/3d-models/message.fbx`);

  // Renders a downscaled version of the loaded FBX model
  return <primitive scale={0.25} position={position} object={EmailFBX} onClick={onModelClick} />;
};

export default Email;
