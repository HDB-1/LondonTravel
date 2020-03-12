import React from 'react';
import { shallow } from 'enzyme';
import Forecast from '../src/components/Forecast';

describe("shallow Forecast", () => {
    let wrapper;
    let forecast = {
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
    }

    beforeEach(() => {
        wrapper = shallow(<Forecast forecast={forecast}/>)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
})