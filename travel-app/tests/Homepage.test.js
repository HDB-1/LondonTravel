import React from 'react';
import { shallow } from 'enzyme';
import Homepage from '../src/components/Homepage';

describe("shallow Homepage", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Homepage />)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("should contain an h1 tag", () => {
        expect(wrapper.find("h1").length).toEqual(1)
    })
})