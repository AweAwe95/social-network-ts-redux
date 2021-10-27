import React from "react";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {addMessageAC, DialogsPageDataType} from "../../redux/dialogs-reducer";
import {DispatchType, RootStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType
type MapStateToPropsType = {
    dialogsPageData: DialogsPageDataType
}
type MapDispatchToPropsType = {
    addMessage: (message: string) => void
}


let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogsPageData: state.dialogsPageData
    }
}
let mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        addMessage: (message: string) => {
            dispatch(addMessageAC(message))
        },
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)