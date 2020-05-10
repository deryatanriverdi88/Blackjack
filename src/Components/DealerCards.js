import React, { Component } from 'react'
import CardFront from './CardFront.js'
import CardBack from './CardBack.js'

export default class DealerCards extends Component {
    
    render() {
        return (
            <div>
                   { this.props.dealerCards.map(card => {
                       if(card !== this.props.dealerCards[1]){
                        return <CardFront card={card} />
                       } else {
                        return  <CardBack card={card} />
                       }
                   })}
            </div>
        )
    }
}
