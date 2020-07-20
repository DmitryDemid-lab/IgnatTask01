import React from 'react';
import s from "./Select.module.css"

type SelectType = {
    optionsArray: Array<string>
}

function Select(props: SelectType) {
    return (
        <select className={s.Select}>
            {props.optionsArray.map((op, i) => <option key={i}>{op}</option>)}
        </select>
    )
};

export default Select;