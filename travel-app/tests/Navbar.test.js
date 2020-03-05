import React from 'react';
import { shallow } from 'enzyme';
import { Link } from "react-router-dom";
import Navbar from '../src/components/Navbar';

describe("shallow Navbar", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Navbar />)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("Should render 4 <Link /> element", () => {
        expect(wrapper.find(".link").length).toEqual(4);
    })
    it("Should create a link to the '/' route.", () => {
        expect(wrapper.find("#home_link").props()).toHaveProperty("href", "/");
    })
    it("Should create a link to the '/linestatus' route.", () => {
        expect(wrapper.find("#line_link").props()).toHaveProperty("href", "/linestatus");
    })
    it("Should create a link to the '/map' route.", () => {
        expect(wrapper.find("#map_link").props()).toHaveProperty("href", "/map");
    })
    it("Should create a link to the '/weather' route.", () => {
        expect(wrapper.find("#weather_link").props()).toHaveProperty("href", "/weather");
    })
})