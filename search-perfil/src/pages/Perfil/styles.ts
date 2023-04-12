import styled from "styled-components";

export const Perfil = styled.main`
  margin: 20px;
`

export const Repositories = styled.div`
  display: flex;
  margin-left: 28%;
  flex-direction: column;

  @media (max-width: 1100px) {
    margin-left: 32%;
  }

  @media (max-width: 500px) {
    width: 80%;
    margin: 5%;
  }
`

