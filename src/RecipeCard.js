import React, { Component } from 'react'
import './recipeCard.css'
import RecipeCardInfo from './RecipeCardInfo'
import RecipeCardImageContainer from './RecipeCardImageContainer'

class RecipeCard extends Component {
  constructor (props) {
    super(props)
  }

  render() {
    const recipe = this.props.recipe

    return (
      <div className="recipe-card">
        <RecipeCardImageContainer isClassic={recipe.isClassic} />
        <RecipeCardInfo title={recipe.title} subtitle={recipe.subtitle} />
      </div>
    )
  }
}

export default RecipeCard;
