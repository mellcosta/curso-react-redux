import React from 'react'

export default props => {
    const number = props.numero
    const isPar = number % 2 === 0
    return(
        <div>
            <p>
                Usando o operador ternário como condicional, pode-se afirmar que o número 
                <strong> {number} </strong>  
                é
                {
                    isPar ? <strong> Par</strong> : <strong> Ímpar</strong>
                }
            </p>
        </div>
    )
}