import { Collapse, Grid, Link, Loading, Text, Tooltip } from '@nextui-org/react';
import { Github } from 'grommet-icons';

import useRepos from '../../hooks/useRepos';
import t from '../../public/translations.json';
import { Repository } from '../../schema/types';

const Styles = {
  // One more thant '--nextui-zIndices-max' variable (equal to 999)
  Tooltip: { zIndex: 10000 },
  // Repository's topic/tags in <RepoDetails /> are spaced between them
  Tag: { margin: '0.1em' },
};

// Based on the Repository data generates an Header-like component
const RepoHeader = ({ name, html_url }: Repository) => (
  <Grid.Container gap={1}>
    {/* Toooltip + GitHub Icon + Link to GitHub repos' page */}
    <Tooltip hideArrow content={t.components.my_repos.tooltip} css={Styles.Tooltip}>
      <Link target="_blank" href={html_url}>
        <Github color="white" />
      </Link>
    </Tooltip>
    &nbsp; &nbsp;
    {/* Repository's name as title of the header */}
    <Text h5>{name}</Text>
  </Grid.Container>
);

// Based on the Repository data generates an details component with additional infos
const RepoDetails = ({ language, license, topics }: Repository) => (
  <Grid.Container alignItems="center" justify="space-evenly" gap={1}>
    {/* Main programming language Container */}
    <Grid xs={6}>
      {t.components.my_repos.language}&nbsp;
      <code>{language ?? 'Not available'}</code>
    </Grid>
    {/* License Container */}
    <Grid xs={6}>
      {t.components.my_repos.license}&nbsp;
      <code>{license?.spdx_id ?? 'Not licensed'}</code>
    </Grid>
    {/* Repository tags and topics */}
    <Grid xs={12}>
      {t.components.my_repos.tags}&nbsp;
      <Grid.Container xs={12} wrap="wrap">
        {topics.map(topic => (
          <code key={topic} style={Styles.Tag}>
            {topic}
          </code>
        ))}
      </Grid.Container>
    </Grid>
  </Grid.Container>
);

const MyRepositories = () => {
  // Fetches repository data via custom hook
  const [repositories, loading, error] = useRepos();

  // Shows loading spinner when data is not yet available
  if (loading) return <Loading type="points" size="xl" />;

  // Shows error text if fetch to GitHub API fails
  if (repositories === undefined || !!error)
    return (
      <Text h4 blockquote color="error" style={{ textAlign: 'center' }}>
        {t.components.my_repos.api_error}
      </Text>
    );

  // Default render (shows a <Collapse /> for eah repository)
  return (
    <Collapse.Group splitted>
      {repositories.map(repo => (
        <Collapse key={repo.name} title={<RepoHeader {...repo} />} subtitle={repo.description}>
          <RepoDetails {...repo} />
        </Collapse>
      ))}
    </Collapse.Group>
  );
};

export default MyRepositories;
