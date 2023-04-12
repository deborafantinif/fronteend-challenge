import styled from "styled-components";

export const InfoUser = styled.div`
  background-color: #3B4252;
  color: white;
  position: fixed;
  width: 22%;
  height: 95%;

  img {
    padding: 8% 20%;
    width: 100%;
  }

  h2 {
    font-weight: 300;
    font-style: italic;
    font-size: 30px;
    padding-left: 20px;
  }

  a {
    all: unset;
    cursor: pointer;
    color: white;
  }

  h3 {
    font-weight: 200;
    font-style: italic;
    font-size: 20px;
    padding-left: 20px;
  }

  button {
    margin: 0% 38% 4%;
    backface-visibility: hidden;
    background-color: white;
    border-radius: 6px;
    border-width: 0;
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
    box-sizing: border-box;
    color: #3B4252;
    cursor: pointer;
    font-size: 100%;
    height: 44px;
    line-height: 1.55;
    outline: none;
    overflow: hidden;
    padding: 0 20px;
    position: relative;
    text-align: center;
    text-transform: none;
    transform: translateZ(0);
    transition: all .2s,box-shadow .08s ease-in;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  button:hover {
    background-color: #1D2129;
  }

  button:focus {
    box-shadow: #626774 0 0 0 1px inset, #757A85 0 6px 15px 0, #898D97 0 2px 2px 0, #B0B3B9 0 0 0 4px;
  }
`

export const Bio = styled.p`
  color: #4F7292;
  padding: 6% 20px;
  font-weight: 600;
  font-size: 16px;
`

export const Numbers = styled.p`
  display: flex;
  width: 100%;
  justify-content: space-around;

  span {
    font-weight: 200;
  }
`

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6% 20px;
  font-weight: 300;
  line-height: 2;
`