import React from 'react';
import axios from 'axios';
import Friends from './components/Friends';

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
        console.log(response);
        this.setState({
          friends: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log('STATE ', this.state.friends);
    return (
      <div className="App">
        <h1>Friends List</h1>
        {this.state.friends.length > 0 ? (
          this.state.friends.map(friend => {
            return <Friends key={friend.id} friend={friend} />;
          })
        ) : (
          <h2>Loading data....</h2>
        )}
      </div>
    );
  }
}

export default App;
