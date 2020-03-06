import React, { Component } from 'react'
import Axios from 'axios';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LineCard from '../components/LineCard';
import TubeMap from '../components/TubeMap';
import Weather from '../components/Weather';
import NotFound from '../components/NotFound';
import Homepage from '../components/Homepage';
import '../styling/App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      main: {},
      condition: {},
      wind: {},
      lineData: [],
      lineColour: {
        bakerloo: '#894E24',
        central: '#DC251F',
        circle: '#F8CE00',
        district: '#197229',
        "hammersmith-city": "#D799AF",
        jubilee: "#6A7278",
        metropolitan: "#751056",
        northern: "#000000",
        piccadilly: "#2119A8",
        victoria: "#3EA0E2",
        "waterloo-city": "#76D0BD",
        "london-overground": "#E86A11",
        dlr: '#38AFAD',
        tram: "#66CC01",
      }
    }
  }

  getAllData = () => {
    Axios.get("https://api.tfl.gov.uk/Line/Mode/tube%2Cdlr%2Coverground%2Ctram/Status")
    .then(res => {
      this.setState({
        lineData: res.data,
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  getWeather = () => {
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${API_KEY}`)
    .then(res => {
      console.log(res)
      this.setState({
        condition: res.data.weather[0],
        main: res.data.main,
        wind: res.data.wind
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getAllData()
    this.getWeather()
  }
  
  render() {
    let { lineData, lineColour, main, wind, condition } = this.state;
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/linestatus">
            <div className="flex-container">
            {lineData.map(line => {
              let colour = { backgroundColor: lineColour[line.id] }
              return (<LineCard
                name={line.name}
                colour={colour}
                status={line.lineStatuses[0]["statusSeverityDescription"]}
                reason={line.lineStatuses[0]["reason"]} />)})}
                </div>
          </Route>
          <Route exact path="/map">
            <TubeMap />
          </Route>
          <Route exact path="/weather">
            <Weather 
            wind_mph={wind.speed}
            wind_degree={wind.deg}
            temp={main.temp}
            feelslike={main.feels_like}
            condition={condition.main}
            condition_desc={condition.description}
            />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    )
  }
}

