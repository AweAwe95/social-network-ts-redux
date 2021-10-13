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
}
let initialState: UsersPageType = {
    users: []
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersAT) => {
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
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}
type UsersAT = FollowAT | UnfollowAT | SetUsersAT
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

export const followAC = (userId: number): FollowAT => {
    return {type: 'FOLLOW', userId}
}
export const unfollowAC = (userId: number): UnfollowAT => {
    return {type: 'UNFOLLOW', userId}
}
export const setUsersAC = (users: UserType[]): SetUsersAT => {
    return {type: 'SET-USERS', users}
}