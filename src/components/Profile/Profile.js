import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './../Profile/MyPosts/MyPosts';
import profile from './Profile.module.css'

const Profile = () => {
    return (
        <div className={profile.content}>
           <ProfileInfo/>
           <MyPosts/>
        </div>
    )
}

export default Profile;