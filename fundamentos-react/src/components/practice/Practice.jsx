import React from 'react'

export default props => {

    const min = props.min
    const max = props.max
    const random = parseInt(Math.random(min)* max)
    const par = random % 2 === 0

    return (
        <div>
            <h2>Valores aleatórios</h2>
            <p>{props.children} mímimo: {min}</p>
            <p>{React.cloneElement(props.children)} máximo: {max}</p>

            <form>
                <span>Valor aleatório: </span>
                <button title='clique' > {random} </button>
            </form>
            <p>Classificação: { par ? <span>Par</span> : <span>Ímpar</span>}  </p>
        </div>
    )
}