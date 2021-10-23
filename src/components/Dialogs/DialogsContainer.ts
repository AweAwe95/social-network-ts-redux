import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {addMessageAC, changeNewMessageTextAC, DialogsPageDataType} from "../../redux/dialogs-reducer";
import {DispatchType, RootStateType} from "../../redux/redux-store";

export type DialogsPropsType = MapDispatchToPropsType & MapStateToPropsType

type MapStateToPropsType = {
    dialogsPageData: DialogsPageDataType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    addMessage: () => void
    changeNewMessageText: (newMessage: string) => void
}

let mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogsPageData: state.dialogsPageData,
        isAuth: state.auth.isAuth
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)