import {DispatchType} from "./redux-store";
import {profileAPI} from "../api/api";

export type ProfilePageAT = AddPostAT | ChangeNewPostTextAT | SetUserProfileAT | SetUserStatusAT
type AddPostAT = {
    type: "ADD-POST"
}
type ChangeNewPostTextAT = {
    type: 'CHANGE-NEW-POST-TEXT',
    newPostText: string
}
type SetUserProfileAT = {
    type: 'SET-USER-PROFILE'
    profile: ProfileServerType
}
type SetUserStatusAT = {
    type: 'SET-USER-STATUS'
    status: string
}

export type ProfileServerType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: {
        small: string | null,
        large: string | null
    }
}

export type ProfileInitialStateType = typeof initState
let initState = {
    postsData: [
        {id: 1, post: 'Hi', likeCounter: 6},
        {id: 2, post: 'Bye', likeCounter: 7},
        {id: 3, post: 'Hi', likeCounter: 10},
    ],
    newPostText: "",
    profile: null as null | ProfileServerType,
    status: '',
}

export const profileReducer = (state: ProfileInitialStateType = initState, action: ProfilePageAT): ProfileInitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            return {...state, postsData: [...state.postsData, {id: 4, post: state.newPostText, likeCounter: 0}]}
        case 'CHANGE-NEW-POST-TEXT':
            return {...state, newPostText: action.newPostText}
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile}
        case 'SET-USER-STATUS':
            return {...state, status: action.status}
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
export const setUserProfileAC = (profile: ProfileServerType): SetUserProfileAT => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    }
}
export const setUserStatusAC = (status: string): SetUserStatusAT => {
    return {
        type: 'SET-USER-STATUS',
        status
    }
}

export const getUserProfileThunkCreator = (userId: number) => {
    return (dispatch: DispatchType) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfileAC(response.data))
        })

    }
}
export const getUserStatusThunkCreator = (userId: number) => {
    return (dispatch: DispatchType) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatusAC(response.data))
        })

    }
}

export const updateUserStatusThunkCreator = (status: string) => {
    return (dispatch: DispatchType) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatusAC(status))
            }
        })

    }
}
