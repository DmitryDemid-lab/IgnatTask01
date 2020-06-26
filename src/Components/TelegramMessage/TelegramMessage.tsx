import React from 'react';
import s from './TelegramMessage.module.css';

const Post = () => {
    return (
        <div className={s.post}>
            <div className={s.messageBlock}><Avatar/>
                <Message name={"Dmitry"}
                         text={"Hi, how'r u doing? One of the most common problems that I run into when using Redux is trying to figure out why an action is not being captured by a reducer. For someone just getting starting with Redux, debugging this issue can be especially overwhelming because of how Redux manages data flow. So before you start pouring over configuration code, or the logic contained in your action creators and reducers, please, make sure your action types are defined and spelled correctly."}/>
            </div>
        </div>
    )
};

const Avatar = () => {
    return  <img className={s.avatarIcon} src="https://avatarfiles.alphacoders.com/855/85557.png" alt="avatar"/>
};

type MessagePropsTypes = {
    name: string,
    text: string,
}

const Message = (props: MessagePropsTypes) => {
    let date = new Date();
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