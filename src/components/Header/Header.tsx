import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import turnDown from '../../assets/turn-down.png';
import { AppStateType } from '../../redux/store';

import { fetchAuth, logout } from '../../redux/thunk/auth';

type StatePropsType = {
    isAuth: boolean
}

const Header:React.FC<any> = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state:AppStateType):StatePropsType=> ({
    isAuth: state.auth.isAuth,
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
              Диас
              <img
                className='photo'
                src='https://sun9-72.userapi.com/impg/BTTPhoECky4NqwKOT8tkgmG5y5-00GAKCWHyWA/9QeIgD2D1OA.jpg?size=640x882&quality=96&sign=08bd341eb1fb284531b265f6733b4733&type=album'
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
