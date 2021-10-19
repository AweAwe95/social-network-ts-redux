export type AuthStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}
let initialState: AuthStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

type AuthAT = SetAuthUserDataAT
type SetAuthUserDataAT = {
    type: 'SET-USER-DATA'
    data: {
        id: number | null
        login: string | null
        email: string | null
    }

}
export const authReducer = (state: AuthStateType = initialState, action: AuthAT): AuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setAuthUserDataAC = (id: number, login: string, email: string): SetAuthUserDataAT => {
    return {
        type: 'SET-USER-DATA',
        data: {id, login, email}
    }
}