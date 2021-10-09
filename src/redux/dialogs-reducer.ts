import {ActionTypes, DialogsPageDataType} from "./state";


export const dialogsReducer = (state: DialogsPageDataType, action: ActionTypes): DialogsPageDataType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            state.messagesData.push({
                id: 4,
                message: state.newMessageText,
            })
            return state
        case 'CHANGE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
    }
}