import React, { Component } from 'react'

export default class CardBack extends Component {

    render() {
        return (
            <div className="card-back" onClick={this.props.handleOnClick}></div>
        )
    }
}
