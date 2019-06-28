import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class EditFriend extends React.Component {
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

  componentDidMount() {
    const id = Number(this.props.match.params.id);

    axios
      .get(`http://localhost:friends/${id}`)
      .then(res => {
        const { name, age, email } = res.data;
        this.setState({ name, age, email });
      })
      .catch(err => {
        console.log(err.Error);
      });

    // grab id off url
    // get request for list of friends
    // loop through list of friends  for matching id.matching id from line 10
    // set state with that friend.
  }

  render() {
    const { name, age, email } = this.state;
    return (
      <Card className={`mdc-card`}>
        <CardContent>
          <form className="form input" onSubmit={this.submitHandler}>
            {' '}
            {/* post  handler onSubmit */}
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
export default EditFriend;
