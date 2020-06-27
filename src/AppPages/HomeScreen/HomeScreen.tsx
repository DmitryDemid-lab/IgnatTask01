import React from 'react';
import s from './HomeScreen.module.css'
import MyInitialsOutput from "../../Components/MyInitialsOutput/MyInitialsOutput";

function HomeScreens() {
    return (
        <div className={s.HomeScreens}>
            <MyInitialsOutput/>
        </div>
    )
};

export default HomeScreens;