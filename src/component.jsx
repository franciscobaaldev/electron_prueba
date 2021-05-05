
import React, { useState } from "react"

const ComponentPrueba  =() => {
    const [a,setA] = useState(0)

    return (
        <div>
        <div style={{backgroundColor: 'red', height:'100px',width:`${a}px`}}/>
        <button onClick={() => setA(prev => prev + 10)}>+</button>
        </div>

    )
}

export default ComponentPrueba;