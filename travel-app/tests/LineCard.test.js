import React from 'react';
import { shallow } from 'enzyme';
import LineCard from '../src/components/LineCard';

describe("shallow LineCard", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LineCard />)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})