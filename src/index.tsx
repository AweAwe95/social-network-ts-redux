import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateType, store} from "./redux/state";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} addPost={store.addPost.bind(store)} changeNewPostText={store.changeNewPostText.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState())

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
