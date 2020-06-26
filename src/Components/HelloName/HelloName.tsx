import React, {ChangeEvent, useState} from 'react';
import s from './HelloName.module.css';
import {v1} from "uuid";
import ButtonNya from "../Input(task4)/ButtonNya/ButtonNya";
import InputNya from "../Input(task4)/InputNya/InputNya";

type CorrectNameType = {
    id: string,
    name: string
};

function HelloName() {

    let [name, setName] = useState("");

    let [correctNames, setCorrectName] = useState<Array<CorrectNameType>>([]);

    let [error, setError] = useState<string>("");

    function addName(name: string) {
        let newName = {id: v1(), name: name};
        setCorrectName([newName, ...correctNames])
    };

    let count = correctNames.length;

    const helloFunc = () => {
        if (name.trim() !== "") {
            alert("Hello, " + name);
            addName(name);
            setName("");
        } else {
           setError("Field is required!")
            setName("")
        }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        setError("");
    }

    return (
        <div className={s.HelloName}>
            <InputNya
                onEnter={helloFunc}
                placeholder="Enter your name here"
                value={name}
                onChange={onChangeHandler}
                error={error}
            />
            <ButtonNya onClick={helloFunc}>+</ButtonNya>
            <span className={s.count}>
                Names amount:<br/>
               {count}
            </span>
        </div>
    );
};

export default HelloName;