import React from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import CreateFriend from './components/CreateFriend';

import './App.css';
import UpdateFriend from './components/UpdateFriend';

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

  updateFriend = friends => {
    this.setState({ friends });
    console.log('STATE ', this.state.friends);
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
            Create Friend
          </NavLink>
        </div>

        <Route
          path="/update/:id"
          render={props => (
            <CreateFriend
              {...props}
              friends={friends}
              editFriend={this.editFriend}
            />
          )}
        />
        <Route
          path="/create"
          exact
          render={props => (
            <AddFriend {...props} updateFriend={this.updateFriend} />
          )}
        />
        <Route
          path="/edit/:id"
          exact
          render={props => (
            <UpdateFriend {...props} updateFriend={this.updateFriend} />
          )}
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
