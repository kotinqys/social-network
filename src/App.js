import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar'
import ProfileContainer from './components/Profile/ProfileContainer'
import Users from './components/Users/Users';
import Login from './components/Login/Login';

import './scss/app.scss';
import {Route } from 'react-router-dom';
import Friends from './components/Friends/Friends';


function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className="page">
        <div className="container">
          <SideBar />
          <div className="content">
            <Route exact path='/' component = {ProfileContainer} />
            <Route path='/login' component={Login} />
            <Route path='/profile/:userId?' component={ProfileContainer} />
            <Route path='/users' component={Users} />
            <Route path='/friends' component={Friends}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
