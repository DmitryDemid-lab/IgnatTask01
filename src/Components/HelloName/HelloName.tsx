import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from './HelloName.module.css';


function HelloName() {

    let [name, setName] = useState("");

    const helloFunc = () => {
        if (name !== ""){
            alert("Hello, " + name);
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
            <span>sss</span>
        </div>
    );
};

export default HelloName;