import moment from "moment"

interface RepositoryProps {
  info: {
    name: string
    html_url: string
    description: string
    stargazers_count: number
    updated_at: string
  }
}
function Repository({info}: RepositoryProps) {
  return (
    <a href={info.html_url} target="_blank">
      <h3>{info.name}</h3>
      <p>{info.description}</p>
      <p>{info.stargazers_count}</p>
      <p>{moment(info.updated_at).fromNow()}</p>
    </a>
  );
}

export default Repository;