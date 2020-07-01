import React, {useState} from 'react';
import s from "./EditableSpan.module.css"
import InputNya from "../../Components/Input(task4)/InputNya/InputNya";
import ButtonNya from "../../Components/Input(task4)/ButtonNya/ButtonNya";


type StateType = {
    x: string
    y: number
}

type EditableSpanPropsType = {
    title: string
}

export function saveState<T> (key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}


function EditableSpan(props: EditableSpanPropsType) {

    const [editMode, setEditMode] = useState<boolean>(false);

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    const onSetTitleHandler = () => {
        saveState<StateType>("test", {x: props.title, y: 22});
    }

    const onGetTitleHandler = () =>{
        const state: StateType = restoreState<StateType>("test", {x: "", y: 0});
        console.log(state)
    }

    return (
        <div>
            {editMode
                ? <InputNya
                    onEnter={deactivateEditMode}
                    onBlur={deactivateEditMode}
                    autoFocus
                />
                : <span
                    className={s.EditableSpan}
                    onDoubleClick={activateEditMode}
                >
                    {props.title}
            </span>
            }
            <ButtonNya onClick={onSetTitleHandler}>Set title</ButtonNya>
            <ButtonNya onClick={onGetTitleHandler}>Get title</ButtonNya>
        </div>
    )
};

export default EditableSpan;