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

 &:active {
  background-color: #999;
  border: none;
 }
`;

export const double = styled(Button) `
  grid-column: span 2;
`;

export const triple = styled(Button) `
  grid-column: span 3;
`;

export const operation = styled(Button) `
  background-color: #fa8231;
  color: #fff;

  &:active {
    background-color: #fa8231cc;
  }
`;
