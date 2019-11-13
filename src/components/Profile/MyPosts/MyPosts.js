import Post from './../MyPosts/Post/Post';
import style from './MyPosts.module.css';
import React from 'react';

const MyPosts = (props) => {

    let postData = [
        {id: 1, message: 'Hey, why nobody love me?', likesCount: '12'},
        {id: 2, message: 'I am fine', likesCount: '3'},
        {id: 3, message: 'What about you?', likesCount: '11'}
    ]

    return (
        <div className={style.posts}>
            <div className={style.send_post}>
                <h2>My posts</h2>
                <textarea placeholder='your post...'/>
                <button>Send</button>
            </div>
            <div className={style.post_replies}>
                <Post message={postData[0].message} id={postData[0].id} likesCount={postData[0].likesCount} />
                <Post message={postData[1].message} id={postData[1].id} likesCount={postData[1].likesCount} />
                <Post message={postData[2].message} id={postData[2].id} likesCount={postData[2].likesCount} />
            </div>
        </div>
    )
}

export default MyPosts;