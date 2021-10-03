import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import d from './Dialogs.module.css'
import {DialogsPageDataType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPageData: DialogsPageDataType
}

export function Dialogs(props: DialogsPropsType) {

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                {props.dialogsPageData.dialogsData.map(d => <Dialog name={d.name} id={d.id}/>)}
            </div>
            <div className={d.messages}>
                {props.dialogsPageData.messagesData.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}