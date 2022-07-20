import { Collapse, Grid, Link, Text } from '@nextui-org/react';
import { Repository } from '../schema/types';

type DetailProps = { repository: Repository };

export const RepositoryDetails = ({ repository }: DetailProps) => {
  return (
    <Collapse title={repository.name} subtitle={repository.description}>
      <Grid.Container alignItems="center" justify="space-evenly" wrap="wrap">
        <Grid xs={6}>
          <Text>
            Language:&nbsp;<code>{repository.language}</code>
          </Text>
        </Grid>
        <Grid xs={6}>
          <Text>
            License:&nbsp;<code>{repository.license}</code>
          </Text>
        </Grid>
        <Grid xs={6}>
          <Text>
            Commit:&nbsp;<code>{repository.n_commit}</code>
          </Text>
        </Grid>
        <Grid xs={6}>
          <Text>
            Tags:&nbsp; <code>{repository.tags.join(', ')}</code>
          </Text>
        </Grid>
        <Grid xs={12}>
          <Link href={repository.url}>View on GitHub</Link>
        </Grid>
      </Grid.Container>
    </Collapse>
  );
};

type ListProps = { repos: Array<Repository> };

export const RepositoriesList = ({ repos }: ListProps) => {
  return (
    <Collapse.Group splitted>
      {repos.map(repo => (
        <RepositoryDetails repository={repo} />
      ))}
    </Collapse.Group>
  );
};
