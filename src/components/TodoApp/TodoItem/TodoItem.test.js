import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TodoItem from './TodoItem'

describe('<TodoItem/>', () => {
    const mockTodoData = {
        id: 1,
        text: 'TDD 배우기',
        done: false
    }

    const setup = (props = {}) => {
        const defaultProps = { todo: mockTodoData }
        const utils = render(<TodoItem {...defaultProps} {...props} />)
        const todo = props.todo || defaultProps.todo
        const todoItemTitle = utils.getByText(todo.text)
        const todoItemDeleteBtn = utils.getByText('삭제')
        return {
            ...utils,
            todoItemTitle,
            todoItemDeleteBtn
        }
    }

    it('has span and button', () => {
        const { todoItemTitle, todoItemDeleteBtn } = setup()
        expect(todoItemTitle).toBeTruthy
        expect(todoItemDeleteBtn).toBeTruthy
    })

    it('shows line-through on span when done is true', () => {
        const { todoItemTitle } = setup({ todo: { ...mockTodoData, done: true } })
        expect(todoItemTitle).toHaveStyle('text-decoration: line-through;')
    })

    it('shows line-through on span when done is false', () => {
        const { todoItemTitle } = setup({ todo: { ...mockTodoData, done: false } })
        expect(todoItemTitle).not.toHaveStyle('text-decoration: line-through;')
    })

    it('calls onToggle', () => {
        const onToggle = jest.fn()
        const { todoItemTitle } = setup({ onToggle })
        fireEvent.click(todoItemTitle)
        expect(onToggle).toBeCalledWith(mockTodoData.id)
    })

    it('calls onRemove', () => {
        const onRemove = jest.fn()
        const { todoItemDeleteBtn } = setup({ onRemove })
        fireEvent.click(todoItemDeleteBtn)
        expect(onRemove).toBeCalledWith(mockTodoData.id)
    })
})