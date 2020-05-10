import React, { Component } from 'react'
import CardFront from './CardFront.js'
import CardBack from './CardBack.js'
import ReactCardFlip from 'react-card-flip'

export default class Card extends Component {

    state ={
        isFlipped: false
    }
    handleOnClick = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
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
                {this.props.dealerCards[0]=== this.props.card ?
                    <CardFront card={this.props.card} card={this.props.card} dealerCards={this.props.dealerCards}/>
                   :
                   <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                   <CardBack card={this.props.card} handleOnClick={this.handleOnClick} dealerCards={this.props.dealerCards}/>
                   <CardFront card={this.props.card} card={this.props.card} dealerCards={this.props.dealerCards}/>
                </ReactCardFlip>
                }
            </div>

        )
    }
}
