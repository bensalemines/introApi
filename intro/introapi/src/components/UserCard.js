import React from 'react';
import images from './images';

const UserCard = (props) => {
  return (
    <div class="box">
    <div class="Card">
      <div class="imgBx">
          <img src={images[Math.floor(Math.random() * 14)] } alt="images"/>
      </div>
      <div class="details">
          <h2 className='username'>{props.users.name}{""}<span>{props.users.username}</span></h2>
      </div>
    </div>
    </div>
  )
}

export default UserCard