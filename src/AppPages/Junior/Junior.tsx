import React from 'react';
import s from './Junior.module.css'
import EditableSpan from "../../Common/EditableSpan/EditableSpan";
import ButtonNya from "../../Components/Input(task4)/ButtonNya/ButtonNya";
import Select from "../../Common/Select/Select";
import Radio from "../../Common/Radio/Radio";

type StateType = {
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
        saveState<StateType>("test", {x: "Hello!", y: "This is task number: ", z: 6});
    }

    const onGetTitleHandler = () => {
        const state: StateType = restoreState<StateType>("test", {x: "", y: "", z: 0});
        alert(Object.values(state).join(' '))
        console.log(state)
    }

    const onChangeEditableSpanHandler = () => {
        alert("Wow")
    }

    const optionsArray = ["Minsk", "Moscow", "Kiev"]

    const radioGroup = {
        groupName: "test",
        title: ["Minsk", "Moscow", "Kiev"]
    }


    return (
        <div className={s.Junior}>
            <h1>Junior</h1><hr/>
            <EditableSpan title={"Hello"} onChange={onChangeEditableSpanHandler}/>
            <ButtonNya onClick={onSetTitleHandler}>Set title</ButtonNya>
            <ButtonNya onClick={onGetTitleHandler}>Get title</ButtonNya><hr/>
            <Select optionsArray={optionsArray}/>
            <Radio radioGroup={radioGroup}/><hr/>
        </div>
    )
};

export default Junior;