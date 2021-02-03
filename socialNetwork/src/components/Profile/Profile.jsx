import React from 'react';
import MyPosts from './My posts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}> 
          <img src="https://content.skyscnr.com/m/1b51182679225810/original/GettyImages-147444574_doc.jpg?resize=1800px:1800px&quality=100" />
          <div>
            ava + desc
          </div>
          <MyPosts/>
    </div>
  )
}

export default Profile;