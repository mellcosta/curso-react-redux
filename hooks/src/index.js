import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import DataContext, { data } from './data/DataContext'

import App from './views/App'

ReactDOM.render(
    <DataContext.Provider value={data}> 
        <App />
    </DataContext.Provider>,
    document.getElementById('root')
)