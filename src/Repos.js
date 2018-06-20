import React, { Component } from 'react';

class Repos extends Component {
  constructor (props) {
    super(props)
    this.state = { results: this.props.repositories }
  }

  render() {
    return (
      <div>
        {this.props.repositories && this.props.repositories.repos && this.props.repositories.repos.map((repo, index) =>
          <div key={index}>{repo.name}</div>
        )}
      </div>
    )
  }
}

export default Repos;
