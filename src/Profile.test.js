import React from 'react'
import { render, getByText } from '@testing-library/react'

import Profile from './Profile'

describe('<Profile />', () => {
    it('matches snapshot', () => {
        const { container } = render(<Profile username="Duduling" name="두들링" />)
        expect(container).toMatchSnapshot()
    })
    it('shows ther props correctly', () => {
        const { container } = render(<Profile usename={'Duduling'} name={'두들링'} />)

        getByText(container, 'Duduling')
        getByText(container, '(두들링)')
        getByText(container, /김/)
    })
})