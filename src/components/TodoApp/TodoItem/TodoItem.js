import React from 'react'
import styled from '@emotion/styled'
import { TodosTypes } from './TodoItemPropTypes'

const TodoItemText = styled.span`
    text-decoration: ${props => props.done ? 'line-through' : 'none'};
`

TodoItem.propsTypes = {
    todo: TodosTypes
}

function TodoItem({ todo, onToggle, onRemove }) {
    const { id, text, done } = todo
    const handleOnToggle = () => onToggle(id)
    const handleOnRemove = () => onRemove(id)

    return (
        <li>
            <TodoItemText done={done} onClick={handleOnToggle}>{text}</TodoItemText>
            <button onClick={handleOnRemove}>삭제</button>
        </li>
    )
}

export default TodoItem