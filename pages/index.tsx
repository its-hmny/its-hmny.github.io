import { Modal, Progress } from '@nextui-org/react';
import { OrbitControls, useProgress } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import type { NextPage } from 'next';
import { useCallback, useState } from 'react';
import { Avatar, Computer, Document, Email } from '../components/Models';
import { Sections } from '../schema/constant';
import type { Section } from '../schema/types';

const Styles = {
  Canvas: { height: '100vh' },
};

const Home: NextPage = () => {
  // Keeps track of the 3D models' loading progress
  const isModelLoading = useProgress();

  // Internal state that keep track of the react-three-fiber canvas initialization
  const [isCanvasInit, setCanvasInit] = useState(false);
  // Internal state that keeps track of the choice/interaction made by the user
  const [details, setDetails] = useState<Section | null>(null);

  // Returns an handler for the specified section (see function currying)
  const onSectionChosen = useCallback((id: string) => {
    const section = Sections.find(s => s.title === id);
    return () => setDetails(section ?? null);
  }, []);

  return (
    <>
      <Canvas
        style={Styles.Canvas}
        onCreated={() => setCanvasInit(true)}
        camera={{ fov: 75, near: 0.1, far: 1000, position: [2, 1, 200] }}
      >
        {/* General lighting */}
        <ambientLight />
        {/* For shadowing purposes */}
        <pointLight position={[10, 10, 10]} />
        {/* Simply allows to "navigate" the canvas */}
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

        {/* Icons Models */}
        <Document position={[-70, 70, 0]} onModelClick={onSectionChosen('Blog')} />
        <Email position={[1, 1, -35]} onModelClick={onSectionChosen('Contacts')} />
        <Avatar position={[80, 35, 35]} onModelClick={onSectionChosen('About Me')} />
        <Computer position={[-50, -50, 43]} onModelClick={onSectionChosen('Projects')} />
      </Canvas>

      {/* Loading modal, show spinner while 3D Models/Icon and canvas loads */}
      <Modal open={!isCanvasInit && isModelLoading.progress < 100}>
        <Progress
          size="xl"
          indeterminated={!isCanvasInit}
          value={isModelLoading.progress}
        />
      </Modal>

      {/* Displays current section details with the scaffold of choice  */}
      {!!details && (
        <details.scaffold {...details} onClose={() => setDetails(null)}>
          <details.content />
        </details.scaffold>
      )}
    </>
  );
};

export default Home;
