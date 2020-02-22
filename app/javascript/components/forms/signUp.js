import React from 'react';
import "./signUp.css";

class SignUp extends React.Component {
  render() {
    return (
      <form className ="">
        <label>
          Name:
          <input type ="text" name ="name" />
        </label>
        <input type ="submit" value ="Submit" />
      </form>
    )
  }
}

export default SignUp