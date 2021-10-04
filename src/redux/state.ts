import {rerenderEntireTree} from "../index";

export type StateType = {
    dialogsPageData: DialogsPageDataType
    postsPageData: PostsPageDataType
}
export type DialogsPageDataType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
}
export type PostsPageDataType = {
    postsData: PostType[],
    newPostText: string
}

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

export const state: StateType = {
    dialogsPageData: {
        dialogsData: [
            {id: 1, name: 'Vitali'},
            {id: 2, name: 'Denis'},
            {id: 3, name: 'Viktor'},
            {id: 4, name: 'Alex'},
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Really'},
            {id: 4, message: 'Bye'},
        ]
    },
    postsPageData: {
        postsData: [
            {id: 1, post: 'Hi', likeCounter: 6},
            {id: 2, post: 'Bye', likeCounter: 7},
            {id: 3, post: 'Hi', likeCounter: 10},
        ],
        newPostText: ""
    }
}

export const addPost = () => {
    state.postsPageData.postsData.push({id: 4, post: state.postsPageData.newPostText, likeCounter: 0})
    rerenderEntireTree(state)
}
export const changeNewPostText = (newPostText: string) => {
    state.postsPageData.newPostText = newPostText
    rerenderEntireTree(state)
}