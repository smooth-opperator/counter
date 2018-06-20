import React, { Component } from 'react'
import './recipeCard.css'
import RecipeCardInfo from './RecipeCardInfo'

class RecipeCardImageContainer extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    if (this.props.isClassic) {
      return (
        <div className="recipe-card__image-container">
          <div className="classic">Customer Favorite</div>
        </div>
      )
    } else {
      return (
        <div className="recipe-card__image-container"></div>
      )
    }
  }
}

export default RecipeCardImageContainer;
