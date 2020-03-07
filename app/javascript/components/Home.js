import React, { Component } from 'react';
import SignUp from '../components/forms/signUp';
import SignIn from '../components/forms/signIn';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleLogOutClick() {
    axios
    .delete("http://localhost:3000/users/sign_out", { withCredentials: true})
    .then(response => {
      this.props.handleLogOut();
    })
    .catch(error => {
      console.log("logout error", error);
    });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <button onClick={() => this.handleLogOutClick()}>LogOut</button>
        <SignUp handleSuccessfulAuth ={this.handleSuccessfulAuth} />
        <SignIn handleSuccessfulAuth ={this.handleSuccessfulAuth} />
      </div>
    )
  }
} 