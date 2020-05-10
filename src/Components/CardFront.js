import React, { Component } from 'react'

export default class CardFront extends Component {
    render() {
        return (
            <div className="card-front" >
                <img src={this.props.card.image} />
            </div>
        )
    }
}
