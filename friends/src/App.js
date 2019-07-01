import React from 'react';
import axios from 'axios';
import { NavLink, Link, Route } from 'react-router-dom';

import './App.css';
import FriendsList from './components/FriendsList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(res => {
        this.setState({ friends: res.data });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    if (!this.state.friends) {
      this.setState({ friends: this.state.friends });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="nav-section">Friends</div>
        <header className="App-header" />
        <h2>Friends List</h2>
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}
export default App;
