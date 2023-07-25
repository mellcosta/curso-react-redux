export default function reducer(state, action) {
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