import axios from "axios";

export async function getReposUser(username: string) {
  const repos = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=100`)
    .then(data => data.data)
    .catch(() => false)
  return repos
};