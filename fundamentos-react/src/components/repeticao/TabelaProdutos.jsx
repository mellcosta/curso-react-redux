import React from 'react'

import './TabelaProdutos.css'
import produtos from '../../data/produtos'

export default props =>{
    const produtosTab = produtos.map ((produto, i) => {
        return(
                <tr className={i % 2 === 0 ? 'par' : 'impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.name}</td>
                    <td>$ {produto.price}</td>  
                </tr>
        )
    })
     return(
        <div className='containerTabela'>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>  
                <tbody>
                    {produtosTab} 
                </tbody>
            </table>
        </div>
     )
}