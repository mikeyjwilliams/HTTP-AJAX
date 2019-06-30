import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class CreateFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  componentDidMount() {
    // const id = this.props.friends.find(
    //   key => Number(key.id) === Number(this.props.match.params.id)
    // );

    //const id = Number(this.props.match.params.id);

    axios
      .get(`http://localhost:/friends/`)
      .then(res => {
        console.log('res', res, typeof res);
      })
      .catch(err => {
        console.log(err);
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
              {/* <Link to={`/edit/${id}`}> Create Friend</Link> */}
            </button>
          </form>
        </CardContent>
      </Card>
    );
  }
}
export default CreateFriend;
