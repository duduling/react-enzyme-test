import React, { useState } from 'react'
import PropTypes from 'prop-types'

TodoForm.propsTypes = {
    onInsert: PropTypes.func
}

function TodoForm({ onInsert }) {
    const [inputValue, setInputValue] = useState('')

    const onChange = e => {
        const { target: { value } } = e

        setInputValue(value)
    }

    const handleAddTodoItem = e => {
        e.preventDefault()

        onInsert(inputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={handleAddTodoItem}>
            <input type="text" placeholder="할 일을 입력하세요." value={inputValue} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    )
}

export default TodoForm