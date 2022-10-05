import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {Main} from './pages/Main';
import {Explore} from './pages/Explore';
import {Subscribers} from './pages/Subscribers';
import {Subscriptions} from './pages/Subscriptions';
import {Messages} from './pages/Messages';
import {Saved} from './pages/Saved';
import {Settings} from './pages/Settings';
import {NotFoundpage} from './pages/NotFoundpage';


function App() {
  return (
    <>
    <header>
      <Link to='/'>Main</Link>
      <Link to='/explore'>Explore</Link>
      <Link to='/subscribers'>Subscribers</Link>
      <Link to='/subscription'>Subscriptions</Link>
      <Link to='/messages'>Messages</Link>
      <Link to='/saved'>Saved</Link>
      <Link to='/settings'>Settings</Link>
      <Link to='/notfound'>NotFoundpage</Link>
    </header>
    <Routes>
      <Route path="/" element={< Main/>}/>
      <Route path="/explore" element={< Explore/>}/>
      <Route path="/subscribers" element={< Subscribers/>}/>
      <Route path="/subscription" element={< Subscriptions/>}/>
      <Route path="/messages" element={< Messages/>}/>
      <Route path="/saved" element={< Saved/>}/>
      <Route path="/settings" element={< Settings/>}/>
      <Route path="*" element={< NotFoundpage/>}/>
    </Routes>
    </>
    
      
    
  );
}

export default App;
