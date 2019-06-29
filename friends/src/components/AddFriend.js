import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import EditFriend from './CreateFriend';

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  addFriend = e => {
    e.preventDefault();
    const { name, age, email } = this.state;
    const friend = { name, age, email };
    console.log('FRIEND', friend);
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(response => {
        //this.setState({ friends: response.data });
        this.props.updateFriend(response.data);

        this.props.history.push('/');
      })
      .catch(error => console.log(error));
  };

  changeHandler = e => {
    const target = e.target;
    let value = target.value;
    let name = target.name;
    if (name === 'age') {
      value = parseInt(value, 10);
    }
    this.setState({
      [name]: value
    });
  };

  render() {
    const { name, age, email } = this.state;
    return (
      <Card className={`mdc-card`}>
        <CardContent>
          <form className="form input" onSubmit={this.addFriend}>
            <input
              type="text"
              name="name"
              onChange={this.changeHandler}
              placeholder="Name..."
              className="name-input input"
              value={name}
            />

            <input
              type="number"
              name="age"
              onChange={this.changeHandler}
              placeholder="Age..."
              className="age-input input"
              value={age}
            />

            <input
              type="email"
              name="email"
              onChange={this.changeHandler}
              placeholder="Email..."
              className="email-input input"
              value={email}
            />

            <button type="submit" className="submit-button">
              Create Friend
            </button>
          </form>
        </CardContent>
      </Card>
    );
  }
}
export default AddFriend;
