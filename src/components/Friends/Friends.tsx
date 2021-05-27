import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriends } from '../../redux/thunk/friends';
import Friend from './Friend';
import { Redirect } from 'react-router';
import Loader from '../Loader';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { AppStateType } from '../../redux/store';
import { UserType } from '../../redux/types.ts/type';

type StatePropsType = {
  friends: Array<UserType>
  totalCount: number | null
  isAuth: boolean
  isLoader: boolean
}

const Friends = ()  => {
  const dispatch = useDispatch();
  const { friends, totalCount, isAuth, isLoader } = useSelector((state:AppStateType):StatePropsType => ({
    friends: state.friends.friends,
    totalCount: state.friends.totalCount,
    isAuth: state.auth.isAuth,
    isLoader: state.friends.isLoader,
  }));

  useEffect(() => {
    dispatch(getFriends());
  }, []);

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <div className='friends'>
          <div className='friends__title'>Все друзья {totalCount}</div>
          <hr />
          {friends &&
            friends.map((user) => {
              return <Friend key={user.id} user={user} />;
            })}
        </div>
      )}
    </>
  );
}
const AuthRedirectComponent = withAuthRedirect(Friends);
export default AuthRedirectComponent;
