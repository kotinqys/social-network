import React, { useState } from 'react';
import moment from 'moment';

import Posts from './Posts';
import { changeProfileStatus } from '../../redux/thunk/profile';
import ProfilePhoto from './ProfilePhoto';

function Profile({ profile, status, isItMe, dispatch }) {
  const [statusInp, setStatusInp] = useState(false);

  const writeStatus = () => {
    setStatusInp(true);
  };

  const onKeyPressHandle = (e) => {
    if (e.key === 'Enter') {
      setStatusInp(false);
      dispatch(changeProfileStatus(statusInp));
    }
  };

  const onChangeStatus = (e) => {
    setStatusInp(e.target.value);
  };

  return (
    <div className='profile'>
      <div className='profile__about'>
        <ProfilePhoto {...profile} isItMe={isItMe} />
        <div className='profile__title'>
          <h4>{profile.fullName}</h4>

          <div className='profile__status'>
            {statusInp ? (
              <input onKeyPress={onKeyPressHandle} onChange={onChangeStatus} type='text' />
            ) : (
              <p onClick={writeStatus}>{status}</p>
            )}
          </div>

          <hr />
          <div className='profile__more-information'>
            <div className='birthday'>
              Дата рождения:<span>{moment().format('LL')}</span>
            </div>
            <div className='city'>
              Город:<span>....................</span>
            </div>
          </div>
        </div>
      </div>
      {isItMe && <Posts />}
    </div>
  );
}

export default Profile;
