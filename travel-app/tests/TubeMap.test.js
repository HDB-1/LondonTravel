import React from 'react';
import { shallow } from 'enzyme';
import TubeMap from '../src/components/TubeMap';

describe("shallow TubeMap", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TubeMap />)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
})