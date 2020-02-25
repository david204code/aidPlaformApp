import React from 'react';
import "./signIn.css";
import axios from 'axios';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      signInErrors: ""
    };

    this.handleSubmit =this.handleSubmit.bind(this);
    this.handleChange =this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    axios.post("http://localhost:3000/users/sign_in", {
      user: {
        email: this.state.email,
        password: this.state.password
      }
    },
    { withCredentials: true }
    ).then(response => {
      console.log("respond from login", response);
    })
    .catch(error => {
      console.log("login error", error);
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit ={this.handleSubmit} className ="">
        <input 
          type ="email"
          name ="email"
          placeholder ="Your Email"
          value ={this.state.email}
          onChange ={this.handleChange}
          required
        />

        <input 
          type ="password"
          name ="password"
          placeholder ="Your Password"
          value ={this.state.password}
          onChange ={this.handleChange}
          required
        />

       <button type ="submit">Log In</button>
      </form>
    )
  }
}

export default SignIn