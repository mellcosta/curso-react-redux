 /*
 Primeiro Componente
 -------------------

...#01...
 
 export default function Primeiro () {
    return 'Primeiro Componente'
}


...#02...

actualmente o jsx roda sem :
import React from 'react'
*/

const Primeiro = () => {
    return(
        <div>
            <h2> Primeiro componente</h2>  
            <p>Seja Bem Vindo ao primeiro componente</p>
        </div> 
    )
} 

export default Primeiro