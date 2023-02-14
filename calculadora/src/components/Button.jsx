import React, { Component } from "react";

import { Button, double, triple, operation } from "./Styled";

export default props => 
  <Button onClick={e => props.click(props.label)}  >
    {props.label}
    {double}
  </Button>