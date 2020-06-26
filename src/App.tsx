import React, {KeyboardEvent, useState} from 'react';
import './App.css';
import MyInitialsOutput from "./Components/MyInitialsOutput/MyInitialsOutput";
import Post from "./Components/TelegramMessage/TelegramMessage";
import MyAffairs from "./Components/Affairs/MyAffairs";
import HelloName from "./Components/HelloName/HelloName";
import InputNya from "./Components/Input(task4)/InputNya/InputNya";
import ButtonNya from "./Components/Input(task4)/ButtonNya/ButtonNya";

function onEnter() {
    alert("hello")
}

function App() {
    return (
        <div className="App">
            <MyInitialsOutput/>
            <MyAffairs/>
            <Post/>
            <HelloName/>
            <InputNya onEnter={onEnter}/>
            <ButtonNya>Hi</ButtonNya>
        </div>
    );
}

export default App;
