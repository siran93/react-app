import Post from './../MyPosts/Post/Post';
import style from './MyPosts.module.css';
import React from 'react';

const MyPosts = () => {
    return (
        <div className={style.posts}>
            <div className={style.send_post}>
                <h2>My posts</h2>
                <textarea placeholder='your post...'/>
                <button>Send</button>
            </div>
            <div className={style.post_replies}>
                <Post postText='- Hey, why nobody love me?'/>
                <Post postText='- I am fine'/>
                <Post postText='- What about you?'/>
            </div>
        </div>
    )
}

export default MyPosts;