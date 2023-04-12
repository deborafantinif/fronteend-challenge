import moment from "moment"
import { Star } from "phosphor-react";
import * as S from "./styles";

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
    <S.Repository href={info.html_url} target="_blank">
      <h3>{info.name}</h3>
      <p>{info.description}</p>
      <S.Numbers>
        <Star size={18} />
        <p>{info.stargazers_count} stars </p>
        <span></span>
        <p>{moment(info.updated_at).fromNow()}</p>
      </S.Numbers>
    </S.Repository>
  );
}

export default Repository;