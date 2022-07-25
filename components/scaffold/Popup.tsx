import { Grid, Modal, Text } from '@nextui-org/react';

import type { ScaffoldProps } from '../../schema/types';

// TODO Add responsive CSS rules
const Styles = {
  // Popup's general styling, floating and fixed on left side of the page
  Popup: { mw: '600px' },
  // Basic styling for the title and subtitle <Text /> components
  Subtitle: { color: '$accents8', textAlign: 'justify', whiteSpace: 'pre-line' },
};

const Popup = ({ title, subtitle, onClose, children }: ScaffoldProps) => {
  return (
    <Modal width="600px" closeButton open onClose={onClose} css={Styles.Popup}>
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
