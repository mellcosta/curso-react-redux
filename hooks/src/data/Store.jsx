// import React, { useState } from 'react'

// const initialState = {
//   number: 321,
//   text: 'Context API + HOOKS',
// }

// const AppContext = React.createContext(initialState)

// const Store = props => {
//   const {state, setState} = useState(initialState)

//   function updateState(key, value){
//     setState({
//       ...state,
//       [key]: value,
//     })
//   }

//   return(
//     <AppContext.Provider 
//       value= {{
//         number: state.number,
//         texte: state.text,
//         setNumber: n => updateState('number', n),
//         setText: t => updateState('texte', t),
//       }}>

//       {props.children}
//     </AppContext.Provider>
//   )
// }

// export default Store