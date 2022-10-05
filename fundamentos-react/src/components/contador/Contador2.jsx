import React from 'react'

import Display from './Display'
import PassoForm from './PassoForm'
import Button from './Button'

export default class Contador2 extends React.Component {

    state = {
        number: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.passo
        })
    }

    inc = () => {
       this.setState({
        number:  this.state.number + this.state.passo
       })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render(){
        return(
            <div>
                <Display number = {this.state.number}/>
                <PassoForm passo = {this.state.passo} setPasso = {this.setPasso} />
                <Button setInc = {this.inc} setDec = {this.dec} />
            </div>
        )
    }
}