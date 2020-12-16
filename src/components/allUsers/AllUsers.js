import {Component} from 'react';
import UserService from '../../service/userService';
import {
    Route,
    withRouter
} from 'react-router-dom';


import User from '../user/User';
import FullUser from '../fullUser/FullUser';
import NewPost from '../post/NewPost';


class AllUsers extends Component {
    userService = new UserService();
    state = {users: [], posts: [], chosePost: null};

    async componentDidMount() {
        let users = await this.userService.user();
        let posts = await this.userService.post();
        this.setState({users, posts});
    }

    onSelectPost = (id) => {
        let {posts} = this.state;
        let postUser = posts.filter(value => (value.userId === id))
        this.setState({chosePost: postUser});
    }

    render() {
        let {users, chosePost} = this.state;
        let {match: {url}} = this.props;

        return (
            <div>
                {
                    users.map(value => (<User item={value} key={value.id} onSelectPost={this.onSelectPost}/>))
                }
                <div>
                    <Route
                        path={`${url}/:id`}
                        render={({match: {params: {id}}}) => {
                            return <FullUser idUser={id} key={id}/>
                        }
                        }/>

                </div>
                <hr/>
                <div>
                    {chosePost && chosePost.map(value => (<NewPost item={value} key={value.id}/>))}
                </div>

            </div>
        )
    }

}

export default withRouter(AllUsers);
