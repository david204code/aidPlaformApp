import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SignUp from '../components/forms/signUp'
import SignIn from '../components/forms/signIn'
import Map from '../components/map'


class App extends React.Component {
  render () {
    return (
      <div>
        {/* <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
          Tooltip on top
        </button>
        <p class="display-1">This is the App.js</p> */}
        <Switch>
          <Route exact path ="/signup" component ={SignUp} />
          <Route exact path ="/signin" component ={SignIn} />
          <Route exact path ="/map" component ={Map} />
        </Switch>
      </div>
    )
  }
}

export default App