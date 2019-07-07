import React from 'react';
import axios from 'axios';

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      friends: []
    };
  }

  // put is for existing data and post is for new data!!!!

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends/`)
      .then(response => {
        console.log(response.data);
        this.setState({ friends: response.data });

        const findFriend = this.state.friends.find(
          friend => friend.id === Number(this.props.match.params.id)
        );
        if (findFriend === undefined) {
          console.log('lost found', undefined);
        } else {
          console.log('found', findFriend);
          const { name, age, email } = findFriend;
          this.setState({ name, age, email });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  editFriend = e => {
    e.preventDefault();
    const id = this.props.match.params.id;
    console.log(id);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, age, email } = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.editFriend}>
          <input
            type="text"
            onChange={this.handleChange}
            value={name}
            name="name"
          />
          <input
            type="number"
            onChange={this.handleChange}
            value={age}
            name="age"
          />
          <input
            type="email"
            onChange={this.handleChange}
            value={email}
            name="email"
          />
          <button type="submit">Update Friend</button>
        </form>
      </div>
    );
  }
}
export default UpdateUser;
