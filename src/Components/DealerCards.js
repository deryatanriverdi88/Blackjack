import React, { Component } from 'react'
import CardFront from './CardFront.js'
import CardBack from './CardBack.js'
import Card from './Card.js'

export default class DealerCards extends Component {
    
    render() {
        return (
            <div className='dealer-cards'>
                   { this.props.dealerCards.map(card => {
                    return <Card className={card.code} card={card} dealerCards={this.props.dealerCards}/>
                   })}
            </div>
        )
    }
}
