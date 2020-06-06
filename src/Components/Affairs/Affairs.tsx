import React from 'react';
import s from './Affairs.module.css';
import {FilterValueType} from "./MyAffairs";


type affairsPropsType = {
    id: number,
    name: string,
    priority: string
};

type newAffairsType = {
    affairs: Array<affairsPropsType>,
    removeAffair: (id: number) => void,
    changeFilter: (value: FilterValueType) => void,
}

function Affairs(props: newAffairsType) {

    let newAffairs = props.affairs.map(a => <li key={a.id}>
        <span> <b>name: </b> {a.name}</span>
        <span> <b>priority:</b> {a.priority}</span>
        <button  onClick={() => props.removeAffair(a.id)}>x</button>
    </li>)

    return (
        <div>
            <ul>{newAffairs}</ul>
            <button className={s.btn} onClick={() => props.changeFilter("all")}>All</button>
            <button className={s.btn} onClick={() => props.changeFilter("high")}>High</button>
            <button className={s.btn} onClick={() => props.changeFilter("middle")}>Middle</button>
            <button className={s.btn} onClick={() => props.changeFilter("low")}>Low</button>
        </div>

    )
}

export default Affairs;