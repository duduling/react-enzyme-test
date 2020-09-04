import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({ todos, onToggle, onRemove }) => {
    return (
        <ul>
            {todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
            })}
        </ul>
    )
}

export default TodoList