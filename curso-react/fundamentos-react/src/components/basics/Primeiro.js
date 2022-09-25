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
            <h2> Primeiro componente #2 </h2>  
            <p>Outro elemento</p>
        </div> 
    )
} 

export default Primeiro