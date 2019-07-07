import React from 'react';
import axios from 'axios';

class CreateFriend extends React.Component {
  constructor() {
    super();
    this.state = {
      friend: {
        name: '',
        age: 0,
        email: '',
        errorMessage: null
      }
    };
  }
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log('value', e.target.value);
    e.preventDefault();
  };

  buildFriend = e => {
    e.preventDefault();

    const { name, age, email } = this.state.friend;
    const numAge = Number(age);
    const theFriend = { name, numAge, email };

    axios
      .post('http://localhost:5000/friends', theFriend)
      .then(res => {
        this.props.updateFriendsList(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { name, age, email } = this.state.friend;
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
        <button onSubmit={this.buildFriend} type="submit">
          Create Friend
        </button>
      </form>
    );
  }
}

export default CreateFriend;
