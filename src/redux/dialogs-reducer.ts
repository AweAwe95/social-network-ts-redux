export type DialogsPageAT = AddMessageAT | ChangeNewMessageTextAT
type AddMessageAT = {
    type: "ADD-MESSAGE"
}
type ChangeNewMessageTextAT = {
    type: 'CHANGE-NEW-MESSAGE-TEXT',
    newMessageText: string
}

export type DialogsPageDataType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
    newMessageText: string
}
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}


let initState: DialogsPageDataType = {
    dialogsData: [
        {id: 1, name: 'Vitali'},
        {id: 2, name: 'Denis'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Alex'},
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Really'},
        {id: 4, message: 'Bye'},
    ],
    newMessageText: ""
}

export const dialogsReducer = (state: DialogsPageDataType = initState, action: DialogsPageAT): DialogsPageDataType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            state.messagesData.push({
                id: 4,
                message: state.newMessageText,
            })
            return {...state}
        case 'CHANGE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessageText
            return {...state}
        default:
            return state
    }
}

export const addMessageAC = (): AddMessageAT => {
    return {
        type: "ADD-MESSAGE"
    }
}
export const changeNewMessageTextAC = (newMessageText: string): ChangeNewMessageTextAT => {
    return {
        type: 'CHANGE-NEW-MESSAGE-TEXT',
        newMessageText
    }
}