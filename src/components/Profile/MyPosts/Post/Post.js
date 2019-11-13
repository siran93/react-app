import style from './Post.module.css';
import React from 'react';

const Post = (props) => {
    return (
        <div className={style.reply_item}>
            <div className={style.avatar_bg}/>
            <p>{props.message}</p>
        </div>
    )
}

export default Post;