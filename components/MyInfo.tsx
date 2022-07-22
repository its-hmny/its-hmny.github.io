import { Button } from '@nextui-org/react';
import { DocumentPdf } from 'grommet-icons';

const Styles = {
  Button: { w: '20em', margin: 'auto' },
};

// TODO: Enrich this section
const MyInfo = () => (
  <Button
    css={Styles.Button}
    icon={<DocumentPdf color="white" />}
    onClick={() => window.open('/Resume.pdf')}
  >
    Download Resume
  </Button>
);

export default MyInfo;
