import React, { Component } from 'react'
import './recipeCard.css'
import RecipeCardButton from './RecipeCardButton'

class RecipeCardInfo extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    console.log(this.props)

    return (
      <div className="recipe-card__info">
        <div className="recipe-card__title">{this.props.title}</div>
        <div className="recipe-card__subtitle">{this.props.subtitle}</div>
        <RecipeCardButton />
      </div>
    )
  }
}

export default RecipeCardInfo;
