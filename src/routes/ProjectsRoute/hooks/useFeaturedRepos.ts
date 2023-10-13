import { useMemo } from "react";
import { featuredRepos } from "../../../data/repos";
import useReposFromUser from "../../../services/Github/useReposFromUser";
import { GithubRepo } from "../../../types/githubRepos";

const USER = 'yagarasu'; // @todo: Move this to .env

function useFeaturedRepos() {
  const { data, ...rest } = useReposFromUser(USER);
  const filteredData: GithubRepo[] | undefined = useMemo(() => {
      const { data: repos } = data ?? { data: [] };
      return repos.filter((repo) => featuredRepos.includes(repo.name));
  }, [data]);
  return {
    ...rest,
    data: filteredData,
  }
}

export default useFeaturedRepos;
