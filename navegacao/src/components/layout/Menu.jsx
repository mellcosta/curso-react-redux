import React, {Component} from "react"

import { Aside, List, Nav, Ul } from "../../style"
import { Link } from 'react-router-dom'

const Menu = props => (
  <Aside>
    <Nav>
      <Ul>
        <List>
            <Link to="/" className="Link">Home</Link>
        </List>
        <List>
          <Link to="/about" className="Link">Sobre</Link>
        </List>
        <List>
          <Link to="/param/123" className="Link">Param #1</Link>
        </List>
        <List>
          <Link to="/param/String" className="Link">Param #2</Link>
        </List>
        <List>
          <Link to="/naoExiste" className="Link">Não Existe</Link>
        </List>
      </Ul>
    </Nav>
  </Aside>
)

export default Menu