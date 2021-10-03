import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type PostType = {
    id: number
    post: string
    likeCounter: number
}

const dialogsData: DialogType[] = [
    {id: 1, name: 'Vitali'},
    {id: 2, name: 'Denis'},
    {id: 3, name: 'Viktor'},
    {id: 4, name: 'Alex'},
]
const messagesData: MessageType[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Really'},
    {id: 4, message: 'Bye'},
]
const postsData: PostType[] = [
    {id: 1, post: 'Hi', likeCounter: 6},
    {id: 2, post: 'Bye', likeCounter: 7},
    {id: 3, post: 'Hi', likeCounter: 10},
]

ReactDOM.render(
    <React.StrictMode>
        <App dialogs={dialogsData} messages={messagesData} posts={postsData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
