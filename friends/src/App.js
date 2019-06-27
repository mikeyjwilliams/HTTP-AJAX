import React from 'react';
import axios from 'axios';
import { Link, Route } from 'react-router-dom';
import Friends from './components/Friends';
import Form from './components/Form';
import FriendList from './components/FriendList';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: 0
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => {
        this.setState({ friends: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addItem = friend => {
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <div className="nav-section">
          <Link to="/" className="nav">
            Home
          </Link>
          <Link to="/create" className="nav">
            New Friend
          </Link>
        </div>

        <Route
          path="/create"
          exact
          render={props => <Form {...props} addItem={this.addItem} />}
        />
        <Route
          path="/"
          render={props => (
            <FriendList {...props} friends={this.state.friends} />
          )}
        />
      </div>
    );
  }
}

export default App;
