import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './HelloName.module.css';
import {v1} from "uuid";

type CorrectNameType = {
    id: string,
    name: string
};

function HelloName() {

    let [name, setName] = useState("");

    let [correctNames, setCorrectName] = useState<Array<CorrectNameType>>([]);

    function addName(name: string) {
        let newName = {id: v1(), name: name};
        setCorrectName([newName, ...correctNames])
    };

    let count = correctNames.length;

    const helloFunc = () => {
        if (name !== "") {
            alert("Hello, " + name);
            addName(name);
            setName("");

        } else {
            alert("Enter your name");
        }
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            helloFunc();
        }
    }

    return (
        <div className={s.HelloName}>
            <input
                className={s.NameInput}
                type="text"
                placeholder="Enter your name here"
                value={name}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <button className={s.addBtn} onClick={helloFunc}>+</button>
            <span className={s.count}>
                Names amount:<br/>
               {count}
            </span>
        </div>
    );
};

export default HelloName;