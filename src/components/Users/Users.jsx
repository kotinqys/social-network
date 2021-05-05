import React, { useEffect } from 'react';
import User from './User';
import Pagination from '../Pagination';

import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import { fetchUsers, followTH, unFollowTH } from '../../redux/thunk/users';

function Users() {
  const { users, totalUsersCount, pageSize, currentPage, isLoader } = useSelector((state) => ({
    users: state.users.users,
    totalUsersCount: state.users.totalUsersCount,
    pageSize: state.users.pageSize,
    currentPage: state.users.currentPage,
    isLoader: state.users.isLoader,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onChangeCurrentPage = (page) => {
    dispatch(fetchUsers(page));
  };

  const onFollowUser = (id) => {
    dispatch(followTH(id));
  };
  const onUnFollowUser = (id) => {
    dispatch(unFollowTH(id));
  };
  return (
    <div className='users-page'>
      <>
        <Pagination
          totalItemsCount={totalUsersCount}
          pageSize={pageSize}
          portionSize={10}
          currentPage={currentPage}
          onChangeCurrentPage={onChangeCurrentPage}
        />
        {!isLoader ? (
          <Loader />
        ) : (
          <div className='users'>
            {users &&
              users.map((user, i) => (
                <User
                  key={user + i}
                  user={user}
                  onFollowUser={onFollowUser}
                  onUnFollowUser={onUnFollowUser}
                />
              ))}
          </div>
        )}
      </>
    </div>
  );
}
export default Users;
