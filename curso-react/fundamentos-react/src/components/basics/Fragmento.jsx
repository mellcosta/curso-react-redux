import React from 'react'

export default function Fragmento () {
    return (
        <React.Fragment className="containerFragmento">
            <h2>Fragmento</h2>
            <p>
                Para resolver o erro <em>'Adjacent Component' (Adjacent JSX elements must be wrapped in an enclosing tag)</em> , usam-se as seguintes tags para agrupar os elementos :
                    <ul>
                        <li>&lt;React.Fragment&gt; &lt;/React.Fragment&gt;</li>
                        <li>&lt; &gt; &lt;/&gt; : não admite propriedades</li>
                    </ul>
            </p>
        </React.Fragment>
    )
}
