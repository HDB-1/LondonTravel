import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter, Link } from "react-router-dom";
import App from '../src/containers/App';
import Navbar from '../src/components/Navbar';
import LineCard from '../src/components/LineCard';
import TubeMap from '../src/components/TubeMap';
import Weather from '../src/components/Weather';
import Homepage from '../src/components/Homepage';
import NotFound from '../src/components/NotFound';
import waitUntil from "async-wait-until";

describe("shallow app", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />)
    })
    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    })
    it("should contain a Navbar Component", () => {
        expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
    })
    // it("should contain a LineCard Component", () => {
    //     expect(wrapper.containsMatchingElement(<LineCard />)).toEqual(true);
    // })
    it("should contain a TubeMap Component", () => {
        expect(wrapper.containsMatchingElement(<TubeMap />)).toEqual(true);
    })
    it("should contain a Weather Component", () => {
        expect(wrapper.containsMatchingElement(<Weather />)).toEqual(true);
    })
})

describe("Mounted App", () => {
    it("Should render a <Navar /> component on any route", () => {
        let wrapper = mount(
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        );
        expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
        wrapper = mount(
          <MemoryRouter initialEntries={["/linestatus"]}>
            <App />
          </MemoryRouter>
        );
        expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
        wrapper = mount(
          <MemoryRouter initialEntries={["/map"]}>
            <App />
          </MemoryRouter>
        );
        expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
        wrapper = mount(
          <MemoryRouter initialEntries={["/weather"]}>
            <App />
          </MemoryRouter>
        );
        expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
      });
      it("Should render a <NotFound /> component on any route not covered by our specific routing layout", () => {
        let wrapper = mount(
          <MemoryRouter initialEntries={["/random"]}>
          <App />
        </MemoryRouter>
        );
        expect(wrapper.containsMatchingElement(<LineCard />)).toEqual(false);
        expect(wrapper.containsMatchingElement(<TubeMap />)).toEqual(false);
        expect(wrapper.containsMatchingElement(<Weather />)).toEqual(false);
        expect(wrapper.containsMatchingElement(<NotFound />)).toEqual(true);
      })
    
    //   it("Navbar should send user to the homepage when click Home", () => {
    //     let wrapper = mount(
    //       <MemoryRouter initialEntries={["/weather"]}>
    //         <App />
    //       </MemoryRouter>
    //     );
    //     expect(wrapper.containsMatchingElement(<Weather />)).toEqual(true);
    //     expect(wrapper.containsMatchingElement(<Homepage />)).toEqual(false);
    //     wrapper
    //         .find(<Navbar />)
    //         .find("Nav.Link")
    //         .find("#home_link")
    //         .simulate("click", { button: 0 });
    //     expect(wrapper.containsMatchingElement(<Weather />)).toEqual(false);
    //     expect(wrapper.containsMatchingElement(<Homepage />)).toEqual(true);
    //   });
});

// <========================== API TESTING =============================>

function weatherAPIRequest () {
    let url = "http://api.weatherapi.com/v1/current.json?key=a8c23d3c2d0a43d78c5172954200303&q=london";
    return fetch(url).then(res => res.json());
  };
function linestatusAPIRequest () {
    let url = "https://api.tfl.gov.uk/Line/Mode/tube%2Cdlr%2Coverground%2Ctram/Status";
    return fetch(url).then(res => res.json());
  };

describe("testing API", () => {
    beforeEach(() => {
      fetch.resetMocks();
    });
    it("calls API and returns data to me", () => {
      fetch.mockResponseOnce(JSON.stringify({ data: "placeholder12345" }));
      linestatusAPIRequest().then(res => {
        expect(res.data).toEqual("placeholder12345");
      });
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual(
        'https://api.tfl.gov.uk/Line/Mode/tube%2Cdlr%2Coverground%2Ctram/Status'
      );
    });
    it("calls API and returns data to me", () => {
      fetch.mockResponseOnce(JSON.stringify({ data: "placeholder12345" }));
      weatherAPIRequest().then(res => {
        expect(res.data).toEqual("placeholder12345");
      });
      expect(fetch.mock.calls.length).toEqual(1);
      expect(fetch.mock.calls[0][0]).toEqual(
        'http://api.weatherapi.com/v1/current.json?key=a8c23d3c2d0a43d78c5172954200303&q=london'
      );
    });
  });
