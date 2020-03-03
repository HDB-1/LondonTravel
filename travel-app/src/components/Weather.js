import React, { Component } from 'react'

export default class Weather extends Component {

    render() {
        let { temp_c, feelslike_c, wind_mph, wind_degree } = this.props;
        return (
            <div>
                <h1>Weather</h1>
                <p>Temperature: {temp_c}</p>
                <p>Feels Like: {feelslike_c}</p>
                <p>Wind: {wind_mph}</p>
                <p>Wind Bearing: {wind_degree}</p>
                {/* <p>Condition: {condition}</p> */}
            </div>
        )
    }
}
