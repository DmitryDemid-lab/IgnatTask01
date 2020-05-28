import React from 'react';
import s from './MyInitialsOutput.module.css';

const MyInitialsOutput = () => {
    return (
        <div className={s.body}>
            <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-367-456319.png" alt="avatar"/>
           <MyFullName/>
        </div>
    )
};

const MyFullName = () => {
    return (
        <div className={s.MyFullName}>
            <NamePart text={"Demid"}/>
            <NamePart text={"Dmitry"}/>
            <NamePart text={"Viktorovich"}/>
        </div>
    )
};

type NamePartType = {
    text: string,
};

const NamePart = (props: NamePartType) => {
    return (
        <div className={s.text}>
            {props.text}
        </div>
    )
};

export default MyInitialsOutput;