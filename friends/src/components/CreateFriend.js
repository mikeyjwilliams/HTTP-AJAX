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

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  buildFriend = e => {
    e.preventDefault();

    const { name, age, email } = this.state;
    const friend = { name, age, email };

    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.props.updateFriendsList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { name, age, email } = this.state;
    return (
      <form onSubmit={this.buildFriend} className="form">
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Name..."
          onChange={this.changeHandler}
        />
        <input
          type="number"
          name="age"
          value={age}
          placeholder="age.."
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={this.changeHandler}
        />
        <button type="submit">Create Friend</button>
      </form>
    );
  }
}

export default CreateFriend;
