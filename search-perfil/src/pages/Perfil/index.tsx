import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import InfoUser from '../../components/InfoUser';
import Repository from '../../components/Repository';
import { getReposUser } from '../../utils/getReposUser';
import * as S from "./styles";

interface Repository {
  id: string
  name: string
  html_url: string
  description: string
  stargazers_count: number
  updated_at: string
}


function Perfil() {
  const location = useLocation()
  const {username} = useParams()
  const [repositories, setRepositories] = useState<Repository[] | []>([])
  const {perfil} = location.state

  useEffect(() => {
    async function getRepos() {
      if (username) {       
        const repos = await getReposUser(username)
        const sortedRepos = repos.sort((a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count)
        setRepositories(sortedRepos)
      }
    }
    getRepos()
  }, [])

  return (
    <S.Perfil>
      <InfoUser perfil={perfil}/>
      <S.Repositories>
      {
        repositories.length >= 0 ? repositories.map(repo => <Repository key={repo.id} info={repo}/>) : <div>
          Not public repositories exist.
        </div>
      }
      </S.Repositories>
    </S.Perfil>
  );
}

export default Perfil;