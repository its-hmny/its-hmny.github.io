import { Collapse, Text } from '@nextui-org/react';
import { Articles } from '../schema/constant';

const MyArticles = () => {
  return (
    <Collapse.Group splitted>
      {Articles.map(article => (
        <Collapse title={article.title} subtitle={article.subtitle}>
          <Text h4>{article.content}</Text>
        </Collapse>
      ))}
    </Collapse.Group>
  );
};

export default MyArticles;
