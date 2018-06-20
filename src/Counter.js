import React, { Component } from 'react';

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = { count: 0 }
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  shouldComponentUpdate () {
    console.log('shouldComponentUpdate')
  }

  componentWillUpdate () {
    console.log('componentWillUpdate')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  increment = () => this.setState({ count: this.state.count + 1 })
  decrement = () => this.setState({ count: this.state.count - 1 })

  render() {
    console.log('render')
    return (
      <React.Fragment>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </React.Fragment>
    )
  }
}

export default Counter;
