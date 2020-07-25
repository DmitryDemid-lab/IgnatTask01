import React, {useState} from 'react';
import s from './Junior.module.css'
import EditableSpan from "../../Common/EditableSpan/EditableSpan";
import ButtonNya from "../../Components/Input(task4)/ButtonNya/ButtonNya";
import Select from "../../Common/Select/Select";
import Radio from "../../Common/Radio/Radio";
import {StateType} from "../../reducer/homeWorkReducer";
import Users from "../../Components/Users/Users";

type LocalStateType = {
    x: string
    y: string
    z: number
}

export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}

function Junior() {

    const onSetTitleHandler = () => {
        saveState<LocalStateType>("test", {x: "Hello!", y: "This is task number: ", z: 6});
    }

    const onGetTitleHandler = () => {
        const state: LocalStateType = restoreState<LocalStateType>("test", {x: "", y: "", z: 0});
        alert(Object.values(state).join(' '))
        console.log(state)
    }

    const onChangeEditableSpanHandler = () => {
        alert("Wow")
    }

    const optionsArray = ["Minsk", "Moscow", "Kiev"]

    const [radioGroup, setRadioGroup] = useState([
        {title: "Minsk", id: 1, groupName: 'cities'},
        {title: "Moscow", id: 2, groupName: 'cities'},
        {title: "Kiev", id: 3, groupName: 'cities'}
        ])

    const users: Array<StateType> = [
        {id: '1', name: 'Dmitry', age: 22},
        {id: '2', name: 'Alex', age: 32},
        {id: '3', name: 'Max', age: 12}
    ]

    return (
        <div className={s.Junior}>
            <h1>Junior</h1><hr/>
            <EditableSpan title={"Hello"} onChange={onChangeEditableSpanHandler}/>
            <ButtonNya onClick={onSetTitleHandler}>Set title</ButtonNya>
            <ButtonNya onClick={onGetTitleHandler}>Get title</ButtonNya><hr/>
            <Select optionsArray={optionsArray}/> <br/>
            <Radio radioGroup={radioGroup}/>
            <hr/>
            <Users/>
        </div>
    )
};

export default Junior;