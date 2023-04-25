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
        }`
    

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
        }`
    
    
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
        } `

        const UseMemo = `
            import React, { useMemo, useState } from 'react';

            function MyComponent(props) {
                const [value1, setValue1] = useState(0);
                const [value2, setValue2] = useState(0);

                const expensiveCalculation = useMemo(() => {
                    console.log('expensive calculation');
                    return value1 * value2;
                }, [value1, value2]);

                return (
                    <div>
                        <p>{expensiveCalculation}</p>
                        <button onClick={() => setValue1(value1 + 1)}>Increment value1</button>
                        <button onClick={() => setValue2(value2 + 1)}>Increment value2</button>
                    </div>
                );
            }`

        const UseCallback = `
        import React, { useCallback, useState } from 'react';

        function MyComponent(props) {
            const [value, setValue] = useState(0);

            const increment = useCallback(() => {
                setValue(value + 1);
            }, [value]);

            return (
                <div>
                    <p>{value}</p>
                    <button onClick={increment}>Increment</button>
                </div>
            );
        } `

        const UseContext = `
        import React, { useContext } from 'react';

        const MyContext = React.createContext();

        function MyComponent(props) {
            return (
                <MyContext.Provider value={{ value: 123 }}>
                    <ChildComponent />
                </MyContext.Provider>
            );
        }

        function ChildComponent(props) {
            const { value } = useContext(MyContext);

            return (
                <div>
                    <p>{value}</p>
                </div>
            );
        } `

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

            <SectionTitle title="4.useMemo"/>
            <div className='center'>
                <p>
                    O hook useMemo é usado para memorizar o resultado de uma função com base em suas dependências. Ele é útil quando você tem uma função que é chamada frequentemente e cujo resultado não muda com frequência. Em vez de calcular o resultado toda vez que a função é chamada, você pode usar useMemo para armazenar o resultado em cache e reutilizá-lo em chamadas futuras. Isso pode ajudar a melhorar o desempenho do seu aplicativo, pois você evita o cálculo desnecessário de valores.
                </p>
                <SyntaxHighlighter language="javascript" style={paraisoDark} className="code">
                    {UseMemo}
                </SyntaxHighlighter>
                <p>
                    Nesse exemplo, a função expensiveCalculation é chamada toda vez que o componente é renderizado. No entanto, ela só precisa ser calculada quando value1 ou value2 mudam. Usando useMemo, podemos memorizar o resultado da função e reutilizá-lo em chamadas futuras.
                </p>
            </div>

            <SectionTitle title="5.useCallback"/>
            <div className='center'>
                <p>
                    O hook useCallback é semelhante ao useMemo, mas em vez de armazenar o resultado de uma função em cache, ele armazena a própria função. Isso é útil quando você tem uma função que é passada como prop para um componente filho e que deve ser recriada toda vez que o componente pai é renderizado. Com useCallback, você pode memorizar a função para que ela não seja recriada em cada renderização do componente pai, o que pode ajudar a melhorar o desempenho.
                </p>
                <SyntaxHighlighter language="javascript" style={paraisoDark} className="code">
                    {UseCallback}
                </SyntaxHighlighter>
                <p>
                    Nesse exemplo, a função increment é passada como prop para o componente filho. Sem o useCallback, a função seria recriada toda vez que o componente pai é renderizado. Usando useCallback, podemos memorizar a função para que ela não seja recriada em cada renderização do componente pai.
                </p>
            </div>

            <SectionTitle title="6.useContext"/>
            <div className='center'>
                <p>
                    O hook useContext é usado para compartilhar dados entre componentes sem a necessidade de passá-los como props. Ele permite que você crie um objeto de contexto em um componente pai e, em seguida, use o hook useContext em um componente filho para acessar o objeto de contexto. Isso pode ajudar a evitar a passagem excessiva de props entre componentes e tornar seu código mais fácil de ler e manter.
                </p>
                <SyntaxHighlighter language="javascript" style={paraisoDark} className="code">
                    {UseContext}
                </SyntaxHighlighter>
                <p>
                    Nesse exemplo, criamos um objeto de contexto com React.createContext e o fornecemos para o componente MyComponent usando o componente Provider. O componente filho ChildComponent usa useContext para acessar o objeto de contexto e recuperar o valor 123.
                </p>
            </div>
            
        </div>
    )
}
export default Home