import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import small from '../../assets/photos_small.png';
import { UserType } from '../../redux/types.ts/type';

type PropsType = {
  user: UserType
  onFollowUser: (id:number) => void
  onUnFollowUser: (id:number)=>void
}


const User:React.FC<PropsType> = ({ user, onFollowUser, onUnFollowUser }) => {
  const followUser = () => {
    onFollowUser(user.id);
  };

  const unFollowUser = () => {
    onUnFollowUser(user.id);
  };

  return (
    <>
      <div className='users__user'>
        <div className='user__about'>
          <Link to={'./profile/' + user.id}>
            {user.photos.small ? (
              <img src={user.photos.small} alt='' />
            ) : (
              <img src={small} alt='' />
            )}
          </Link>
          <div className='user__info'>
            <Link to={'./profile/' + user.id} className='user__name'>
              {user.name}
            </Link>
            <p className='user__status'>{user.status}</p>
          </div>
        </div>
        <div className='user__isfollow'>
          {user.followed ? (
            <button className='unFollow' onClick={unFollowUser}>
              Отписаться
            </button>
          ) : (
            <button onClick={followUser}>Подписаться</button>
          )}
        </div>
      </div>
      <hr />
    </>
  );
}

export default User;
