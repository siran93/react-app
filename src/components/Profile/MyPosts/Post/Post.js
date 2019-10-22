import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.reply_item}>
            <div className={s.avatar_bg}/>
            <p>Hey, why nobody love me?</p>
        </div>
    )
}

export default Post;