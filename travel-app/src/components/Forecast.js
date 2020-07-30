import React, { Component } from 'react';
import cloud from '../assets/cloud.png';
import rain from '../assets/rain.png';
import snow from '../assets/snow.png';
import sun_cloud from '../assets/sun-cloud.png';
import sunny from '../assets/sunny.png';
import thunder from '../assets/thunder.png';
import wind from '../assets/wind.png';
import '../styling/Weather.css';

export default class Forecast extends Component {

    bearings = (wind_degree) => {
        if(wind_degree > 0 && wind_degree < 26) {
            return "Northerly"
        } else if(wind_degree > 25 && wind_degree < 65) {
            return "North Easterly"
        } else if(wind_degree > 65 && wind_degree < 115) {
            return "Easterly"
        } else if(wind_degree > 115 && wind_degree < 155) {
            return "South Easterly"
        } else if(wind_degree > 155 && wind_degree < 205) {
            return "Southerly"
        } else if(wind_degree > 205 && wind_degree < 245) {
            return "South Westerly"
        } else if(wind_degree > 245 && wind_degree < 295) {
            return "Westerly"
        } else if(wind_degree > 295 && wind_degree < 335) {
            return "North Westerly"
        } else if(wind_degree > 335 && wind_degree < 0) {
            return "Northerly"
        }
    }

    convert_temp = (temp) => {
        let temp_c = (temp-273.15)
        let temp_final = (Math.round(temp_c * 100) / 100).toFixed(1);
        return temp_final
    }

    pic_to_desc = () => {
        let descs = this.props.day.weather[0].description
        if(descs.includes("rain")) {
            return rain
        } else if(descs === "clear sky") {
            return sunny
        } else if(descs === "few clouds") {
            return sun_cloud
        } else if(descs === "scattered clouds") {
            return sun_cloud
        } else if(descs.includes("cloud")) {
            return cloud
        } else if(descs.includes("thunder")) {
            return thunder
        } else if(descs.includes("wind")) {
            return wind
        } else if (descs.includes("snow")) {
            return snow
        }
    }

    convert_month = () => {
        let month = this.props.day.dt_txt.slice(5,7)
        if(month==="01"){return"Jan"}else if(month==="02"){return"Feb"}else if(month==="03"){return"Mar"}
        else if(month==="04"){return"Apr"}else if(month==="05"){return"May"}else if(month==="06"){return"Jun"}
        else if(month==="07"){return"Jul"}else if(month==="08"){return"Aug"}else if(month==="09"){return"Sep"}
        else if(month==="10"){return"Oct"}else if(month==="11"){return"Nov"}else if(month==="12"){return"Dec"}

 
    }

    convert_day = () => {
        let day = this.props.day.dt_txt.slice(8,10)
        if(day==="01"){return"1st"}else if(day==="02"){return"2nd"}else if(day==="03"){return"3rd"}
        else if(day==="04"){return"4th"}else if(day==="05"){return"5th"}else if(day==="06"){return"6th"}
        else if(day==="07"){return"7th"}else if(day==="08"){return"8th"}else if(day==="09"){return"9th"}
        else if(day==="10"){return"10th"}else if(day==="11"){return"11th"}else if(day==="12"){return"12th"}
        else if(day==="13"){return"13th"}else if(day==="14"){return"14th"}else if(day==="15"){return"15th"}
        else if(day==="16"){return"16th"}else if(day==="17"){return"17th"}else if(day==="18"){return"18th"}
        else if(day==="19"){return"18th"}else if(day==="20"){return"20th"}else if(day==="21"){return"21st"}
        else if(day==="22"){return"22nd"}else if(day==="23"){return"23rd"}else if(day==="24"){return"24th"}
        else if(day==="25"){return"25th"}else if(day==="26"){return"26th"}else if(day==="27"){return"27th"}
        else if(day==="28"){return"28th"}else if(day==="29"){return"29th"}else if(day==="30"){return"30th"}
        else if(day==="31"){return"31st"}
    }


    componentDidMount() {
        this.bearings()
        this.convert_temp()
        this.pic_to_desc()
        this.convert_month()
        this.convert_day()
    }

    render() {
        let { day } = this.props;
        let direction = this.bearings(day.wind.deg)
        let temp_final = this.convert_temp(day.main.temp)
        let icon = this.pic_to_desc(day.weather[0].description)
        let month = this.convert_month(day.dt_txt.slice(5,7))
        let day_date = this.convert_day(day.dt_txt.slice(8,10))

        return (
            <div className="weather-body">
                <h5>{day.dt_txt.slice(11,16)} | {day_date} {month}</h5>
                <h5>{day.weather[0].main} - {day.weather[0].description}</h5>
                <h5>Temp: {temp_final} C</h5>
                <h5>Wind: {day.wind.speed.toFixed(0)}mph - {direction}</h5>
                <img id="icon" src={icon} alt="weather icon"/>
                <h3>--------------------</h3>
            </div> 

        )
    }
}