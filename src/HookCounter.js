import React, { useState, useCallback } from 'react'

const HookCounter = () => {
    const [number, setNumber] = useState(0)

    const onIncrease = () => {
        setNumber(number + 1)
    }
    const onDecrease = () => {
        setNumber(number - 1)
    }

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default HookCounter