import React from "react";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {addMessageAC, changeNewMessageTextAC, DialogsPageDataType} from "../../redux/dialogs-reducer";
import {DispatchType, RootStateType} from "../../redux/redux-store";
import { Redirect } from "react-router-dom";
import {ProfileAPIComponent} from "../Profile/ProfileContainer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType
type MapStateToPropsType = {
    dialogsPageData: DialogsPageDataType
}
type MapDispatchToPropsType = {
    addMessage: () => void
    changeNewMessageText: (newMessage: string) => void
}


let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogsPageData: state.dialogsPageData
    }
}
let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
            dispatch(changeNewMessageTextAC(''))
        },
        changeNewMessageText: (newMessage: string) => {
            dispatch(changeNewMessageTextAC(newMessage))
        }
    }
}

let AuthRedirectComponent = WithAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)