import { Button, Grid, Text } from '@nextui-org/react';
import type { NextPage } from 'next';
import { useCallback, useState } from 'react';

import Drawer from '../components/Drawer';
import { Sections } from '../schema/constant';
import { Section } from '../schema/types';

const Styles = { Page: { h: '100vh', fd: 'column', ai: 'center', gap: 30 } };

const Home: NextPage = () => {
  // Internal state that keeps track of the choice/interaction made by the user
  const [details, setDetails] = useState<Section | null>(null);

  // Returns an handler for the specified section (see function currying)
  const onSectionChosen = useCallback((id: string) => {
    const section = Sections.find(s => s.title === id);
    return () => setDetails(section ?? null);
  }, []);

  return (
    <>
      <Grid.Container css={Styles.Page}>
        <Text h1> Welcome to my new homepage</Text>

        <Grid>
          <Button onClick={onSectionChosen('Mock 1')}>Blog</Button>
        </Grid>
        <Grid>
          <Button onClick={onSectionChosen('Mock 2')}>Projects</Button>
        </Grid>
        <Grid>
          <Button onClick={onSectionChosen('Mock 3')}>Contacts</Button>
        </Grid>
        <Grid>
          <Button onClick={onSectionChosen('Mock 4')}>About me</Button>
        </Grid>
      </Grid.Container>

      {/* Drawer that displays current section details */}
      {!!details && <Drawer {...details} onClose={() => setDetails(null)} />}
    </>
  );
};

export default Home;
