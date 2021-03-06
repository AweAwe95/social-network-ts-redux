import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer} from "redux-form";

let reducers = combineReducers(
    {
        postsPageData: profileReducer,
        dialogsPageData: dialogsReducer,
        usersPageData: usersReducer,
        auth: authReducer,
        form: formReducer
    }
)

export let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
export type StoreType = typeof store