import React from 'react';
import axios from 'axios';

class UpdateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }
  componentDidMount() {
    const findFriend = this.props.match.params.id;

    axios
      .get(`http:/localhost:3000/friend/${findFriend}`)
      .then(response => {
        const { name, age, email } = response.data;
        this.setState({ name, age, email });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state);
    const { name, age, email } = this.state;
    return (
      <div>
        <h2>{name}</h2>
        <h3>{age}</h3>
        <h3>{email}</h3>
      </div>
    );
  }
}
export default UpdateUser;
