import styled from "styled-components";

export const Display = styled.div `
  grid-column: span 4;
  background-color: #0004;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  font-size: 2.2em;
  overflow: hidden;
`;

export const Button = styled.button `
 font-size: 1.5em;
 font-weight: bold;
 border: 1px solid #bbb;

 &:active {
  background-color: #ccc;
  border: none;
 }
`;


