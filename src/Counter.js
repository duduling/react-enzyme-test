import React, { useState } from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0)

    const onIncreament = () => {
        setNumber(number + 1)
    }
    const onDecreament = () => {
        setNumber(number - 1)
    }

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncreament}>+1</button>
            <button onClick={onDecreament}>-1</button>
        </div>
    )
}

export default Counter
