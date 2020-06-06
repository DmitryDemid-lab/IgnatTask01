import React, {useState} from 'react';
import s from './Affairs.module.css';
import Affairs from "./Affairs";


export type FilterValueType = "high" | "middle" | "low" | "all";

function MyAffairs() {

    let [affairs, setAffairs] = useState([
        {id: 1, name: "Studying", priority: " high "},
        {id: 2, name: "Relaxing", priority: " middle "},
        {id: 3, name: "Working", priority: " middle "},
        {id: 4, name: "Playing", priority: " low "},
    ]);


    function removeAffair(id: number) {
        let newAffairs = affairs.filter(a => a.id !== id);
        setAffairs(newAffairs);
    };


    let [filter, setFilter] = useState<FilterValueType>("all");

    function changeFilter(value: FilterValueType) {
        setFilter(value);
    }

    let filteredAffairs = affairs;
    if (filter === "high") {
        filteredAffairs = affairs.filter(a => a.priority === " high ")
    }
    ;
    if (filter === "middle") {
        filteredAffairs = affairs.filter(a => a.priority === " middle ")
    }
    ;
    if (filter === "low") {
        filteredAffairs = affairs.filter(a => a.priority === " low ")
    };
    if (filter === "all") {
        filteredAffairs = affairs.filter(a => affairs)
    };


    return (
        <div className={s.affairsBlock}>
            <Affairs affairs={filteredAffairs}
             removeAffair={removeAffair}
             changeFilter={changeFilter}
            />

        </div>
    )
}

export default MyAffairs;