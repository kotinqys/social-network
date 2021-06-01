import React, { useState } from 'react';
import moment from 'moment';

import Posts from './Posts';
import ProfilePhoto from './ProfilePhoto';
import { ProfileType } from '../../redux/types.ts/type';

type PropsType = {
  profile: ProfileType
  status: string | null
  isItMe: boolean
  onChangeProfileStatus: (data: any) => void
  savePhoto:(photo:FileList)=>void
}

const Profile:React.FC<PropsType> = ({ profile, status, isItMe, onChangeProfileStatus,savePhoto }) => {
  const [statusInp, setStatusInp] = useState(false);

  const writeStatus = () => {
    setStatusInp(true);
  };

  const onKeyPressHandle = (e: any) => {
    if (e.key === 'Enter') {
      setStatusInp(false);
      onChangeProfileStatus(e.target.value)
    }
  };

  const onChangeStatus = (e: any) => {
    setStatusInp(e.target.value);
  };


  return (
    <div className='profile'>
      <div className='profile__about'>
        <ProfilePhoto {...profile} isItMe={isItMe} savePhoto={savePhoto}/>
        <div className='profile__title'>
          <h4>{profile.fullName}</h4>

          <div className='profile__status'>
            {isItMe
              ? statusInp ? (
              <input onKeyPress={onKeyPressHandle} onChange={onChangeStatus} type='text' />
            ) : (
              <p onClick={writeStatus}>{status}</p>
              )
              : <p>{ status }</p>
            }
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
