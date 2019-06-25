import React from 'react';
import axios from 'axios';
import Friends from './components/Friends';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: null
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        {this.state.friends > 0 ? <Friends /> : <h2>Loading data....</h2>}
      </div>
    );
  }
}

export default App;
