import React,{Component} from "react"
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from "../components/layout/Menu"
import Content from "../components/layout/Content"
import { Div } from "../style"

const App = props => (
    <Div>
      <Router>
        <Menu />
        <Content />
      </Router>
    </Div>
)
  
export default App