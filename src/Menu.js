import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'
import RecipeCard from './RecipeCard'
import './recipeCard.css'

class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = { recipes: [] }
  }

  componentDidMount() {
    const recipes = this.props.getMenuQuery.menu && this.props.getMenuQuery.menu[0]
    this.setState({ recipes: recipes ? recipes : []})
  }

  render() {
    const recipes = this.props.getMenuQuery.menu
      && this.props.getMenuQuery.menu[0] && this.props.getMenuQuery.menu[0].recipes

    if (recipes && recipes.length) {
      const recipeCards = recipes.map((recipe) => <RecipeCard recipe={recipe} />)
      return <div className="recipe-card__container">{recipeCards}</div>
    } else {
      return <div>no recipes</div>
    }
  }
}

const GET_MENU_QUERY = gql`
  query GetMenuQuery($numberOfWeeks: Int!) {
    menu(numberOfWeeks: $numberOfWeeks) {
      startOfWeek
      recipes {
        id
        slug
        title
        subtitle
        isClassic
        mealType
        attributes {
          key
        }
      }
    }
  }
`;

const CreatePageWithMenu = graphql(GET_MENU_QUERY, {
  name: 'getMenuQuery',
  options: {
    variables: {
    numberOfWeeks: 1,
    imageSize: "SMALL"
    }
  }
})(Menu)

export default CreatePageWithMenu;
