import React, {useCallback} from 'react';
import s from './JuniorPlus.module.css'
import {Select} from '../../Common/Select/Select';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {setTheme, themeType} from "../../redux/reducers/themeSwitchReducer/themeSwitchReducer";

export default function JuniorPlus() {
    const theme = useSelector<AppRootStateType>(state => state.theme.theme)
    return (
        <div
            className={`${s.JuniorPlus}  ${theme === 'dark' && s.bgDark} ${theme === 'light' && s.bgLight} ${theme === 'color' && s.bgColor}`}>
            <h1>JuniorPlus</h1>
            <ThemeSwitcher/>
        </div>
    )
};

export const ThemeSwitcher = React.memo(() => {
    const dispatch = useDispatch()
    const theme = useSelector<AppRootStateType>((state: AppRootStateType) => state.theme.theme)

    const onThemeChange = useCallback((value: themeType) => {
        dispatch(setTheme(value))
        console.log(value)
    }, [])
    const themesArr = ["light", "dark", "color"] as Array<themeType>

    return <div>
        <Select value={theme} onSelectChangeHandler={onThemeChange} optionsArray={themesArr}/>
    </div>
})