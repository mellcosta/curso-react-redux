
/*

-------#01------------

import React from 'react'

import FamiliaMembro from './FamiliaMembro'

export default props => {
    return(
        <div>
            <h2>Helena´s children</h2>

            <FamiliaMembro nome="Juliana" sobrenome="Costa"/>
            <FamiliaMembro nome="Rosa" sobrenome="Costa"/>
            <FamiliaMembro nome="Kersey" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Enock" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Newton" {...props}/>
            <FamiliaMembro nome="Melissa" {...props}/>
        </div>
    )
}
*/

/*
------------#02-------------
*/

import React, {cloneElement} from 'react'

export default props => {
    return(
        <div>
            {/*{cloneElement(props.children)} // Para apenas 1 filho */}

            {/* Para vários filhos 

            {React.Children.map(props.children, child => {
                return cloneElement(child, props)
            })}*/}

            {props.children.map((child, i) => {
                return cloneElement(child, {...props, key: i });
            })}
        </div>
    )
}