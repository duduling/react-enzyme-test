import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { PropTypes } from 'prop-types'

const TodoItemText = styled.span`
    text-decoration: ${props => props.done ? 'line-through' : 'none'};
`

TodoItem.propsTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        done: PropTypes.bool,
    })
}

function TodoItem({ todo, onToggle, onRemove }) {
    const { id, text, done } = todo
    const handleOnToggle = useCallback(() => onToggle(id), [id, onToggle])
    const handleOnRemove = useCallback(() => onRemove(id), [id, onRemove])

    return (
        <li>
            <TodoItemText done={done} onClick={handleOnToggle}>{text}</TodoItemText>
            <button onClick={handleOnRemove}>삭제</button>
        </li>
    )
}

export default TodoItem