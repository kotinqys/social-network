import React from 'react';
import { Link } from 'react-router-dom';
import small from '../../assets/photos_small.png';

function Friend({ user }) {
  return (
    <>
      <div className='friend'>
        <Link to={'/profile/' + user.id}>
          <img src={user.photos.small ?? small} alt='' />
        </Link>
        <div className='friend__body'>
          <Link to={'/profile/' + user.id}>
            <h4>{user.name}</h4>
          </Link>
          <p>{user.status}</p>
          <Link to='/messages'>Написать сообщение</Link>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Friend;
