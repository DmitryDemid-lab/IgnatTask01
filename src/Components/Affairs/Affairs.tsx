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

    let newAffairs = props.affairs.map(a => <li className={s.textRow} key={a.id}>
        <span className={s.affair}> <span className={s.constRow}>Name: </span> {a.name}</span>
        <span className={s.affair}> <span className={s.constRow}>Priority:</span> {a.priority}</span>
        <button className={s.btnDelete}  onClick={() => props.removeAffair(a.id)}>x</button>
    </li>)

    return (
        <div>
            <ul >{newAffairs}</ul>
            <div className={s.btnRow}>
                <button className={s.btn} onClick={() => props.changeFilter("all")}>ALL</button>
                <button className={s.btn} onClick={() => props.changeFilter("high")}>HIGH</button>
                <button className={s.btn} onClick={() => props.changeFilter("middle")}>MIDDLE</button>
                <button className={s.btn} onClick={() => props.changeFilter("low")}>LOW</button>
            </div>
        </div>

    )
}

export default Affairs;