import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const initialState = {
    user: null,
    number:0,
    cart: [],
    products: [],
}

function reducer(state, action) {
    switch(action.type) {
        case 'login':
            return { ...state, user: {name: action.payload}}
        case 'numberAdd2': 
            return {...state, number: state.number + 2}

            // My way
        case 'numberMulti7':
            return{...state, number: state.number * 7 }
        case 'numberDiv25':
            return{...state, number: state.number / 25 }
        case 'numberInt':
            return{...state, number: parseInt(state.number) }
        case 'numberAddN':
            return{...state, number: state.number + action.n}
        default : 
            return state
    }
}

const UseReducer = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ?
                    <span className="text"> {state.user.name} </span>
                    : <span className="text"> Sem user </span>
                }
                <span className="text"> { state.number } </span>
                <div>
                    <button className="btn"
                        onClick = {() => dispatch ({type: 'numberAdd2'})} >
                        +2
                    </button>
                    <button className="btn" 
                        onClick={() => dispatch ({type: 'login', payload: 'Mel'}) } >
                        Login
                    </button>
                </div>
            </div>

            <SectionTitle
                title="Desafio useReducer"
                subtitle="Minha Versão"
            />

            <div className="center">
                <div>
                    <button className="btn"
                        onClick={ () => dispatch ({type: 'numberMulti7'})}>
                    x7</button>
                    <button className="btn"
                        onClick={ () => dispatch ({type: 'numberDiv25'})}>
                    /25</button>
                    <button className="btn"
                        onClick={ () => dispatch ({type: 'numberInt'})}>
                    Int</button>
                    <button className="btn"
                        onClick={ () => dispatch ({type: 'numberAddN', n: 10})}>
                    +10</button>
                    <button className="btn"
                        onClick={ () => dispatch ({type: 'numberAddN', n: -5})}>
                    -5 </button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
