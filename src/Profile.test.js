import React from 'react'
import { mount } from 'enzyme'
import Profile from './Profile'

describe('<Profile />', () => {
    it('matches snapshot', () => {
        const wrapper = mount(<Profile username="Duduling" name="두둘링" />)
        expect(wrapper).toMatchSnapshot()
    })
    it('renders username and name', () => {
        const wrapper = mount(<Profile username="Duduling" name="두둘링" />)
        expect(wrapper.props().username).toBe('Duduling')
        expect(wrapper.props().name).toBe('두둘링')
    })
})