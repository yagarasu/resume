import axios from 'axios';

const GITHUB_BASE_URL = 'https://api.github.com';

const client = axios.create({
  baseURL: GITHUB_BASE_URL,
  headers: {
    'Accept': 'application/vnd.github+json',
  }
});

export function getReposFromUser(user: string) {
  return client.get(`/users/${user}/repos`);
}
