import { useState } from "react";
import { getPerfilUser } from "../../utils/getPerfilUser";
import { useNavigate } from "react-router-dom";

function Home() {
  const[username, setUsername] = useState('')
  const navigate = useNavigate();

  async function handleButton() {
    const result = await getPerfilUser(username)
    if (result == false) {
      setUsername('')
      return alert('User not Found')
    }
    navigate(`/perfil/${username}`, {state: {perfil: result}})
  }
  return (
    <main>
      <h1>Search Devs</h1>
      <div>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
        <button onClick={handleButton}>
          Buscar
        </button>
      </div>
    </main>
  );
}

export default Home;