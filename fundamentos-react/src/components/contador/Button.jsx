import React from 'react'

const Button = (props) =>{
    return(
        <div>
            <button onClick={props.setDec} className='dec'> - </button>
            <button onClick={props.setInc} className='inc'> + </button> 
        </div>
    )
}

export default Button