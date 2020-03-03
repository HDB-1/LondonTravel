import React, { Component } from 'react'
import '../styling/LineCard.css'


export default class Items extends Component {

    render() {
        let { name, colour, status, reason } = this.props;
        return (
            <div className="card">
                <div className="card-header" style={colour}>
                    <h3>{name}</h3>
                </div>
                <div className="card-body">
                    <h5>{status}</h5>
                    {reason && <p>{reason}</p>}
                </div> 
                <div className="card-footer"><br/></div>
            </div>
        )
    }
}
