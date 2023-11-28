import Splashscreen from './components/Splashscreen.tsx';

import LandingSection from './views/LandingSection.tsx';
import ContactSection from './views/ContactSection.tsx';
import WorkSection from './views/WorkSection.tsx';

export default function App() {
  return (
    <Splashscreen>
      <LandingSection />
      <WorkSection />
      <ContactSection />
    </Splashscreen>
  );
}
