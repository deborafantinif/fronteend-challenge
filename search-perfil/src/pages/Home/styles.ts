import styled from "styled-components";

export const Home = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: auto;
  height: 100vh;

  h1 {
    font-weight: 200;
    font-style: italic;
    color: #3B4252;
  }
`

export const Search = styled.div`
  padding: 5px;

  input {
    width: 350px;
    background-color: #FAFBFC;
    border: 1px solid #3B4252;
    border-radius: 4px;
    box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    list-style: none;
    padding: 10px 16px;
    position: relative;
    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  }

  input:hover {
    background-color: #F3F4F6;
    text-decoration: none;
    transition-duration: 0.1s;
  }

  button {
    margin-left: 10px;
    backface-visibility: hidden;
    background-color: #3B4252;
    border-radius: 6px;
    border-width: 0;
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
    box-sizing: border-box;
    color: #fff;
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

  span {
    padding-left: 5px;
  }

  button:hover {
    background-color: #1D2129;
  }

  button:focus {
    box-shadow: #626774 0 0 0 1px inset, #757A85 0 6px 15px 0, #898D97 0 2px 2px 0, #B0B3B9 0 0 0 4px;
  }
`

export const Alert = styled.div`
  display: flex;
  color: red;
  margin: 20px;
  padding: 5px;
  border: 1px solid red;
  border-radius: 4px;
`