import React, { Component } from 'react'

export default class CardBack extends Component {
    state = {
        cardFace: false
    }

    handleOnClick = () => {
        this.setState({
            cardFace: !this.state.cardFace
        })
    }
    render() {
        return (
            <>
            {
                this.state.cardFace ? 
                <div className="dealer-second-card" onClick={this.handleOnClick} >
                   <img src={this.props.card.image} />
                </div> : 
                  <div className="dealer-second-card card-back" onClick={this.handleOnClick} >
                  <img src={this.props.card.image} />
              </div> 
            }
           
           </>
        )
    }
}
