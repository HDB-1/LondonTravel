import React, { Component } from 'react'
import '../styling/LineCard.css'


export default class Items extends Component {

    render() {
        let { name, color, status, reason } = this.props;
        return (
            <div class="card">
                <div class="card-header" style={{"background-color": {color}}}>
                    <h3>{name}</h3>
                </div>
                <div class="card-body">
                    <h5>{status}</h5>
                    {reason && <p>{reason}</p>}
                </div> 
                <div class="card-footer"><br/></div>
            </div>
        )
    }
}
