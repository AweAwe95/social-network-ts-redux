export  type UserLocationType = {
    city: string,
    country: string
}
export type userType = {
    id: number,
    follow: boolean,
    name: string,
    status: string,
    location: UserLocationType,
    imgUrl: string
}
export type InitialStateType = typeof initialState
let initialState = {
    users: [] as userType[],
}

type UsersAT = FollowAT | UnfollowAT | SetUsersAT
type FollowAT = {
    type: 'FOLLOW',
    userId: number
}
type UnfollowAT = {
    type: 'UNFOLLOW',
    userId: number
}
type SetUsersAT = {
    type: 'SET_USERS',
    users: userType[]

}

export const usersReducer = (state: InitialStateType = initialState, action: UsersAT): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW' :
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, follow: false}
                    }
                    return user
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, follow: true}
                    }
                    return user
                })
            }
        case 'SET_USERS' : {
            return {...state, users: [...state.users, ...action.users]}
        }
        default :
            return state
    }
}
export const followAC = (userId: number): FollowAT => {
    return {
        type: 'FOLLOW',
        userId
    }
}
export const unfollowAC = (userId: number): UnfollowAT => {
    return {
        type: 'UNFOLLOW',
        userId
    }
}
export const setUsersAC = (users: userType[]): SetUsersAT => {
    return {
        type: 'SET_USERS',
        users
    }
}