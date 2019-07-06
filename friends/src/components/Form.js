import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: this.props.name,
                age: this.props.age,
                email: this.props.email
            }
            
        }
    }

    render() {
        const {name, age, email } = this.state.friend;
        return(
            <form className="form input" onSubmit={this.props.formHandler}>
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
                  {this.props.button}
                </button>
              </form>
        )
    }
    
}
export default Form;