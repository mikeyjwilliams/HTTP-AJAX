import React from 'react';
import axios from 'axios';

class CreateFriend extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: 0,
      email: '',
      errorMessage: null
    };
  }

  render() {
    const { name, age, email } = this.state;
    return (
      <form onSubmit={this.props.createUser}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.eventHandler}
        />
      </form>
    );
  }
}
