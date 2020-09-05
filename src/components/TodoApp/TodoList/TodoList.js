import React from 'react'
import { PropTypes } from 'prop-types'

import TodoItem from '../TodoItem/TodoItem'
import { TodosTypes } from '../TodoItem/TodoItemPropTypes'

TodoList.propTypes = {
    todos: PropTypes.arrayOf(TodosTypes),
    onToggle: PropTypes.func,
    onRemove: PropTypes.func,
}

function TodoList({ todos, onToggle, onRemove }) {
    return (
        <ul data-testid={'TodoList'}>
            {todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
            })}
        </ul>
    )
}

export default TodoList