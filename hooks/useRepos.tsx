import useSWR from 'swr';

import { Repository } from '../schema/types';

const useRepos = () => {
  // TODO Move to shared configurations (<SWRConfig /> provider)
  const fetcher = (url: string) => fetch(url).then(res => res.json());

  const { data, error } = useSWR<Repository[]>(
    'https://api.github.com/users/its-hmny/repos?sort=updated&per_page=5',
    fetcher
  );

  return [data, !data && !error, error] as const;
};

export default useRepos;
