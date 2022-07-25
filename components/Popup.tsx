import { Grid, Modal, Text } from '@nextui-org/react';

import type { ScaffoldProps } from '../schema/types';

// TODO Add responsive CSS rules
const Styles = {
  // Basic styling for the title and subtitle <Text /> components
  Subtitle: { color: '$accents8', textAlign: 'start' },
};

const Popup = ({ title, subtitle, onClose, children }: ScaffoldProps) => {
  return (
    <Modal closeButton open width="40%" onClose={onClose}>
      {/* Popup Header */}
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

      {/* Popup dynamic content */}
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default Popup;
