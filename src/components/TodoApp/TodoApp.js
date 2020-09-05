import React, { useState } from 'react'

import TodoForm from './TodoForm/TodoForm'
import TodoList from './TodoList/TodoList'

function TodoApp() {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'TDD 배우기',
            done: true
        },
        {
            id: 2,
            text: 'react-testing-library 사용하기',
            done: true
        }
    ])

    const onInsert = text => {
        setTodos([...todos, {
            id: (todos[todos.length - 1]?.id + 1) || 1,
            text,
            done: false
        }])
    }

    const onToggle = id => {
        setTodos(todos.map(todo => {
            return id === todo.id ? { ...todo, done: !todo.done } : todo
        }))
    }

    const onRemove = id => {
        setTodos(todos.filter(todo => id !== todo.id))
    }

    return (
        <>
            <TodoForm onInsert={onInsert} />
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
        </>
    )
}

export default TodoApp