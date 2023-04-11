import { useNavigate } from "react-router-dom";

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
    twitter_username: string
  }
}

function InfoUser({perfil}: InfoUserProps) {
  const navigate = useNavigate()

  return (
    <div>
    <img src={perfil.avatar_url} alt="avatar user" />
    <h2>{perfil.name}</h2>
    <h3>{perfil.login}</h3>
    <p>{perfil.bio}</p>
    <p>{perfil.followers} - {perfil.following}</p>
    <p>{perfil.company}</p>
    <p>{perfil.location}</p>
    <p>{perfil.email}</p>
    <a href={perfil.blog} target="_blank">site</a>
    <a href={`https://twitter.com/${perfil.twitter_username}`} target="_blank">{perfil.twitter_username}</a>
    <button onClick={() => navigate('/')}>
      VOLTAR
    </button>
  </div>
  );
}

export default InfoUser;