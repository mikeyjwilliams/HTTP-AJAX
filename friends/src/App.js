import React from 'react';
import axios from 'axios';
import { NavLink, Link, Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import CreateFriend from './components/CreateFriend';
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

  updateFriendsList = friends => {
    this.setState({ friends });
    console.log('AFTER update', this.state.friends);
  };

  render() {
    return (
      <div>
        <div className="App">
          <nav>
            <Link to="/" className="nav">
              Friends
            </Link>
            <Link to="/create" className="nav">
              Create Friend
            </Link>
          </nav>
          <div className="nav-section center-text">Friends</div>
          <header className="App-header" />
          {/* <FriendsList friends={this.state.friends} className="center-text" /> */}
        </div>
        <Route
          path="/"
          exact
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path="/create"
          exact
          render={props => (
            <CreateFriend
              {...props}
              updateFriendsList={this.updateFriendsList}
            />
          )}
        />
      </div>
    );
  }
}
export default App;
