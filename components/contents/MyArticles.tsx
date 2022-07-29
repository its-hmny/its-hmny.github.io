import { Collapse, Grid, Link, Text, Tooltip } from '@nextui-org/react';
import { Medium } from 'grommet-icons';

import { Articles as MockArticles } from '../../schema/constant';
import { Article } from '../../schema/types';
import t from '../../public/translations.json';

const Styles = {
  // One more thant '--nextui-zIndices-max' variable (equal to 999)
  Tooltip: { zIndex: 10000 },
};

// Based on the Repository data generates an Header-like component
const ArticleHeader = ({ title, url }: Article) => (
  <Grid.Container gap={1}>
    <Tooltip hideArrow content={t.components.my_article.tooltip} css={Styles.Tooltip}>
      <Link target="_blank" href={url}>
        <Medium color="white" />
      </Link>
    </Tooltip>
    &nbsp; &nbsp;
    <Text h5>{title}</Text>
  </Grid.Container>
);

const MyArticles = () => {
  // TODO Remove MockArticles and add data fetching from Medium.

  return (
    <Collapse.Group splitted>
      {MockArticles.map(post => (
        <Collapse key={post.url} title={<ArticleHeader {...post} />} subtitle={post.subtitle}>
          <Text>{post.content}</Text>
        </Collapse>
      ))}
    </Collapse.Group>
  );
};

export default MyArticles;
