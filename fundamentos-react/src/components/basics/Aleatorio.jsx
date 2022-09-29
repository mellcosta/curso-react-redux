import React from 'react'
//import './Aleatorio.css'

export default (props) => {
    const { min, max } = props;
    const random = parseInt(Math.random() * (max-min)) + min
    return(
        <div className="containerAleatorio">
            <h1>Testando Valores aleatórios</h1>
            <form>
                <div className="valores">
                    <span>
                    Valor Mínimo <p>{min}</p> 
                    </span>
                    <span>
                    Valor Máximo <p>{max}</p> 
                    </span>
                </div>
                <div class="resultado">
                    <span>{random}</span>
                    <button>click</button>
                </div>
            </form>
            <footer>@mellcosta</footer>
        </div>
    )
    
}