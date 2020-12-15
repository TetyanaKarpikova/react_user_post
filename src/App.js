import React, { Component } from 'react';
import './App.css';
import AllUsers from './components/allUsers/AllUsers';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to={'/users'}>users</Link>
          </div>

          <div className={'app-route'}>
            <Switch>
              <Route path={'/users'} render={() => {
                return <AllUsers />
              }}>

              </Route>
            </Switch>
          </div>

        </div>
      </Router>
    )
  }

}
export default App;
