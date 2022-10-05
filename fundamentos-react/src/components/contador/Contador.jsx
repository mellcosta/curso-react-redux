import './Contador.css'
import React, {Component} from 'react'

import Contador2 from './Contador2'

class Contador extends Component {

     /* First */    
     state = {
        first : this.props.primeiroNumero,
    }

    /*Incrementando o valor do contador */

    dec = () => {
        this.setState({
            first: this.state.first - 10
        })
    }
    inc() {
        this.setState({
            first: this.state.first + 10
        })
    }

    /* 
    constructor(props) {
        super(props)

        this.state = {
            first : props.primeiroNumero
        }
    }
    */
    render(){
        return(
            <div className='containerContador'>
                <table>
                    <thead>
                        <tr>
                            <th>Contador 1</th>
                            <th>Contador 2</th>
                        </tr>
                    </thead>
                            
                    <tbody>
                        <tr>
                            <td>
                                <p>Valor Inicial: <strong>{this.props.numeroInicial}</strong>  </p>
                                <p>Primeiro Valor: <strong>{this.state.first}</strong>  </p>

                                <button onClick={this.dec} className='dec'> - </button>

                                <button onClick={_ => this.inc()} className='inc'> + </button>
                            </td>
                            <td>
                                <Contador2 className='contador2'
                                numeroInicial={0} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Contador
