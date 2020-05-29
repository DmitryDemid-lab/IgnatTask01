import React from 'react';
import s from './TelegramMessage.module.css';

const Post = () => {
    return (
        <div className={s.post}>
            <Avatar/>
            <Message name={"Dmitry"} text={"Hi, how'r u doing?"}/>
        </div>
    )
};

const Avatar = () => {
    return (
        <img className={s.avatarIcon} src="https://avatarfiles.alphacoders.com/855/85557.png" alt="avatar"/>
    )
};

type MessagePropsTypes = {
    name: string,
    text: string,
}

const Message = (props: MessagePropsTypes) => {
    let date = new Date;
    let hours = date.toLocaleTimeString();
    return (
        <div className={s.message}>
            <div className={s.nameOfWriter}>
                {props.name}
            </div>
            <div className={s.textMessage}>
                {props.text}
            </div>
            <div className={s.sentTime}>
                {hours}
            </div>
        </div>
    )
};

export default Post;