import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/SideBar/Sidebar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route, BrowserRouter} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

let RenderProfile = (props) => {
  return <Profile />
}

let RenderDialogs = (props) => {
  return <DialogsContainer />
}

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar state={props.state.sidebar} />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => RenderDialogs(props) } />
          <Route path='/profile' render={ () => RenderProfile(props) } />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
