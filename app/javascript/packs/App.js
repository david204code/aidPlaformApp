import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from '../components/forms/signUp';
import SignIn from '../components/forms/signIn';
import Map from '../components/map';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';

class App extends React.Component {
  constructor() {
    super();

    this.state ={
      loggedInStatus: "Not_Logged_In",
      user: {}
    }

    this.handleLogin =this.handleLogin.bind(this);
    this.handleLogOut =this.handleLogOut.bind(this);
  }

  checkLoginStatus() {
    this.checkLoginStatus();
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "Logged_In",
      user: data.user
    });
  }

  handleLogOut() {
    this.setState({
      loggedInStatus: "Not_Logged_In",
      user: {}
    })
  }

  render () {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path ="/signup" component ={SignUp} />
            <Route exact path ="/signin" component ={SignIn} />
            <Route exact path ="/map" component ={Map} />
            <Route
              exact path ="/"
              render ={props => (
                <Home {...props}
                handleLogin ={this.handleLogin}
                handleLogOut ={this.handleLogOut}
                loggedInStatus ={this.state.loggedInStatus} />
              )}
            />
            {/* <Route exact path ="/home" component ={Home} /> */}
            <Route 
              exact path ="/dashboard" 
              render ={props => (
                <Dashboard {...props}
                loggedInStatus ={this.state.loggedInStatus} />
              )}
            />
            
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App