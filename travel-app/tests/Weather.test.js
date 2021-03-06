import React from 'react';
import { shallow } from 'enzyme';
import Weather from '../src/components/Weather';

describe("shallow Weather", () => {
    let wrapper;
    let forecast = [{
        main: {
            temp: 282.97
        },
        weather: [{
            main: "Rain",
            description: "light rain",
        }],
        wind: {
            speed: 10,
            deg: 280
        }
    }]

    beforeEach(() => {
        wrapper = shallow(<Weather forecast={forecast}/>)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
})