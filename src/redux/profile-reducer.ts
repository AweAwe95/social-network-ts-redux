export type ProfilePageAT = AddPostAT | ChangeNewPostTextAT
type AddPostAT = {
    type: "ADD-POST"
}
type ChangeNewPostTextAT = {
    type: 'CHANGE-NEW-POST-TEXT',
    newPostText: string
}

export type PostsPageDataType = {
    postsData: PostType[],
    newPostText: string
}
export type PostType = {
    id: number
    post: string
    likeCounter: number
}

let initState: PostsPageDataType = {
    postsData: [
        {id: 1, post: 'Hi', likeCounter: 6},
        {id: 2, post: 'Bye', likeCounter: 7},
        {id: 3, post: 'Hi', likeCounter: 10},
    ],
    newPostText: ""
}

export const profileReducer = (state: PostsPageDataType = initState, action: ProfilePageAT): PostsPageDataType => {
    switch (action.type) {
        case "ADD-POST":
            return {...state, postsData: [...state.postsData,{ id: 4, post: state.newPostText, likeCounter: 0}]}
        case 'CHANGE-NEW-POST-TEXT':
            return {...state, newPostText: action.newPostText}
        default:
            return state
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