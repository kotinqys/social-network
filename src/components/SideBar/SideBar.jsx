import React from 'react';

import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className='sidebar'>
      <nav>
        <Link to='/profile'>Моя страница</Link>
        <Link to='/messages'>Сообщения</Link>
        <Link to='/friends'>Друзья</Link>
        <Link to='/users'>Пользователи</Link>
      </nav>
    </div>
  );
}

export default SideBar;
