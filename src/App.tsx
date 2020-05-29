import React from 'react';
import './App.css';
import MyInitialsOutput from "./Components/MyInitialsOutput/MyInitialsOutput";
import Post from "./Components/TelegramMessage/TelegramMessage";

function App() {
    return (
        <div className="App">
            <MyInitialsOutput/>
            <Post/>
        </div>

    );
}

export default App;
