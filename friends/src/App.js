import React from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
//import Friends from './components/Friends';
import Form from './components/Form';
import FriendsList from './components/FriendsList';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: 0,
      friendList: []
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

  addFriend = friend => {
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(response => {
        this.setState({ friends: response.friend });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <div className="nav-section">
          <NavLink to="/" className="nav">
            Home
          </NavLink>
          <NavLink to="/create" className="nav">
            New Friend
          </NavLink>
        </div>

        <Route
          path="/create"
          exact
          render={props => <Form {...props} addFriend={this.addFriend} />}
        />
        <Route
          path="/"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
      </div>
    );
  }
}

export default App;
