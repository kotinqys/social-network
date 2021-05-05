import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, withRouter } from 'react-router';

import Profile from './Profile';

import { fetchProfile, fetchProfileStatus } from '../../redux/thunk/profile';
import Loader from '../Loader';

function ProfileContainer(props) {
  let userId = props.match.params.userId;
  if (!userId) {
    userId = 14794;
  }
  const { profile, status, isLoader, isAuth, id } = useSelector((state) => ({
    profile: state.profile.profile,
    status: state.profile.status,
    isLoader: state.profile.isLoader,
    isAuth: state.auth.isAuth,
    id: state.auth.id,
  }));
  const dispatch = useDispatch();

  //Проверка твоя ли это страничка
  const isItMe = id === userId;

  useEffect(() => {
    dispatch(fetchProfile(userId));
    dispatch(fetchProfileStatus(userId));
  }, [dispatch, userId]);

  //Нужно сделать HOC
  if (!isAuth) {
    return <Redirect to='/login' />;
  }

  return (
    <>
      {!isLoader && profile !== null ? (
        <Profile profile={profile} status={status} isItMe={isItMe} dispatch={dispatch} />
      ) : (
        <Loader />
      )}
    </>
  );
}

export default withRouter(ProfileContainer);
