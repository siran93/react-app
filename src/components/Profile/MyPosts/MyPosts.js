import React from 'react';
import s from './MyPosts.module.css';
import Post from './../MyPosts/Post/Post';

const MyPosts = () => {
    return (
        <div className={s.posts}>
            <div className={s.send_post}>
                <h2>My posts</h2>
                <textarea placeholder='your post...'/>
                <button>Send</button>
            </div>
            <div className={s.post_replies}>
                <Post postText='- Hey, why nobody love me?'/>
                <Post postText='- I am fine'/>
                <Post postText='- What about you?'/>
            </div>
        </div>
    )
}

export default MyPosts;