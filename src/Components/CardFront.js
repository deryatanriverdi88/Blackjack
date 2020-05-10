import React, { Component } from 'react'

export default class CardFront extends Component {
    render() {
        return (
            <div className="dealer-first-card">
                <img src={this.props.card.image} />
            </div>
        )
    }
}
