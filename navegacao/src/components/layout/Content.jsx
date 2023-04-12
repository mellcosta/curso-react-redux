import React, {Component} from "react"
import { Routes, Route } from 'react-router-dom'

import { Main } from "../../style"
import About from "../../views/examples/About"
import Home from "../../views/examples/Home"
import Param from "../../views/examples/Param"
import NotFound from "../../views/examples/NotFound"

const Content = props => (
  <Main>
    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/about" element= {<About/>}/>
      <Route path="/param/:id" element= {<Param />}/>
      <Route path="*" element= {<NotFound/>}/>
    </Routes>
  </Main>
)

export default Content