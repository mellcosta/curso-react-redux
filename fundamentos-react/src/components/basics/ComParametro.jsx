import React from 'react'

const ComParametro = (props) =>{
    const status = props.nota >= 5 ? 'Aprovado' : 'Reprovado';
    //1.7
    const notaInteira = Math.ceil(props.nota);
    return(
        <div>
            <h2>Componente Com Parâmetro</h2>
            <h3>{props.titulo}</h3>
            <p> <strong>{props.aluno}</strong>  teve nota {props.nota} ( arrendondando {notaInteira}) e foi {status}</p>
        </div>
    )
}
export default ComParametro;
