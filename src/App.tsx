import React from 'react';
import './App.css';
import PreJunior from "./AppPages/PreJunior/PreJunior";
import Junior from "./AppPages/Junior/Junior";
import JuniorPlus from "./AppPages/Junior+/JuniorPlus";
import NavBar from "./AppPages/NavBar/NavBar";


function App() {
    return (
        <div className="App">
            <NavBar/>
            <main>
                <PreJunior/>
                <Junior/>
                <JuniorPlus/>
            </main>
        </div>
    );
}

export default App;
