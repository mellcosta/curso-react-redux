import './Input.css'

import React from 'react'
import { useState } from 'react'

export default props => {

    const [valor, setValor] = useState('Inicial')

    return(
        <div className='containerInput'>
            <h2> {valor} </h2>
            <form className='Input'>
                <input value={valor}  
                onChange={(e) => {setValor(e.target.value)}}/>
                <input value={valor} readOnly/>
                <input value={undefined}/>
                <button type='reset'>Limpar</button>
            </form>
        </div>
    )
}