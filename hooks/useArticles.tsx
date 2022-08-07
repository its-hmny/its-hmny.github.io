import useSWR from 'swr';

import { APIs } from '../schema/constant';
import { Article } from '../schema/types';

const useArticles = () => {
  // Stringified query params with sorting and result limit
  // TODO: Make query param dynamic and passed as hook props? 
  // const query = new URLSearchParams({ username: 'its_hmny', per_page: '5' }).toString();
  const query = new URLSearchParams({ username: 'dailydevtips1', per_page: '5' }).toString();
  // Makes the request to the GitHub API
  const { data, error } = useSWR<Article[]>(`${APIs.DevTo}/articles/?${query}`);

  return [data, !data && !error, error] as const;
};

export default useArticles;
