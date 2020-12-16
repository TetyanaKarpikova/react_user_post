import React, { Component } from 'react';
import './App.css';
import AllUsers from './components/allUsers/AllUsers';

import {  Route, Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
        <div>
          <div>
            <Link to={'/users'}>users</Link>
          </div>
          <div className={'app-route'}>
              <Route path={'/users'} component={AllUsers}/>
          </div>
        </div>
    )
  }

}
export default App;
