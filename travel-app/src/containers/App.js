import React, { Component } from 'react'
import Axios from 'axios';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LineCard from '../components/LineCard';
import '../styling/App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fetched: false,
      lineData: [],
      lineColour: {
        bakerloo: '#894E24',
        central: '##DC251F',
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
        fetched: true
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.getAllData()
  }

  render() {
    let { lineData, lineColour } = this.state;
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <p>Welcome to the app, get London travel info</p>
          </Route>
          <Route path="/linestatus">
            <div className="flex-container">
            {lineData.map(line => {
              let colour = lineColour[line.id]
              return (<LineCard
                name={line.name}
                colour={colour}
                status={line.lineStatuses[0]["statusSeverityDescription"]}
                reason={line.lineStatuses[0]["reason"]} />)})}
                </div>
          </Route>
        </Switch>
      </Router>
    )
  }
}

