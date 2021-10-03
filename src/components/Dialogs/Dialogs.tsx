import {Dialog} from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import d from './Dialogs.module.css'
import {DialogType, MessageType} from "../../index";

type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}


export function Dialogs(props: DialogsPropsType) {

    return(
            <div className={d.dialogs}>
                <div className={d.dialogsItems}>
                    {props.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)}
                </div>
                <div className={d.messages}>
                    {props.messages.map(m => <Message message={m.message}/>)}
                </div>
            </div>
    )
}