
import styled from "styled-components";

export const Div = styled.div `
  display: flex;
  height: 100vh;
  font-size: 1em;
`
export const Span = styled.div `
display: flex;
flex-direction: column;
`
export const Main = styled.main `
  display: flex ;
  flex-direction: column;
  flex-grow: 1;
  background-color: #cde;
  padding: 30px;
`
export const Aside = styled.aside `
  display: flex;
  flex-basis: 250px;

  background-color: #2192fc;
`
export const Title = styled.h1 `
  font-size: 3em;
`
export const Text = styled.p `
  font-size: 1.5em;
`
export const Nav = styled.nav `
flex: 1;
`
export const Ul = styled.ul `
 list-style: none;
 padding: 0;
`
export const List = styled.li `
  display: flex;
`
export const A = styled.a `
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  padding: 10px;
  margin-bottom: 10px;
  flex: 1;

  &:hover{
    background-color: #0070fa;
}
`

