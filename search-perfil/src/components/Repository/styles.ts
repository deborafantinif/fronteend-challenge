import styled from "styled-components";

export const Repository = styled.a`
  all: unset;
  cursor: pointer;
  color: #3B4252;
  padding: 20px 10px 10px 10px;
  border-bottom: 1px solid rgba(79, 114, 146, .15);

  :hover {
    color: #4F7292;
  }

  h3 {
    font-weight: 300;
    font-style: italic;
    font-size: 22px;
    margin-bottom: 5px;
  }
`

export const Numbers = styled.div`
  display: flex;
  padding-top: 10px;
  color: #4F7292;

  span {
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #4F7292;
    margin: 8px;
    line-height: 0.1;
  }
`