import React from 'react';
import s from './PreJunior.module.css'
import MyInitialsOutput from "../../Components/MyInitialsOutput/MyInitialsOutput";
import MyAffairs from "../../Components/Affairs/MyAffairs";
import Post from "../../Components/TelegramMessage/TelegramMessage";
import HelloName from "../../Components/HelloName/HelloName";
import InputNya from "../../Components/Input(task4)/InputNya/InputNya";
import ButtonNya from "../../Components/Input(task4)/ButtonNya/ButtonNya";


function onEnter() {
    alert("hello")
}

function PreJunior() {
    return (
        <div className={s.PreJunior}>
            <h1>The result of my homework № 1-4</h1>
            <MyInitialsOutput/>
            <MyAffairs/>
            <Post/>
            <HelloName/>
            <InputNya onEnter={onEnter}/>
            <ButtonNya>Hi</ButtonNya>
        </div>
    )
};

export default PreJunior;