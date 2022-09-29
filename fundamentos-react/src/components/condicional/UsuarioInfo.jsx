import React from 'react'
import If, {Else} from './If'

export default props => {
    const usuario = props.usuario || {}
    return(
        <div >
             {/*

            <If test={usuario && usuario.nome}>
                Welcome to my heart, <strong> {usuario.nome} </strong>
            </If>
            
            Uma espécie de else

            <If test={ !usuario || !usuario.nome}>
               Welcome, <strong>AMIGO</strong>
            </If>
            
                Com Else
            */}

             <If test={usuario && usuario.nome}>
                Welcome to my heart, <strong> {usuario.nome} </strong>
                <Else>
                Welcome, <strong>AMIGO</strong>
                </Else>
            </If>
        </div>
    )
}