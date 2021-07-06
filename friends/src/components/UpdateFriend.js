import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class UpdateFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  changeHandler = e => {
    let val = e.target.value;
    if (e.target.name === 'age') {
      val = Number(e.target.value);
    }
    this.setState({
      [e.target.name]: val
    });
  };

  updatehandler = e => {
    e.preventDefault();
    const { name, age, email } = this.state;
    const friend = { name, age, email };
    axios
      .post(`http://localhost:5000/friends`, friend)
      .then(response => {
        this.props.updateFriend(response.data);

        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  render() {
    const { name, age, email } = this.state;
    return (
      <Card className={`mdc-card`}>
        <CardContent>
          <form className="form input" onSubmit={this.updateHandler}>
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
export default UpdateFriend;
