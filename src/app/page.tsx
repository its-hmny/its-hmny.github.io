'use client'

import ContactSection from '@hmny.dev/composite/ContactSection';
import LandingSection from '@hmny.dev/composite/LandingSection';
import WorkSection from '@hmny.dev/composite/WorkSection';
import Splashscreen from '@hmny.dev/ui/Splashscreen';

export default function Home() {
  return (
    <Splashscreen>
      <LandingSection />
      <WorkSection />
      <ContactSection />
    </Splashscreen>
  );
}
