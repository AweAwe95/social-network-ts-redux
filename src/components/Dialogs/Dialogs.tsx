import {Dialog} from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import d from './Dialogs.module.css'

export function Dialogs() {

    const dialogsData = [
        {id: 1, name: 'Vitali'},
        {id: 2, name: 'Denis'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Alex'},
    ]
    const messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Really'},
        {id: 4, message: 'Bye'},
    ]

    return(
            <div className={d.dialogs}>
                <div className={d.dialogsItems}>
                    {dialogsData.map(d => <Dialog name={d.name} id={d.id}/>)}
                </div>
                <div className={d.messages}>
                    {messagesData.map(m => <Message message={m.message}/>)}
                </div>
            </div>
    )
}