import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.reply_item}>
            <div className={s.avatar_bg}/>
            <p>{props.postText}</p>
        </div>
    )
}

export default Post;