import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import SyntaxHighlighter from 'react-syntax-highlighter';
import { paraisoDark } from 'react-syntax-highlighter/src/styles/hljs';
    
const Home = (props) => { 
    const UseState = `
        import React, { useState } from 'react';
        
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

    const UseEffect = `
        import React, { useState, useEffect } from 'react';

        function App() {
            const [usuarios, setUsuarios] = useState([]);
            
            useEffect(() => {
                fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(data => setUsuarios(data));
            }, []);
            
            return (
                <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.name}</li>
                ))}
                </ul>
            );
        }
    `
    
    const UseRef = `
        import React, { useRef } from 'react';

        function App() {
            const inputRef = useRef(null);
            
            function handleButtonClick() {
                inputRef.current.focus();
            }
            
            return (
                <div>
                <input type="text" ref={inputRef} />
                <button onClick={handleButtonClick}>Focar</button>
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
            <div className='center'>
                <p>
                O React é uma biblioteca JavaScript para criar interfaces de usuário. O uso de "hooks" é uma das principais características introduzidas a partir da versão 16.8, permitindo que os desenvolvedores usem recursos do React, como estado e ciclo de vida, em componentes funcionais.
                </p>
            </div>
            
            <SectionTitle title="1.useState"/>
            <div className='center'>
                <p>
                É um hook que permite a um componente de função definir e utilizar um estado local. Com useState, podemos definir um valor inicial e atualizá-lo durante a execução do componente. O useState retorna um array com duas posições: o primeiro é o estado atual e o segundo é uma função que atualiza esse estado.
                </p>
                <SyntaxHighlighter language="javascript" style={paraisoDark} className="code">
                    {UseState}
                </SyntaxHighlighter>
            </div>

            <SectionTitle title="2.useEffect"/>
            <div className='center'>
                <p>
                É um hook que permite que um componente de função realize efeitos colaterais, como acessar o DOM ou realizar chamadas de API. Com useEffect, podemos definir uma função que será executada após a renderização do componente, seja no momento da montagem ou atualização. O useEffect recebe duas posições: a primeira é uma função que realizará o efeito desejado e a segunda é um array de dependências, que indica as variáveis que, quando alteradas, disparam a execução da função.
                </p>
                <SyntaxHighlighter language="javascript" style={paraisoDark} className="code">
                    {UseEffect}
                </SyntaxHighlighter>
            </div>

            <SectionTitle title="3.useRef"/>
            <div className='center'>
                <p>
                É um hook que permite criar uma referência para um elemento DOM. Com useRef, podemos armazenar uma referência em uma variável e, posteriormente, acessá-la em qualquer parte do componente. O useRef é útil para interagir diretamente com elementos do DOM, como definir o foco em um campo de entrada.
                </p>
                <SyntaxHighlighter language="javascript" style={paraisoDark} className="code">
                    {UseRef}
                </SyntaxHighlighter>
            </div>
            
        </div>
    )
}
export default Home