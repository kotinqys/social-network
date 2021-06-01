import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router'; 
import { changeProfileStatus,savePhoto } from '../../redux/thunk/profile';

import Profile from './Profile';

import { fetchProfile, fetchProfileStatus } from '../../redux/thunk/profile';
import Loader from '../Loader';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { AppStateType } from '../../redux/store';
import { ProfileType } from '../../redux/types.ts/type';

type PropsType = {
  match:any
}

type StatePropsType = {
  profile: ProfileType | null
  status: string | null
  isLoader: boolean
  id: number | null
}
const ProfileContainer:React.FC<PropsType> = (props) => {
  let userId = props.match.params.userId;

  const { profile, status, isLoader, id } = useSelector((state:AppStateType):StatePropsType => ({
    profile: state.profile.profile,
    status: state.profile.status,
    isLoader: state.profile.isLoader,
    id: state.auth.id,
  }));
  const dispatch = useDispatch();

  if (!userId) {
    userId = id;
  }

  //Проверка твоя ли это страничка
  const isItMe = id === userId;

  //Даже если я авторизован меня при перезагрузки страницы редиректит в логин такого не должно быть
  //Auth me асинхронный запрос, по этому у меня сперва отрисовывает профил, потом редиректит, а потом уже auth me возвращает ответ
  //НУЖНО С ЭТИМ ЧТО-ТО СДЕЛАТЬ!!!
  useEffect(() => {
    dispatch(fetchProfile(userId));
    dispatch(fetchProfileStatus(userId));
  }, [dispatch, userId]);

  const onChangeProfileStatus = (data:any) => {
    dispatch(changeProfileStatus(data));
  }

  const onSavePhoto = (photo:FileList) => {
    dispatch(savePhoto(photo))
  }
  return (
    <>
      {!isLoader && profile !== null ? (
        <Profile profile={profile} status={status} isItMe={isItMe} onChangeProfileStatus={onChangeProfileStatus} savePhoto={ onSavePhoto}/>
      ) : (
        <Loader />
      )}
    </>
  );
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

export default withRouter(AuthRedirectComponent);
