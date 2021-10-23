import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import d from './Dialogs.module.css'
import {DialogsPropsType} from "./DialogsContainer";
import { Redirect } from "react-router-dom";


export function Dialogs(props: DialogsPropsType) {
    const textAreaHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessageText(e.currentTarget.value)
    }
    const addMessage = () => {
        props.addMessage()
        props.changeNewMessageText('')
    }
    if(props.isAuth === false){
        return <Redirect to={'/login'}/>
    }
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {props.dialogsPageData.dialogsData.map(d => <Dialog name={d.name} id={d.id}/>)}
            </div>
            <div className={d.messages}>
                {props.dialogsPageData.messagesData.map(m => <Message message={m.message}/>)}
                <div>
                    <textarea onChange={textAreaHandler} value={props.dialogsPageData.newMessageText}></textarea>
                    <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
}