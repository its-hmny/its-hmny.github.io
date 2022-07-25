import { Collapse, Text } from '@nextui-org/react';

import { Articles as MockArticles } from '../../schema/constant';

const MyArticles = () => {
  // TODO Remove MockArticles and add data fetching from Medium.

  return (
    <Collapse.Group splitted>
      {MockArticles.map(article => (
        <Collapse key={article.url} title={article.title} subtitle={article.subtitle}>
          <Text h4>{article.content}</Text>
        </Collapse>
      ))}
    </Collapse.Group>
  );
};

export default MyArticles;
