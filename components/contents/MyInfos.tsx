import { Button } from '@nextui-org/react';
import { DocumentPdf } from 'grommet-icons';
import { useCallback } from 'react';

// TODO: Check if it works in for responsive layouts
const Styles = {
  Button: { w: '20em', margin: 'auto' },
};

const MyInfos = () => {
  // Opens a new window/tab with the .pdf resume URL
  const onResumeOpen = useCallback(() => window.open('/Resume.pdf'), []);

  // TODO: Add more content to this section

  return (
    <Button onClick={onResumeOpen} icon={<DocumentPdf color="white" />} css={Styles.Button}>
      See Resume
    </Button>
  );
};

export default MyInfos;
