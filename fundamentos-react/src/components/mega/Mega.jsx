import React, { useState, Component } from 'react'

import { Div } from '../../styled'
import { Title } from '../../styled'
import { QtdeNumeros } from '../../styled'
import { Input } from '../../styled'
import { Button } from '../../styled'

export default props => {

  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio) ? 
          gerarNumeroNaoContido(min, max, array) :
          aleatorio
  }
  
  function gerarNumeros(qtde) { // para inicializar o estado da app
    const numeros =  Array(qtde)
          .fill(0)
          .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            console.log([...nums, novoNumero])
            return [...nums, novoNumero]
          }, [])
          .sort((n1, n2) => n1 - n2)
  
          return numeros
  }
  
  const [qtde, setQtde] = useState(props.qtde || 6)
  const numerosIniciais = Array(qtde).fill(0)
  const [numeros, setNumeros] = useState(numerosIniciais)

  // Para iniciar com numeros  aleatórios
  // const numerosIniciais = gerarNumeros(qtde)
  
  return (
    <Div>
      <Title>Mega</Title>
      <h3>{numeros.join(' ')}</h3>
      <QtdeNumeros>
        <label>Qtde de Números</label>
        {/* Para gerar número ao alterar quantidade */}
        <Input 
            min={3}
            max={15}
            type="number"
            value={qtde}
            onChange={(e) => {
              setQtde(+e.target.value)
              setNumeros(gerarNumeros(+e.target.value))
              }} />
      </QtdeNumeros>
      <Button onClick= {(_) => setNumeros(gerarNumeros(qtde))}>
          Gerar Números 
      </Button>
    </Div>
  )
}

/*

 Gera numeros clicando no botão sempre..
      <Input type="number" value={qtde}
        onChange={e => setQtde(+e.target.value)} />
      <Button onClick= {_ => setNumeros(gerarNumeros(qtde))}>
          Gerar Números 
      </Button>
*/