import useSWR from 'swr';

import { APIs } from '../schema/constant';
import { Repository } from '../schema/types';

const useRepos = () => {
  // Stringified query params with sorting and result limit
  // TODO: Make query param dynamic and passed as hook props?
  const query = new URLSearchParams({ sort: 'updated', per_page: '5' }).toString();
  // Makes the request to the GitHub API
  const { data, error } = useSWR<Repository[]>(`${APIs.GitHub}/users/its-hmny/repos?${query}`);

  return [data, !data && !error, error] as const;
};

export default useRepos;
