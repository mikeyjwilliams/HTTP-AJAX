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
      age: 0,
      email: '',
      friend: []
    };
  }

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
    return (
      <Card className={`${jsClasses.card} mdc-card`}>
        <CardContent>
          <form className="form input">
            <input
              type="text"
              name="name"
              onChange={this.changeHandler}
              placeholder="Name..."
              className="name-input input"
            />

            <input
              type="number"
              name="number"
              onChange={this.changeHandler}
              placeholder="Age..."
              className="age-input input"
            />
          </form>
        </CardContent>
      </Card>
    );
  }
}
export default Form;
