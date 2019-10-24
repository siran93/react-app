import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from "./components/Music/Music";
import News from './components/News/News';
import Nav from './components/Navbar/Nav';
import './App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App;
