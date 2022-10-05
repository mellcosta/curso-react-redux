import React from 'react'

export default props => {
    return(
        <div>
            <span>O  {props.nome} tem</span>
            <strong> {props.idade} </strong>anos
            e <strong> {props.nerd ? 'é nerd' : 'não é nerd'}</strong>
            
        </div>
    )
}