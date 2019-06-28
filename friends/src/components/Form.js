import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
//   card: {
//     minWidth: 275
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)'
//   },
//   title: {
//     fontSize: 18
//   },
//   pos: {
//     marginBottom: 12
//   }
// });

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.addFriend(this.state.item);
    this.setState({
      item: {
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
    if (name === 'price') {
      value = parseInt(value, 10);
    }
    this.setState(prevState => ({
      item: {
        ...prevState.item,
        [name]: value
      }
    }));
  };

  render() {
    // const jsClasses = useStyles;
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
