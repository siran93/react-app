import style from './ProfileInfo.module.css';
import React from 'react';

const ProfileInfo = (props) => {
    return(
        <div>
            <div className={style.cover_photo}>
                <img src='http://montanusphotography.com/coverphotos/WiscoyFalls-CharlotteNY-MontanusPhoto.jpg'/>

            </div>
            <div className={style.avatar_desc}>
                <div className={style.avatar}>
                    <img
                        src='https://image.freepik.com/free-vector/man-character-avatar-icon-gentleman-with-cane-wearing-brown-tweed-costume-bowler_51635-2326.jpg'/>
                </div>
                <div className={style.desc}>
                    <h2>John Smith</h2>
                    <p>Date of birth: 2 june</p>
                    <p>City: California</p>
                    <p>Education: York</p>
                    <p>Web Site: website.com</p>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;