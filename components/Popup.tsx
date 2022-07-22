import { Grid, Modal, Text } from '@nextui-org/react';
import type { ScaffoldProps } from '../schema/types';

const Styles = {
  // Basic styling for the title and subtitle <Text /> components
  Text: { textAlign: 'start' },
};

const Popup = ({ title, subtitle, onClose, children }: ScaffoldProps) => {
  return (
    <Modal closeButton open width="40%" onClose={onClose}>
      {/* Modal Header with title and subtitle */}
      <Modal.Header>
        <Grid.Container>
          <Grid xs={12} css={Styles.Text}>
            <Text h3>{title}</Text>
          </Grid>
          <Grid xs={12} css={Styles.Text}>
            <Text>{subtitle}</Text>
          </Grid>
        </Grid.Container>
      </Modal.Header>

      {/* Modal dynamic content */}
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default Popup;
