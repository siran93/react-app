import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from "./components/Music/Music";
import News from './components/News/News';
import Nav from './components/Navbar/Nav';
import PropTypes from 'prop-types';
import './App.scss';

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    {/*components-i poxaren karox einq grel render*/}
                    <Route path='/dialogs' component={()=> <Dialogs
                        messagesData={props.state.messagesPage.messages}
                        dialogsData={props.state.messagesPage.dialogs}/>}/>
                    <Route path='/profile' component={() => <Profile postData={props.state.profilePage.posts}/>}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    )
};

//propTypes-y developmenti hamar e, vor asi inch xndir ka:
// Nkaragrrum enq te amen propsy inch e stanum, array, boolean...

App.propTypes = {
    posts: PropTypes.array,
    messages: PropTypes.array,
    dialogs: PropTypes.array
};

//defaultProps, ete vereviny chi ashxatum,
//arden kashxati es meky.

App.defaultProps = {
    posts: [],
    messages: [],
    dialogs: []
};

export default App;
