import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Quiz from "./Quiz"

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
      <Quiz/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
