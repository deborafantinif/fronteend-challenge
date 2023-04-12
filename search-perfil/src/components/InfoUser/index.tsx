import { Buildings, Envelope, HeartStraight, Link, MapPin, TwitterLogo, UsersThree } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

interface InfoUserProps {
  perfil: {
    avatar_url: string,
    name: string,
    login: string,
    bio: string,
    followers: number,
    following: number,
    company: string,
    location: string,
    email: string,
    blog: string,
    html_url: string,
    twitter_username: string
  }
}

function InfoUser({perfil}: InfoUserProps) {
  const navigate = useNavigate()

  return (
    <S.InfoUser>
      <img src={perfil.avatar_url} alt="avatar user" />
      <h2>{perfil.name}</h2>
      <a href={perfil.html_url} target="_blank">
        <h3>@{perfil.login}</h3>
      </a>
      <S.Bio>{perfil.bio}</S.Bio>
      <S.Numbers>
        <span>
          <UsersThree size={15} /> {perfil.followers} followers
        </span>
        <span>
          <HeartStraight size={15} /> {perfil.following} following
        </span>
      </S.Numbers>
      <S.Links>
        {
          perfil.company &&
          <p>
            <Buildings size={22} /> {perfil.company}
          </p>
        }
        {
          perfil.location &&
          <p>
            <MapPin size={20} /> {perfil.location}
          </p>
        }
        {
          perfil.email &&
          <p>
            <Envelope size={20} /> {perfil.email}
          </p>
        }
        {
          perfil.bio &&
          <a href={perfil.blog} target="_blank">
            <Link size={20} /> {perfil.blog}
          </a>
        }
        {
          perfil.twitter_username &&
          <a
            href={`https://twitter.com/${perfil.twitter_username}`}
            target="_blank"
          >
            <TwitterLogo size={20} /> @{perfil.twitter_username}
          </a>
        }
      </S.Links>
      <button onClick={() => navigate("/")}>VOLTAR</button>
    </S.InfoUser>
  );
}

export default InfoUser;