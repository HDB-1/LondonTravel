import React, { Component } from 'react'
import Axios from 'axios';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LineCard from '../components/LineCard';
import TubeMap from '../components/TubeMap';
import Weather from '../components/Weather';
import '../styling/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weather: {},
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
    Axios.get("http://api.weatherapi.com/v1/current.json?key=a8c23d3c2d0a43d78c5172954200303&q=london")
    .then(res => {
      this.setState({
        weather: res.data.current
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  // bearings = ({this.state.weather.wind_degree}) => {
  //   if(wind_degree > 335 && wind_degree < 26) {
  //       return "Northerly"
  //   } else if(wind_degree > 25 && wind_degree < 65) {
  //       return "North Easterly"
  //   } else if(wind_degree > 65 && wind_degree < 115) {
  //       return "Easterly"
  //   } else if(wind_degree > 115 && wind_degree < 155) {
  //       return "South Easterly"
  //   } else if(wind_degree > 155 && wind_degree < 205) {
  //       return "Southerly"
  //   } else if(wind_degree > 205 && wind_degree < 245) {
  //       return "South Westerly"
  //   } else if(wind_degree > 245 && wind_degree < 295) {
  //       return "Westerly"
  //   } else if(wind_degree > 295 && wind_degree < 335) {
  //       return "North Westerly"
  //   }
  // }

  componentDidMount() {
    this.getAllData()
    this.getWeather()
    // this.bearings()
  }
  
  render() {
    let { lineData, lineColour, weather } = this.state;
    return (
      <Router>
        {console.log(this.state.weather.condition)}
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <p>Welcome to the app, get London travel info</p>
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
            temp_c={weather.temp_c}
            feelslike_c={weather.feelslike_c}
            wind_mph={weather.wind_mph}
            wind_degree={weather.wind_degree}
            // condition={weather.condition.text}
            />
          </Route>
        </Switch>
      </Router>
    )
  }
}

