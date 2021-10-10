import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {DispatchType, RootStateType, StoreType} from "./redux/redux-store";

type AppPropsType = {
    state: RootStateType
    dispatch: DispatchType
    store: StoreType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'}
                           render={() => <Profile postsPageData={props.state.postsPageData}
                                                  dispatch={props.dispatch}/>}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogsPageData={props.state.dialogsPageData}
                                                                    dispatch={props.dispatch}/>}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
