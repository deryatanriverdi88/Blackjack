import React, { Component } from 'react'
import DealerCards from '../Components/DealerCards.js'
import PlayerCards from '../Components/PlayerCards.js'

export default class Cards extends Component {

    state = {
       dealerCards: [], 
       playerCards: []
    }

    componentDidMount = () =>{
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=4')
        .then(res => res.json())
        .then(cardsObject => 
            this.setState({
                dealerCards : cardsObject.cards.slice(0, 2),
                playerCards : cardsObject.cards.slice(2, 4)
            })
        )
    }

    render() {
        return (
            <div>
               <DealerCards dealerCards={this.state.dealerCards}/>
               <PlayerCards playerCards={this.state.playerCards}/>
            </div>
        )
    }
}
