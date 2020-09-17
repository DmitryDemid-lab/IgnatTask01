import React, {useCallback, useState} from 'react';
import s from './JuniorPlus.module.css'
import {Select} from '../../Common/Select/Select';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {setTheme, themeType} from "../../redux/reducers/themeSwitchReducer/themeSwitchReducer";
import ButtonNya from "../../Components/Input(task4)/ButtonNya/ButtonNya";
import {RequestsAPI} from "../../Api/api";
import {log} from "util";

export default function JuniorPlus() {
    const theme = useSelector<AppRootStateType>(state => state.theme.theme)
    return (
        <div
            className={`${s.JuniorPlus}  ${theme === 'dark' && s.bgDark} ${theme === 'light' && s.bgLight} ${theme === 'color' && s.bgColor}`}>
            <h1>JuniorPlus</h1>
            <ThemeSwitcher/>
            <br/><hr/>
            <Request/>
            <br/><hr/>
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

export const Request = React.memo(() => {
    const [state, setState] = useState(false)
    const [res, setRes] = useState('')
    const [error, setError] = useState('')

    const onSendHandler = () => {
        RequestsAPI.setSuccess(state)
            .then( res => setRes(res.data.errorText))
            .catch(error => setError(error.message))
        setError('')
        setRes('')
    }

    return <div>
        <input type={"checkbox"} onClick={e=>setState(e.currentTarget.checked)}/>
        <ButtonNya onClick={onSendHandler}>send</ButtonNya>
        <div>
            <p>{error ? error : res}</p>
        </div>
    </div>
})