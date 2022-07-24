import { useFBX } from '@react-three/drei';
import { Model3DProps } from '../schema/types';

// TODO add dynamic absolute URL (based on window.host (?))

export const Computer = ({ position, onModelClick }: Model3DProps) => {
  // Helper hook to load and parse the .fbx 3D model
  const ComputerFBX = useFBX('http://localhost:3000/3d-models/computer.fbx');

  return (
    <primitive
      scale={0.25}
      position={position}
      object={ComputerFBX}
      onClick={onModelClick}
    />
  );
};

export const Avatar = ({ position, onModelClick }: Model3DProps) => {
  // Helper hook to load and parse the .fbx 3D model
  const AvatarFBX = useFBX('http://localhost:3000/3d-models/boy.fbx');

  return (
    <primitive
      scale={0.25}
      position={position}
      object={AvatarFBX}
      onClick={onModelClick}
    />
  );
};

export const Document = ({ position, onModelClick }: Model3DProps) => {
  // Helper hook to load and parse the .fbx 3D model
  const DocumentFBX = useFBX('http://localhost:3000/3d-models/copy.fbx');

  return (
    <primitive
      scale={0.25}
      position={position}
      object={DocumentFBX}
      onClick={onModelClick}
    />
  );
};

export const Email = ({ position, onModelClick }: Model3DProps) => {
  // Helper hook to load and parse the .fbx 3D model
  const EmailFBX = useFBX('http://localhost:3000/3d-models/message.fbx');

  return (
    <primitive
      scale={0.25}
      position={position}
      object={EmailFBX}
      onClick={onModelClick}
    />
  );
};
