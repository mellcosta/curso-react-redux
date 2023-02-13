import styled from "styled-components";

export const Div = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
`
export const Title = styled.h1 `
  font-size: 40px;
  font-weight: bold;
`
export const QtdeNumeros = styled.div `
  display: flex;
  flex-direction: column;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
export const Input = styled.input`
  width: 3em;
  padding: 2px;
  border-color: #00ccd6;
`
export const Button = styled.button`
  padding: 8px;
  margin-top: 10px;
  background-color: #00ccd6;
  color: white;
  border: none;
  border-radius: 5px;
`;
