import {ActionTypes, PostsPageDataType} from "./state";


export const profileReducer = (state: PostsPageDataType, action: ActionTypes): PostsPageDataType => {
    switch (action.type) {
        case "ADD-POST":
            state.postsData.push({
                id: 4,
                post: state.newPostText,
                likeCounter: 0
            })
            return state
        case 'CHANGE-NEW-POST-TEXT':
            state.newPostText = action.newPostText
            return state
        default:
            return state
    }
}