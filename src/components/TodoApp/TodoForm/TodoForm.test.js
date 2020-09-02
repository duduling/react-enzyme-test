import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TodoForm from './TodoForm'

describe('<TodoForm/>', () => {
    const setup = (props = {}) => {
        const utils = render(<TodoForm {...props} />)
        const typingInput = utils.getByPlaceholderText('할 일을 입력하세요.')
        const addBtn = utils.getByText('등록')
        return {
            ...utils,
            typingInput,
            addBtn
        }
    }
    it('has input a button', () => {
        const { typingInput, addBtn } = setup()
        expect(typingInput).toBeTruthy()
        expect(addBtn).toBeTruthy()
    })

    it('changes input', () => {
        const { typingInput } = setup()
        fireEvent.change(typingInput, {
            target: {
                value: 'TDD 배우기'
            }
        })
        expect(typingInput).toHaveAttribute('value', 'TDD 배우기')
    })
    it('class onInsert and clears input', () => {
        const onInsert = jest.fn()
        const { typingInput, addBtn } = setup({ onInsert })
        // 수정 액션
        fireEvent.change(typingInput, {
            target: {
                value: 'TDD 배우기'
            }
        })
        // 버튼 클릭 액션
        fireEvent.click(addBtn)
        expect(onInsert).toBeCalledWith('TDD 배우기')
        expect(typingInput).toHaveAttribute('value', '')
    })
})