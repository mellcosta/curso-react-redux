import React, {Component} from "react"
import { useParams } from 'react-router-dom'

import { Span, Title, Text } from "../../style"

const Param = props => {
  const {id} = useParams ()
    return (
      <Span>
        <Title>Param</Title>
        <Text>{id}</Text>
      </Span>
    )
  }

export default Param