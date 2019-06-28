import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class EditFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: '',
        age: '',
        email: '',
        errorMessage: null
      }
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    console.log('id', id, typeof id);

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
