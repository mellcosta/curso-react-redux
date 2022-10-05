import React from 'react'

export default props => {
    const cb = props.quandoClicar
    const gerarNerd = () => Math.random() > 0.5
    
    function gerarIdade() {
        return(
        parseInt( Math.random() * (20)) + 50  
        ) 
    }

    return(
        <div>
            <h2>Filho</h2>
            <button 
            onClick={_ => cb('Bluey', gerarIdade(), gerarNerd() )} 
            style={{
                background: '#ff4009',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                padding: '12px',
                font: '15px Bold'
            }}>
                Fornecer Informações
            </button>
        </div>
    )
}