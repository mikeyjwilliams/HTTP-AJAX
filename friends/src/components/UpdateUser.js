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

  render() {
    const { name, age, email } = this.state;
    return (
      <div>
        <h2>{name}</h2>
        <h3>{age}</h3>
        <h3>{email}</h3>
        <div />
      </div>
    );
  }
}
export default UpdateUser;
