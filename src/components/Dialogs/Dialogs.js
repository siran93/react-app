import style from './Dialogs.module.css';
import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} /> );

    let messagesElements = props.messagesData.map((message) => <Message message={message.message} /> );

    return (
        <div className={style.dialogs}>
            <div className={style.dialog_items}>
                {dialogsElements}
            </div>
            <div className={style.dialog_messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;