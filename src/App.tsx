import React from 'react';
import './App.css';
import MyInitialsOutput from "./Components/MyInitialsOutput/MyInitialsOutput";
import Post from "./Components/TelegramMessage/TelegramMessage";
import MyAffairs from "./Components/Affairs/MyAffairs";
import HelloName from "./Components/HelloName/HelloName";

function App() {
    return (
        <div className="App">
            <MyInitialsOutput/>
            <MyAffairs/>
            <Post/>
            <HelloName/>
        </div>
    );
}

export default App;
