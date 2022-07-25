import { Button, Grid } from '@nextui-org/react';
import { DocumentPdf, Github } from 'grommet-icons';
import { useCallback } from 'react';

const MyInfos = () => {
  // Opens a new window/tab with the .pdf resume URL
  const onResumeOpen = useCallback(() => window.open('/Resume.pdf'), []);

  // Opens a new window/tab with the GitHub profile URL
  const onGithubOpen = useCallback(() => window.open('https://www.github.com/its-hmny'), []);

  // TODO: Add more content to this section

  return (
    <Grid.Container justify="space-evenly">
      <Button onClick={onResumeOpen} icon={<DocumentPdf color="white" />}>
        Resume
      </Button>
      <Button onClick={onGithubOpen} icon={<Github color="white" />}>
        GitHub
      </Button>
    </Grid.Container>
  );
};

export default MyInfos;
