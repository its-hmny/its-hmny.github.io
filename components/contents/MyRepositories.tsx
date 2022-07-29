import { Collapse, Grid, Link, Text, Tooltip } from '@nextui-org/react';
import { Github } from 'grommet-icons';

import t from '../../public/translations.json';
import { Repositories as MockRepos } from '../../schema/constant';
import { Repository } from '../../schema/types';

const Styles = {
  // One more thant '--nextui-zIndices-max' variable (equal to 999)
  Tooltip: { zIndex: 10000 },
};

// Based on the Repository data generates an Header-like component
const RepoHeader = ({ name, url }: Repository) => (
  <Grid.Container gap={1}>
    <Tooltip hideArrow content={t.components.my_repos.tooltip} css={Styles.Tooltip}>
      <Link target="_blank" href={url}>
        <Github color="white" />
      </Link>
    </Tooltip>
    &nbsp; &nbsp;
    <Text h5>{name}</Text>
  </Grid.Container>
);

// Based on the Repository data generates an details component with additional infos
const RepoDetails = ({ language, license, n_commit, tags }: Repository) => (
  <Grid.Container alignItems="center" justify="space-evenly">
    <Grid xs={6}>
      Language:&nbsp;<code>{language}</code>
    </Grid>
    <Grid xs={6}>
      License:&nbsp;<code>{license}</code>
    </Grid>
    <Grid xs={6}>
      Commit:&nbsp;<code>{n_commit}</code>
    </Grid>
    <Grid xs={6}>
      Tags:&nbsp;<code>{tags.join(', ')}</code>
    </Grid>
  </Grid.Container>
);

const MyRepositories = () => {
  // TODO Remove MockRepos and add data fetching from GitHub.

  return (
    <Collapse.Group splitted>
      {MockRepos.map(repo => (
        <Collapse key={repo.name} title={<RepoHeader {...repo} />} subtitle={repo.description}>
          <RepoDetails {...repo} />
        </Collapse>
      ))}
    </Collapse.Group>
  );
};

export default MyRepositories;
