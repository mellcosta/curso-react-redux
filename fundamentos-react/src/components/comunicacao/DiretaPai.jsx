import React from 'react'

import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div style={{
            marginTop: '50px'
        }}>
            <DiretaFilho nome="Alan" idade= {9} nerd = {false} />
            <DiretaFilho nome="Greg" idade= {18} nerd = {true} />
        </div>
    )
}