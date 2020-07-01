import React from 'react';
import s from './Junior.module.css'
import EditableSpan from "../../Common/EditableSpan/EditableSpan";

type StateType = {
    x: string
    y: number
}

function Junior() {
    return (
        <div className={s.Junior}>
            <h1>Junior</h1>
            <EditableSpan title={"Hello"}/>
        </div>
    )
};

export default Junior;