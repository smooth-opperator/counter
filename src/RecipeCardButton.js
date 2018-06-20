import React, { Component } from 'react'
import './recipeCard.css'

class RecipeCardButton extends Component {
  constructor (props) {
    super(props)
    this.state = { quantity: 0 }
  }

  increment = () => {
    this.setState({ quantity: 2 })
  }

  decrement = () => {
    this.setState({ quantity: 0 })
  }

  render() {
    if (this.state.quantity == 0) {
      return (
        <div className="recipe-card__button">
          <button className="add-button" onClick={this.increment}> Add to box </button>
        </div>
      )
    } else {
      return (
        <div className="recipe-card__button">
          <button className="remove-button" onClick={this.decrement}> Remove </button>
        </div>
      )
    }

  }
}

export default RecipeCardButton;
