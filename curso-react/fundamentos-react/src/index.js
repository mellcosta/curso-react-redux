/*
1.1 Exibindo String na Tela
----------------------------

import ReactDOM from 'react-dom'

const html = document.getElementById('root')

ReactDOM.render(
    'Olá React!',
    html
)
*/

/*
 1.2 Conhecendo JSX (tags em js)
 ----------------------------------

import ReactDOM from 'react-dom'
import React from 'react'

const tag = <strong>Olá React na Tag!</strong>

ReactDOM.render(
    <div>
        { tag }
    </div>,
    document.getElementById('root')
)
*/

/*
 1.3 Carregando CSS
 ------------------

import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

const html =  document.getElementById('root')

ReactDOM.render(
    <div class="container">
        <h1>Adicionando CSS</h1>
        <p>Para adicionar o Css há que criar o arquivo 'index.css' e importá-lo:
            <br/>
            <strong>import './index.css'</strong>
        </p>
    </div> ,
    html
)
*/

/*
1.4
1.5
Primeiro Componente
-----------------------

import Primeiro from "./components/basics/Primeiro";
import ReactDOM from 'react-dom'
import React from 'react'

ReactDOM.render (
    <div>
        <Primeiro> </Primeiro>
    </div>,

    document.getElementById ('root')
)
*/

/*
1.6 Componente Com Propriedade
1.7 Propriedades são somente leitura (não se alteram)


import './index.css'
import Parametros from 'react-dom'
import React from 'react'
import ComParametro from './components/basics/ComParametro'

Parametros.render(
    <div>
        <ComParametro
        titulo="Situação do Aluno"
        aluno="Pedro Silva"
        nota={5.6}/>
    </div> ,

    document.getElementById('root')
 )
*/

/*
1.8 React Fragment
Como tratar o erro : componente JSX adjacente?
usando o JSX fragment*


import "./index.css";
import Fragmento from "./components/basics/Fragmento";
import ReactDOM from "react-dom";
import React from "react";

ReactDOM.render(
  <div>
    <Fragmento />
  </div>,

  document.getElementById("root")
);
*/

/*
1.9 Componente App


import App from './App'

import ReactDOM from 'react-dom'
import React from 'react'

const Root = document.getElementById("root")

ReactDOM.render(
    <App></App>,

    Root
)
*/

/*
2.0 Desafio Número Aleatório
2.1 Desafio Número Aleatório: Resposta

import './components/basics/Aleatorio.css'
import  Aleatorio from './components/basics/Aleatorio'
import ReactDOM from 'react-dom'
import React from 'react'

const Root = document.getElementById("root")

ReactDOM.render (
    <Aleatorio min={1} max={100}/>,

    Root
)
*/

/*
2.2 Componente Card 

----#01-----
*/
import App from './App'


import ReactDOM from 'react-dom'
import Reat from 'react'

const Root = document.getElementById('root')

ReactDOM.render (
    <App titulo="Exemplo de card">

    </App>,

    Root
)
