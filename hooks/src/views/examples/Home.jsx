import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/src/styles/hljs';
    
const Home = (props) => { 
    const UseState = `import React, { useState } from 'react';

    function App() {
      const [contador, setContador] = useState(0);
    
      return (
        <div>
          <h1>{contador}</h1>
          <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
      );
    }
    `

    return(
        <div className="Home">
            <PageTitle
                title="Módulo Hooks"
                subtitle="Hooks são uma nova adição ao React 16.8." />

            <SectionTitle title="React Hooks"/>
            <p>
            O React é uma biblioteca JavaScript para criar interfaces de usuário. O uso de "hooks" é uma das principais características introduzidas a partir da versão 16.8, permitindo que os desenvolvedores usem recursos do React, como estado e ciclo de vida, em componentes funcionais.
            </p>

            <SectionTitle title="useState"/>
            <p>
            é um hook que permite a um componente de função definir e utilizar um estado local. Com useState, podemos definir um valor inicial e atualizá-lo durante a execução do componente. O useState retorna um array com duas posições: o primeiro é o estado atual e o segundo é uma função que atualiza esse estado.
            </p>
            <SyntaxHighlighter language="javascript" style={docco} className="code">
                {UseState}
            </SyntaxHighlighter>
        </div>
    )
}
export default Home