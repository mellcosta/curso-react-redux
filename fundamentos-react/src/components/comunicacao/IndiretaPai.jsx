import React, {useState} from 'react'

import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [nome, setNome] = useState('X')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    const fornecerInformacoes = (nome, idade, nerd) => {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return(
        <div>
            <div>
                <h2>Pai</h2>
                <div style={{
                    borderBottom: '3px solid #999',
                    color:'#ff998c',
                    font: '22px Bold'
                }}>
                    <span> {nome} </span>
                    <span><strong> {idade} </strong></span>
                    <span> {nerd ? 'verdadeiro' : 'falso'} </span>
                </div>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}