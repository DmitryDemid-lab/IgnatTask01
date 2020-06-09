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

    function addName (name:string) {
        let newName = {id: v1(), name: name};
        setCorrectName([newName, ...correctNames])
    };

   let count = correctNames.length;

    const helloFunc = () => {
        if (name !== ""){
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
            <input type="text"
                   value={name}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={helloFunc}>+</button>
            <span>
               {count}
            </span>
        </div>
    );
};

export default HelloName;