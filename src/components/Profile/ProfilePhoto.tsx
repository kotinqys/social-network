import React, { useState } from 'react';
import { PhotosType } from '../../redux/types.ts/type';
import url from '../../assets/photos_small.png'

type PropsType = {
  photos:PhotosType
  isItMe: boolean
  savePhoto : (photo:FileList)=>void
}

const ProfilePhoto: React.FC<PropsType> = ({ photos, isItMe,savePhoto }) => {
  


  const [visibleInput, setVisibleInput] = useState(false);
  const [photo,setPhoto] = useState<any>()

  const onVisible = () => {
    setVisibleInput(!visibleInput);
  };

  const onChangePhoto = () => {
    setVisibleInput(!visibleInput)
    savePhoto(photo)
  };

  const onSavePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
        setPhoto(e.target.files[0]);
    }
  }
  return (
    <div className='profile__photo'>
      <img
        src={
          photos.large ??
          url
        }
        alt=''
      />
      {visibleInput && <input type='file' onChange={ onSavePhoto }/>}
      <div className='button-edit'>
        {isItMe &&
          (!visibleInput ? (
            <button className='edit' onClick={onVisible}>
              Редактировать
            </button>
          ) : (
            <>
              <button onClick={onChangePhoto}>Сохранить</button>
              <button onClick={onVisible}>Отмена</button>
            </>
          ))}
      </div>
    </div>
  );
}

export default ProfilePhoto;
