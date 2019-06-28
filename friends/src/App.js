import React from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import EditFriend from './components/EditFriend';

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

  editFriend = friends => {
    console.log(friends);
  };

  render() {
    const { friends } = this.state;

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
          <NavLink to="/" className="nav">
            Edit User
          </NavLink>
        </div>

        <Route
          path="/edit/:id"
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
              friends={friends}
              editFriend={this.editFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
