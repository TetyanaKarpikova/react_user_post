import React, { Component } from 'react';
import '../../style/PostStyle.css';

import {
    withRouter} from 'react-router-dom';

class NewPost extends Component {

    render() {
        let { item } = this.props;

        return (
            <div className={'baseNewPost'}>
                <div className={'basePostTitle'}>
                    {item.id} - {item.title}
                </div>
                <div className={'basePostBody'}>
                    {item.body}
                </div>
            </div>
        )
    }

}
export default withRouter(NewPost);