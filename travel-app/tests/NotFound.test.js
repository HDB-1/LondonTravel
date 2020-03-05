import React from 'react'
import {shallow} from 'enzyme'
import NotFound from '../src/components/NotFound';

describe('NotFound', () => {
    it('Should render an h2', () => {
        let wrapper = shallow(<NotFound />)
        expect(wrapper.find('h2').length).toEqual(1);
    })
    it('Should render correctly', () => {
        let wrapper = shallow(<NotFound />)
        expect(wrapper).toMatchSnapshot();
    })
})