import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    mainWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 18
  },
  pos: {
    marginBottom: 12
  }
});

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    };
  }

  submitHandler = e => {
    e.preventDefault();
  };

  changeHandler = e => {
    console.log(e.target.value);
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    const jsClasses = useStyles;
    const { name, age, email } = this.state;
    return (
      <Card className={`${jsClasses.card} mdc-card`}>
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

            <button type="submit">Create Friend</button>
          </form>
        </CardContent>
      </Card>
    );
  }
}
export default Form;
