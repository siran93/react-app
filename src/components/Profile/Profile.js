import React from 'react';
import profile from'./Profile.module.css';

const Profile = () => {
    return (
        <div className={profile.content}>
            <div className={profile.cover_photo}>
                <img src='http://montanusphotography.com/coverphotos/WiscoyFalls-CharlotteNY-MontanusPhoto.jpg'/>

            </div>
            <div className={profile.avatar_desc}>
                <div className={profile.avatar}>
                    <img
                        src='https://image.freepik.com/free-vector/man-character-avatar-icon-gentleman-with-cane-wearing-brown-tweed-costume-bowler_51635-2326.jpg'/>
                </div>
                <div className={profile.desc}>
                    <h2>John Smith</h2>
                    <p>Date of birth: 2 june</p>
                    <p>City: California</p>
                    <p>Education: York</p>
                    <p>Web Site: website.com</p>
                </div>
            </div>
            <div className={profile.posts}>
                <div className={profile.send_post}>
                    <h2>My posts</h2>
                    <textarea placeholder='your post...'/>
                    <button>Send</button>
                </div>
                <div className={profile.post_replies}>
                    <div className={profile.reply_item}>
                        <div className={profile.avatar_bg} />
                        <p>Hey, why nobody love me?</p>
                    </div>
                    <div className={profile.reply_item}>
                        <div className={profile.avatar_bg} />
                        <p>Hey, why nobody love me?</p>
                    </div>
                    <div className={profile.reply_item}>
                        <div className={profile.avatar_bg}/>
                        <p>Hey, why nobody love me?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;