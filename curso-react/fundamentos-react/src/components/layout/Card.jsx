import React from 'react'

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color,
        borderColor: props.color
    }

    return(
        <div className="card" style={cardStyle}>
            <h2 className="title">{props.titulo}</h2>
            <div className="content">{props.children}</div>
        </div>
    )
}