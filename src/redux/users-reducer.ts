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
}
let initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

type UsersAT = FollowAT | UnfollowAT | SetUsersAT | SetCurrentPageAT | SetTotalCountAT
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