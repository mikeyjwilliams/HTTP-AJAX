import React from 'react';
import axios from 'axios';
import Friends from './components/Friends';
import Form from './components/Form';

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
        <Form />
        {this.state.friends.length > 0 ? (
          this.state.friends.map(friend => {
            return (
              <Friends key={friend.id} friend={friend} addItem={this.addItem} />
            );
          })
        ) : (
          <h2>Loading data....</h2>
        )}
      </div>
    );
  }
}

export default App;
