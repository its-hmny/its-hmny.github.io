import Splashscreen from './components/Splashscreen.tsx';

import LandingSection from './views/LandingSection.tsx';
import SocialSection from './views/SocialMedia.tsx';
import WorkSection from './views/WorkSection.tsx';

export default function App() {
  return (
    <Splashscreen>
      <LandingSection />
      <WorkSection />
      <SocialSection />
    </Splashscreen>
  );
}
