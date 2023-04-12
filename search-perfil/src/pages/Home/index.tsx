import { useState } from "react";
import { getPerfilUser } from "../../utils/getPerfilUser";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { MagnifyingGlass, XCircle } from "phosphor-react";
import Alert from "../../components/Alert";

function Home() {
  const[username, setUsername] = useState('')
  const [isUserNotFound, setIsUserNotFound] = useState(false)
  const navigate = useNavigate();

  async function handleButton() {
    const result = await getPerfilUser(username)
    if (result == false) {
      setUsername('')
      return setIsUserNotFound(true)
    }
    navigate(`/perfil/${username}`, {state: {perfil: result}})
  }

  return (
    <S.Home>
      <h1>Search Devs</h1>
      <S.Search>
        <input type="text" value={username} placeholder='Type the username here...' onChange={e => setUsername(e.target.value)}/>
        <button onClick={handleButton}>
          <MagnifyingGlass size={12} />
          <span>Buscar</span>
        </button>
      </S.Search>
      {
        (isUserNotFound) ? 
          <S.Alert>
            <XCircle size={23} onClick={() => setIsUserNotFound(false)} />
            <p>User not found</p>
          </S.Alert>
          : null
      }
    </S.Home>
  );
}

export default Home;