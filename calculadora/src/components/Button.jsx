import React, { Component } from "react";

import { Button} from "./Styled";

import './Button.css'

export default props => {
  let classes = 'button ' 
  classes += props.operation ? 'operation' : ''
  classes += props.triple ? 'triple' : ''
  classes += props.double ? 'double' : ''


  return (
    <Button 
    onClick={e => props.click(props.label)}
    className={classes} >
      {props.label}
    </Button>

  )
}