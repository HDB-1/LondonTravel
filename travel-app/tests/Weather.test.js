import React from 'react';
import { shallow } from 'enzyme';
import Weather from '../src/components/Weather';

describe("shallow Weather", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Weather />)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
})