import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUp from '../components/forms/signUp';
import SignIn from '../components/forms/signIn';
import Map from '../components/map';
import Home from '../components/Home';
import Dashboard from '../components/Dashboard';

class App extends React.Component {
  render () {
    return (
      <div>
        {/* <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
          Tooltip on top
        </button>
        <p class="display-1">This is the App.js</p> */}
        <BrowserRouter>
          <Switch>
            <Route exact path ="/signup" component ={SignUp} />
            <Route exact path ="/signin" component ={SignIn} />
            <Route exact path ="/map" component ={Map} />
            <Route exact path ="/home" component ={Home} />
            <Route exact path ="/dashboard" component ={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App