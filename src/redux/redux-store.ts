import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let reducers = combineReducers(
    {
        postsPageData: profileReducer,
        dialogsPageData: dialogsReducer
    }
)

export let store = createStore(reducers)

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
export type StoreType = typeof store