import { Grid, Modal, Text } from '@nextui-org/react';

import type { ScaffoldProps } from '../../schema/types';

// TODO Add responsive CSS rules
const Styles = {
  // Drawer's general styling, floating and fixed on left side of the page
  Container: { h: '97vh', mw: '35em', top: '1.5vh', right: '0.5em', position: 'fixed' },
  // Basic styling for the subtitle <Text /> components
  Subtitle: { color: '$accents8', textAlign: 'start' },
};

const Drawer = ({ title, subtitle, children, onClose }: ScaffoldProps) => (
  <Modal closeButton open width="40%" onClose={onClose} css={Styles.Container}>
    {/* Drawer Header */}
    <Modal.Header>
      <Grid.Container>
        {/* Drawer Header Title */}
        <Grid xs={12}>
          <Text h3>{title}</Text>
        </Grid>
        {/* Drawer Header Subtitle */}
        <Grid xs={12}>
          <Text css={Styles.Subtitle}>{subtitle}</Text>
        </Grid>
      </Grid.Container>
    </Modal.Header>

    {/* Drawer dynamic content */}
    <Modal.Body>{children}</Modal.Body>
  </Modal>
);

export default Drawer;
