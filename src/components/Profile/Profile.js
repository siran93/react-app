import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './../Profile/MyPosts/MyPosts';
import style from './Profile.module.css'
import React from 'react';

const Profile = () => {
    return (
        <div className={style.content}>
           <ProfileInfo/>
           <MyPosts/>
        </div>
    )
}

export default Profile;