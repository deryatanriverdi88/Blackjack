import React, { Component } from 'react'
import CardFront from './CardFront.js'
import CardBack from './CardBack.js'

export default class Card extends Component {

    state ={
        cardFace: false
    }
    handleOnClick = () => {
        this.setState({
            cardFace: !this.state.cardFace
        })
    }
    componentDidMount = () => {
       if (this.props.dealerCards[0]=== this.props.card){
           this.setState({
               cardFace: true
           })
       }

        
    }

    render() {
        return (
            <div className='card'>
                {this.state.cardFace ? 
                   <CardFront card={this.props.card} card={this.props.card} dealerCards={this.props.dealerCards}/>
                   :
                   <CardBack card={this.props.card} handleOnClick={this.handleOnClick} dealerCards={this.props.dealerCards}/>
                }

            </div>

        )
    }
}
