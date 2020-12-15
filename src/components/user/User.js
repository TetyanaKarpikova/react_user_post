import React, { Component } from 'react';
import '../../style/UserStyle.css';
import {
  withRouter,
  NavLink
} from 'react-router-dom';

class User extends Component {

  render() {
    let { item, match: { url }, onSelectPost } = this.props;

    return (
      <div className={'userTop'}>
        <div className={'userName'}>
          {item.id} - {item.name}
        </div>
        <div className={'userLink'}>
          <NavLink to={`${url}/${item.id}`}>user info</NavLink>      <button onClick={() => onSelectPost(item.id)}>posts</button>
        </div>


      </div>
    )
  }

}
export default withRouter(User);