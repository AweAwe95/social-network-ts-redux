import {rerenderEntireTree} from "../index";


export type ActionTypes = AddPostAT | ChangeNewPostTextAT | AddMessageAT | ChangeNewMessageTextAT
type AddPostAT = {
    type: "ADD-POST"
}
type ChangeNewPostTextAT = {
    type: 'CHANGE-NEW-POST-TEXT',
    newPostText: string
}
type AddMessageAT = {
    type: "ADD-MESSAGE"
}
type ChangeNewMessageTextAT = {
    type: 'CHANGE-NEW-MESSAGE-TEXT',
    newMessageText: string
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}
export type StateType = {
    dialogsPageData: DialogsPageDataType
    postsPageData: PostsPageDataType
}
export type DialogsPageDataType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessageText: string
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

export let store: StoreType = {
    _state: {
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
            ],
            newMessageText: ""
        },
        postsPageData: {
            postsData: [
                {id: 1, post: 'Hi', likeCounter: 6},
                {id: 2, post: 'Bye', likeCounter: 7},
                {id: 3, post: 'Hi', likeCounter: 10},
            ],
            newPostText: ""
        }
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionTypes) {
        switch (action.type) {
            case "ADD-POST":
                this._state.postsPageData.postsData.push({
                    id: 4,
                    post: this._state.postsPageData.newPostText,
                    likeCounter: 0
                })
                rerenderEntireTree(this.getState())
                break
            case 'CHANGE-NEW-POST-TEXT':
                this._state.postsPageData.newPostText = action.newPostText
                rerenderEntireTree(this.getState())
                break
            case "ADD-MESSAGE":
                this._state.dialogsPageData.messagesData.push({
                    id: 4,
                    message: this._state.dialogsPageData.newMessageText,
                })
                rerenderEntireTree(this.getState())
                break
            case 'CHANGE-NEW-MESSAGE-TEXT':
                this._state.dialogsPageData.newMessageText = action.newMessageText
                rerenderEntireTree(this.getState())
                break
        }
    }
}

export const addPostAC = (): AddPostAT => {
    return {
        type: "ADD-POST"
    }
}
export const changeNewPostTextAC = (newPostText: string): ChangeNewPostTextAT => {
    return {
        type: 'CHANGE-NEW-POST-TEXT',
        newPostText
    }
}
export const addMessageAC = (): AddMessageAT => {
    return {
        type: "ADD-MESSAGE"
    }
}
export const changeNewMessageTextAC = (newMessageText: string): ChangeNewMessageTextAT => {
    return {
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        newMessageText
    }
}