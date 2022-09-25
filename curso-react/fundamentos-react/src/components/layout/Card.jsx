import React from 'react'

export default (props) => {
    return(
        <div className="card">
            <h2 className="title">{props.titulo}</h2>
            <div className="content">{props.children}</div>
        </div>
    )
}