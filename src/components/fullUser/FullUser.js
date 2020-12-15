import React, { Component } from 'react';
import UserService from '../../service/userService';


class FullUser extends Component {

    userService = new UserService();
    state = { user: null };

    async componentDidMount() {
        const { idUser } = this.props;
        let user = await this.userService.userOne(idUser);
        this.setState({ user });
    }

    render() {
        let { user } = this.state;

        return (
            <div>
                <hr />
                {user && <div className={'userStyle'}> {user.name}  "{user.username}" <br />
                                Email: {user.email}  <br />
                                Phone: {user.phone} <br />
                                Website: {user.website}</div>}
            </div>
        )
    }

}
export default FullUser;