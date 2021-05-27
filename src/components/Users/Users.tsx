import React, { useEffect } from 'react';
import User from './User';
import Pagination from '../Pagination';

import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import { fetchUsers, followTH, unFollowTH } from '../../redux/thunk/users';
import { UserType } from '../../redux/types.ts/type';
import { AppStateType } from '../../redux/store';

type StatePropsType = {
  users: Array<UserType>
  totalUsersCount: number
  pageSize: number
  currentPage: number
  isLoader:boolean
}

const Users:React.FC<any> = () => {
  const { users, totalUsersCount, pageSize, currentPage, isLoader } = useSelector((state:AppStateType):StatePropsType => ({
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

  const onChangeCurrentPage = (page:number) => {
    dispatch(fetchUsers(page));
  };

  const onFollowUser = (id:number) => {
    dispatch(followTH(id));
  };
  const onUnFollowUser = (id:number) => {
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
              users.map((user:UserType, i:number) => (
                <User
                  key={user.id}
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
