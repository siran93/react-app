import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './../Profile/MyPosts/MyPosts';
import style from './Profile.module.css'
import React from 'react';

const Profile = (props) => {

    return (
        <div className={style.content}>
           <ProfileInfo/>
           <MyPosts postData={props.postData}/>
        </div>
    )
}

export default Profile;