import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={style.item}>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.item}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Sirik'},
        {id: 2, name: 'Mane'},
        {id: 3, name: 'Haso'}
    ];

    let messagesData = [
        {message: 'Hi'},
        {message: 'How are you'},
        {message: 'I am fine'}
    ]

    return (
        <div className={style.dialogs}>
            <div className={style.dialog_items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={style.dialog_messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;