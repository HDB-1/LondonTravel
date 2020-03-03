import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

describe("shallow app", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
})