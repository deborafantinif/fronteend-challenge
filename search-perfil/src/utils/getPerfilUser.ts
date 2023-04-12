import axios from "axios";

export async function getPerfilUser(username: string) {
  const perfil = await axios.get(`https://api.github.com/users/${username}`)
    .then(data => data.data)
    .catch(() => false)
  return perfil
};