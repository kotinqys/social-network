import React, { useState } from 'react';
import { PhotosType } from '../../redux/types.ts/type';

type PropsType = {
  photos:PhotosType
  isItMe:boolean
}

const ProfilePhoto:React.FC<PropsType> = ({ photos, isItMe })  =>{
  const [visibleInput, setVisibleInput] = useState(false);

  const onVisible = () => {
    setVisibleInput(!visibleInput);
  };

  const onchangePhoto = () => {};
  return (
    <div className='profile__photo'>
      <img
        src={
          photos.large ??
          'https://sun9-72.userapi.com/impg/BTTPhoECky4NqwKOT8tkgmG5y5-00GAKCWHyWA/9QeIgD2D1OA.jpg?size=640x882&quality=96&sign=08bd341eb1fb284531b265f6733b4733&type=album'
        }
        alt=''
      />
      {visibleInput && <input type='file' />}
      <div className='button-edit'>
        {isItMe &&
          (!visibleInput ? (
            <button className='edit' onClick={onVisible}>
              Редактировать
            </button>
          ) : (
            <>
              <button onClick={onchangePhoto}>Сохранить</button>
              <button onClick={onVisible}>Отмена</button>
            </>
          ))}
      </div>
    </div>
  );
}

export default ProfilePhoto;
