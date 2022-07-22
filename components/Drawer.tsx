import { Card, Grid, Text, useClickAway } from '@nextui-org/react';
import { Close } from 'grommet-icons';
import { useRef } from 'react';
import type { ScaffoldProps } from '../schema/types';

// TODO Add responsive CSS rules
const Style = {
  // Drawer's general styling
  Container: {
    p: '0px',
    h: '97vh',
    mw: '35em',
    zIndex: 5,
    top: '1.5vh',
    right: '0.5em',
    position: 'fixed',
  },

  // Drawer's subtitle styling
  Subtitle: { color: '$accents8' },
};

const Drawer = ({ title, subtitle, children, onClose }: ScaffoldProps) => {
  // Internal reference to the floating container/card
  const ref = useRef(null);

  // When the user clicks outside of the Drawer then we shall close it
  useClickAway(ref, onClose);

  return (
    <Card isHoverable ref={ref} css={Style.Container}>
      {/* Drawer Header */}
      <Card.Header>
        <Grid.Container gap={1}>
          {/* Drawer Header Title */}
          <Grid xs={12} direction="row" justify="space-between" alignItems="center">
            <Text h3>{title}</Text>
            <Close onClick={onClose} />
          </Grid>

          {/* Drawer Header Description */}
          <Grid xs={12}>
            <Text css={Style.Subtitle}>{subtitle}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>

      {/* Drawer Body (dynamic content) */}
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};

export default Drawer;
