import Post from './../MyPosts/Post/Post';
import style from './MyPosts.module.css';
import React from 'react';

const MyPosts = (props) => {

    let postsElements = props.postData.map((post) => <Post message={post.message} id={post.id} likesCount={post.likesCount} /> );
    return (
        <div className={style.posts}>
            <div className={style.send_post}>
                <h2>My posts</h2>
                <textarea placeholder='your post...'/>
                <button>Send</button>
            </div>
            <div className={style.post_replies}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;