import {Dialog} from "./Dialog/Dialog";
import { Message } from "./Message/Message";
import d from './Dialogs.module.css'

export function Dialogs() {
    return(
            <div className={d.dialogs}>
                <div className={d.dialogsItems}>
                    <Dialog name={'Vitali'} id={'1'}/>
                    <Dialog name={'Denis'} id={'2'}/>
                    <Dialog name={'Viktor'} id={'3'}/>
                    <Dialog name={'Valera'} id={'4'}/>
                </div>
                <div className={d.messages}>
                    <Message message={'Hi'}/>
                    <Message message={'How are you'}/>
                    <Message message={'Really'}/>
                    <Message message={'Bye'}/>
                </div>
            </div>
    )
}