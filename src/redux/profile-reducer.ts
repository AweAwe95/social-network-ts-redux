export type ProfilePageAT = AddPostAT | ChangeNewPostTextAT | SetUserProfileAT
type AddPostAT = {
    type: "ADD-POST"
}
type ChangeNewPostTextAT = {
    type: 'CHANGE-NEW-POST-TEXT',
    newPostText: string
}
type SetUserProfileAT = {
    type: 'SET-USER-PROFILE'
    profile: ProfileType
}

export type PostsPageDataType = {
    postsData: PostType[],
    newPostText: string,
    profile: ProfileType | null
}
export type PostType = {
    id: number
    post: string
    likeCounter: number
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContactsType
    photos: ProfilePhotosType
}
type ProfileContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type ProfilePhotosType = {
    small: string
    large: string
}

let initState: PostsPageDataType = {
    postsData: [
        {id: 1, post: 'Hi', likeCounter: 6},
        {id: 2, post: 'Bye', likeCounter: 7},
        {id: 3, post: 'Hi', likeCounter: 10},
    ],
    newPostText: "",
    profile: null,
}

export const profileReducer = (state: PostsPageDataType = initState, action: ProfilePageAT): PostsPageDataType => {
    switch (action.type) {
        case "ADD-POST":
            return {...state, postsData: [...state.postsData, {id: 4, post: state.newPostText, likeCounter: 0}]}
        case 'CHANGE-NEW-POST-TEXT':
            return {...state, newPostText: action.newPostText}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
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
export const setUserProfileAC = (profile: ProfileType): SetUserProfileAT => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    }
}