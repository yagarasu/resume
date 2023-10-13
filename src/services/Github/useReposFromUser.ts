import { useQuery } from "react-query";
import { getReposFromUser } from ".";
import { GithubRepo } from "../../types/githubRepos";

function useReposFromUser(user: string) {
  return useQuery<{ data: GithubRepo[] }, Error>(
    ['reposFromUser', user],
    () => getReposFromUser(user),
    {
      refetchOnWindowFocus: false,
    }
  );
}

export default useReposFromUser;
