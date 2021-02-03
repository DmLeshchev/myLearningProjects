import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://s0.rbk.ru/v6_top_pics/media/img/1/83/756079611261831.jpg"/>
        {props.message}
      <div>
        <span>Like [{props.likeCount || 0}]</span>
      </div>
    </div >
  )
}

export default Post;