import React from 'react'
import { render, screen } from '@testing-library/react'

import Profile from './Profile'

describe('<Profile />', () => {
    it('matches snapshot', () => {
        const { container } = render(<Profile username='Duduling' name='두들링' />)
        expect(container).toMatchSnapshot()
    })
    it('shows ther props correctly', () => {
        render(<Profile username='Duduling' name='두들링' />)
        screen.getByText('Duduling')
        screen.getByText('(두들링)')
        screen.getByText(/두/)
    })
}) 