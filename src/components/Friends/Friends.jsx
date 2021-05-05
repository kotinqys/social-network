import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriends } from '../../redux/thunk/friends';
import Friend from './Friend';
import { Redirect } from 'react-router';
import Loader from '../Loader';

function Friends(props) {
  const dispatch = useDispatch();
  const { friends, totalCount, isAuth, isLoader } = useSelector((state) => ({
    friends: state.friends.friends,
    totalCount: state.friends.totalCount,
    isAuth: state.auth.isAuth,
    isLoader: state.friends.isLoader,
  }));

  useEffect(() => {
    dispatch(getFriends());
  }, []);

  if (!isAuth) {
    return <Redirect to='/login' />;
  }

  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <div className='friends'>
          <div className='friends__title'>Все друзья {totalCount}</div>
          <hr />
          {friends &&
            friends.map((user, index) => {
              return <Friend key={user + index} user={user} />;
            })}
        </div>
      )}
    </>
  );
}

export default Friends;
