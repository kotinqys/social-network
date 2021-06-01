import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import turnDown from '../../assets/turn-down.png';
import { AppStateType } from '../../redux/store';

import { fetchAuth, logout } from '../../redux/thunk/auth';
import photo from '../../assets/photos_small.png'

type StatePropsType = {
  isAuth: boolean
  login: string | null
  id: number | null
}

const Header:React.FC<any> = () => {
  const dispatch = useDispatch();
  const { isAuth,login,id } = useSelector((state: AppStateType): StatePropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    id: state.auth.id
  }));

  const [visible, setVisible] = useState(false);

  const onVisisble = () => {
    setVisible(!visible);
  };
  const onLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(fetchAuth());
  }, []);

  return (
    <div className='header'>
      <div className='container'>
        <div className='header__logo'>
          <Link to='/profile'>Social-Network</Link>
        </div>
        {isAuth ? (
          <>
            <div className='header__profile' onClick={onVisisble}>
              {login}
              <img
                className='photo'
                src={photo}
                alt=''
              />
              <img
                className={visible ? 'header__turn-down' : 'header__turn-up'}
                src={turnDown}
                alt=''
              />
              {visible && (
                <div className='header__profile--hover'>
                  <Link to='/login' onClick={onLogout}>
                    Выйти
                  </Link>
                </div>
              )}
            </div>
          </>
        ) : (
          <Link to='/login' className='header__login'>
            Вход
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
