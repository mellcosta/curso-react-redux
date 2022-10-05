import React from 'react'

import './index.css'
import './App.css'
import './components/layout/Card.css'
import Card from './components/layout/Card'

import Contador2 from './components/contador/Contador2'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basics/Familia'
import FamiliaMembro from './components/basics/FamiliaMembro'
import  Aleatorio from './components/basics/Aleatorio'
import Fragmento from "./components/basics/Fragmento"
import ComParametro from './components/basics/ComParametro'
import Primeiro from "./components/basics/Primeiro"


/**Practice */
import Practice from './components/practice/Practice'
import Valor from './components/practice/Valor'

export default () => {
    return (
        <div className="app">
            <h1>Fundamentos do React🌈</h1>
            <div className="AllCards">

                <Card titulo="  # Practice #" color="#999">
                    <Practice min="0" max="500"  >
                        <Valor/>
                    </Practice>
                </Card>

                <Card titulo="#12 - Contador" color="#a000fa" className='contador'>
                    <Contador numeroInicial = {0} 
                              primeiroNumero = {10}/>
                </Card>

                <Card titulo="#11 - Componente Controlado (Input)" color="#000">
                    <Input/>
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color="#ff4009">
                    <IndiretaPai/>
                </Card>

                <Card titulo="#09 - Comunicação Direta" color="#063">
                    <DiretaPai/>
                </Card>

                <Card titulo="#08 - Renderização Condicional" color="#0000ff" >
                    <ParOuImpar numero= {4}/>
                    <UsuarioInfo usuario =  {{ nome:'Joaquim'}} />
                    <UsuarioInfo usuario =  {{ email:'Joa2gmail'}} />
                    <UsuarioInfo usuario =  {{}} />
                    <UsuarioInfo/>
                </Card>

                <Card titulo="#07 - Desafio Repetição" color="#e000fc">
                    <TabelaProdutos/>
                </Card>

                <Card titulo="#06 - Repetição" color="#fee500">
                    <ListaAlunos/>
                </Card>

                <Card titulo="#05 - Componente Filho" color="#ff0000">
                    <Familia sobrenome="Costa">
                        <FamiliaMembro nome="Juliana"/>
                        <FamiliaMembro nome="Rosa"/>
                        <FamiliaMembro nome="Kersey"/>
                        <FamiliaMembro nome="Enock"/>
                        <FamiliaMembro nome="Newton"/>
                        <FamiliaMembro nome="Melissa"/>
                    </Familia>
                </Card>

                <Card titulo="#04 - Aleatório" color="#499">
                    <Aleatorio min={1} max={100}/>
                </Card>

                <Card titulo="#03 - React Fragment" color="#fa6900">
                    <Fragmento color="908">
                        Testando
                    </Fragmento>
                </Card>

                <Card titulo="#02 - Componente Com Propriedade" color="#a4f71a">
                    <ComParametro
                        titulo="Situação do Aluno"
                        aluno="Pedro Silva"
                        nota={5.6}/>
                </Card>

                <Card titulo="#01 - Primeiro Componente" color="#e94c6f">
                    <Primeiro> </Primeiro>
                </Card>
            </div>
        </div>
    )
};

/*

------Formas de representar as Funções-----

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
