import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class Form extends React.Component {
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

  submitHandler = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend);
    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      }
    });
  };

  changeHandler = e => {
    const target = e.target;
    let value = target.value;
    let name = target.name;
    if (name === 'age') {
      value = parseInt(value, 10);
    }
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [name]: value
      }
    }));
  };

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
export default Form;
