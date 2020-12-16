import React from 'react';
import '../../style/PostStyle.css';

const NewPost = ({item}) => {

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
export default NewPost;
