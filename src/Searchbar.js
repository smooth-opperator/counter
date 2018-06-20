import React, { Component } from 'react';
import Axios from 'axios';
import Repos from './Repos';

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = { search: "", disable: true, data: {} }
  }

  searchChange = () => {
    return Axios.get(`https://github-user.now.sh/?username=${this.state.search}`)
      .then(response => {
        this.setState({ data: response.data })
      })
      .catch(error => console.log('error', error))
  }

  storeSearch = (e) => {
    const searchTerm = e.currentTarget.value
    this.setState({ search: e.currentTarget.value, disable: !searchTerm.length })
  }



  render() {
    console.log('this.state.data', this.state.data)
    return (
      <div>
        <input type="text" onChange={this.storeSearch} />
        <button onClick={this.searchChange} disabled={this.state.disable}>Search</button>
        <Repos repositories={this.state.data} />
      </div>
    )
  }
}

export default SearchBar;
