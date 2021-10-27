export type DialogsPageAT = AddMessageAT
type AddMessageAT = {
    type: "ADD-MESSAGE"
    message: string
}

export type DialogsPageDataType = {
    dialogsData: DialogType[]
    messagesData: MessageType[]
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
    ]
}

export const dialogsReducer = (state: DialogsPageDataType = initState, action: DialogsPageAT): DialogsPageDataType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            return {...state, messagesData: [...state.messagesData, { id: 4, message: action.message,} ]}
        default:
            return state
    }
}

export const addMessageAC = (message: string): AddMessageAT => {
    return {
        type: "ADD-MESSAGE",
        message
    }
}