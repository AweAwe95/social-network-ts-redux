import {usersAPI} from "../api/api";
import {DispatchType} from "./redux-store";

export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
}
type PhotosType = {
    small: string,
    large: string
}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

type UsersAT =
    FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalCountAT
    | SetIsFetchingAT
    | SetFollowingInProgressAT
type FollowAT = {
    type: 'FOLLOW'
    userId: number
}
type UnfollowAT = {
    type: 'UNFOLLOW'
    userId: number
}
type SetUsersAT = {
    type: 'SET-USERS'
    users: UserType[]
}
type SetCurrentPageAT = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}
type SetTotalCountAT = {
    type: "SET-TOTAL-COUNT",
    totalCount: number
}
type SetIsFetchingAT = {
    type: 'SET-IS-FETCHING'
    isFetching: boolean
}
type SetFollowingInProgressAT = {
    type: 'SET-FOLLOWING-IN-PROGRESS'
    isFetching: boolean
    userId: number
}


export const usersReducer = (state: UsersPageType = initialState, action: UsersAT): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        } else {
                            return u
                        }
                    }
                )
            }
        }
        case 'UNFOLLOW': {
            debugger
            return {
                ...state, users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        } else {
                            return u
                        }
                    }
                )
            }
        }
        case 'SET-USERS': {
            return {...state, users: action.users}
        }
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case "SET-TOTAL-COUNT":
            return {...state, totalUsersCount: action.totalCount}
        case "SET-IS-FETCHING":
            return {...state, isFetching: action.isFetching}
        case "SET-FOLLOWING-IN-PROGRESS":
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followAC = (userId: number): FollowAT => {
    return {type: 'FOLLOW', userId}
}
export const unfollowAC = (userId: number): UnfollowAT => {
    return {type: 'UNFOLLOW', userId}
}
export const setUsersAC = (users: UserType[]): SetUsersAT => {
    return {type: 'SET-USERS', users}
}
export const setCurrentPageAC = (currentPage: number): SetCurrentPageAT => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    }
}
export const setTotalCountAC = (totalCount: number): SetTotalCountAT => {
    return {
        type: "SET-TOTAL-COUNT",
        totalCount
    }
}
export const setIsFetchingAC = (isFetching: boolean): SetIsFetchingAT => {
    return {
        type: 'SET-IS-FETCHING',
        isFetching
    }
}
export const setFollowingInProgressAC = (isFetching: boolean, userId: number): SetFollowingInProgressAT => {
    return {
        type: 'SET-FOLLOWING-IN-PROGRESS',
        isFetching,
        userId
    }
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {

    return (dispatch: DispatchType) => {
        dispatch(setIsFetchingAC(true))

        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setIsFetchingAC(false))
            dispatch(setUsersAC(response.items))
            dispatch(setTotalCountAC(response.totalCount))
        })
    }
}
export const unfollowUserThunkCreator = (userId: number) => {
    return (dispatch: DispatchType) => {
        dispatch(setFollowingInProgressAC(true, userId))

        usersAPI.unfollow(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(unfollowAC(userId))
            }
            dispatch(setFollowingInProgressAC(false, userId))
        })
    }
}
export const followUserThunkCreator = (userId: number) => {
    return (dispatch: DispatchType) => {
        dispatch(setFollowingInProgressAC(true, userId))

        usersAPI.follow(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(followAC(userId))
            }
            dispatch(setFollowingInProgressAC(false, userId))
        })
    }
}

