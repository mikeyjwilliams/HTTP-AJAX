import React from 'react';

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
  };

  render() {
    return (
      <form>
        <input type="text" name="name" onChange={this.changeHandler} />
      </form>
    );
  }
}
export default Form;
