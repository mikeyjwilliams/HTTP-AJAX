import React from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';

import './App.css';

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
        this.setState({ friends: response.data });
      })
      .catch(error => console.log(error));
  };

  saveFriend = id => {
    axios
      .put(`http://localhost:5000/friends/:${id}`)
      .then(response => console.log(response))
      .catch(err => console.log(err));
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
          path="/edit/:id"
          exact
          render={props => (
            <EditFriend {...props} editFriend={this.editFriend} />
          )}
        />
        <Route
          path="/create"
          exact
          render={props => <AddFriend {...props} addFriend={this.addFriend} />}
        />
        <Route
          path="/"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
              saveFriend={this.saveFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
