import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Question from "./Question"

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Question/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
