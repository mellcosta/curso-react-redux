import React from 'react'

import './components/layout/Card.css'
import Card from './components/layout/Card'

import  Aleatorio from './components/basics/Aleatorio'
import Fragmento from "./components/basics/Fragmento"
import ComParametro from './components/basics/ComParametro'
import Primeiro from "./components/basics/Primeiro"

export default () => {
    return (
        <div className="app">
            <h1>Fundamentos do React</h1>
            <div className="AllCards">
                <Card titulo="#04 - Aleatorio">
                    <Aleatorio min={1} max={100}/>,
                </Card>

                <Card titulo="#03 - React Fragment">
                <Fragmento />
                </Card>

                <Card titulo="#02 - Componente Com Propriedade">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro Silva"
                    nota={5.6}/>
                </Card>

                <Card titulo="#01 - Primeiro Componente">
                <Primeiro> </Primeiro>
                </Card>
            </div>
        </div>
    )
};

/*
export default function App () {
    return (
        <div>
            <h1>Formas reduzidas de representar uma function</h1>
        </div>
    )
}

---Arrow function----


export default () => {
    return (
        <div>
            <h1>Arrow Function</h1>
        </div>
    )
};

---Arrow function com parâmetros----

export default (app) => {
    return (
        <div>
            <h1>Arrow Function com Parâmetros</h1>
            <h2>export default <em>app</em> => </h2>
        </div>
    )
};


---Arrow function com parâmetro indefinido----


export default _ => 
        <div>
            <h1>Arrow Function com Parâmetros indefinido</h1>
            <h2>export default <em>_</em> => </h2>
            <p>Pode remover o return() e as chavetas</p>
        </div>

---Arrow function com parâmetro fora dos ()----


export default parametro => 
        <div>
            <h1>Arrow Function com Parâmetros fora dos ()</h1>
            <h2>export default <em> parametro</em> => </h2>
            <p>Pode remover o return() e as chavetas</p>
        </div>
*/
