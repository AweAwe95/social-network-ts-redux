import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import d from './Dialogs.module.css'
import {DialogsPropsType} from "./DialogsContainer";
import { AddItemForm } from "../Forms/AddItemForm";


export function Dialogs(props: DialogsPropsType) {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {props.dialogsPageData.dialogsData.map(d => <Dialog name={d.name} id={d.id}/>)}
            </div>
            <div className={d.messages}>
                {props.dialogsPageData.messagesData.map(m => <Message message={m.message}/>)}
                {/*<textarea onChange={textAreaHandler} value={props.dialogsPageData.newMessageText}></textarea>*/}
                {/*<button onClick={addMessage}>Add post</button>*/}
                <br/>
                <AddItemForm addItem={props.addMessage}/>
            </div>
        </div>
    )
}