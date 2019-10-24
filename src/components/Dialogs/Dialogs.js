import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

const DialogItem = (props) =>{
    let path = '/dialogs/' + props.id;

    return(
        <div className={style.item}>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className={style.item}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialog_items}>
                <DialogItem name='Sirik' id='1'/>
                <DialogItem name='Mane' id='2'/>
                <DialogItem name='Haso' id='3'/>
            </div>
            <div className={style.dialog_messages}>
                <Message message='Hi'/>
                <Message message='How are you'/>
                <Message message='Hello'/>
            </div>
        </div>
    )
}

export default Dialogs;