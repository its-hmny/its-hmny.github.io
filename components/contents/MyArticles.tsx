import { Collapse, Grid, Link, Loading, Text, Tooltip } from '@nextui-org/react';
import { Medium } from 'grommet-icons';

import useArticles from '../../hooks/useArticles';
import t from '../../public/translations.json';
import { Article } from '../../schema/types';

const Styles = {
  // One more thant '--nextui-zIndices-max' variable (equal to 999)
  Tooltip: { zIndex: 10000 },
  // Repository's topic/tags in <RepoDetails /> are spaced between them
  Tag: { margin: '0.1em' },
};

// Based on the Repository data generates an Header-like component
const ArticleHeader = ({ title, url }: Article) => (
  <Grid.Container gap={1}>
    <Tooltip hideArrow content={t.components.my_articles.tooltip} css={Styles.Tooltip}>
      <Link target="_blank" href={url}>
        <Medium color="white" />
      </Link>
    </Tooltip>
    &nbsp; &nbsp;
    <Text h5>{title}</Text>
  </Grid.Container>
);

// Based on the Article data generates an article's detail component
const ArticleStats = ({ reading_time_minutes, published_at, tag_list }: Article) => (
  <Grid.Container alignItems="center" justify="space-evenly" gap={1}>
    {/* Main programming language Container */}
    <Grid xs={6}>
      {t.components.my_articles.published_at}&nbsp;
      <code>{new Date(published_at).toLocaleDateString()}</code>
    </Grid>
    {/* License Container */}
    <Grid xs={6}>
      {t.components.my_articles.reading_time}&nbsp;
      <code>{`${reading_time_minutes} minutes`}</code>
    </Grid>
    {/* Repository tags and topics */}
    <Grid xs={12}>
      {t.components.my_articles.tags}&nbsp;
      <Grid.Container xs={12} wrap="wrap">
        {tag_list.map(tag => (
          <code key={tag} style={Styles.Tag}>
            {tag}
          </code>
        ))}
      </Grid.Container>
    </Grid>
  </Grid.Container>
);

const MyArticles = () => {
  // Fetches the published articles via custom hook
  const [articles, loading, error] = useArticles();

  // Shows loading spinner when data is not yet available
  if (loading) return <Loading type="points" size="xl" />;

  // Shows error text if fetch to GitHub API fails
  if (articles === undefined || !!error)
    return (
      <Text h4 blockquote color="error" style={{ textAlign: 'center' }}>
        {t.components.my_articles.api_error}
      </Text>
    );

  return (
    <Collapse.Group splitted>
      {articles.map(art => (
        <Collapse key={art.url} title={<ArticleHeader {...art} />} subtitle={art.description}>
          <ArticleStats {...art} />
        </Collapse>
      ))}
    </Collapse.Group>
  );
};

export default MyArticles;
