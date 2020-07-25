import React, {ChangeEvent} from 'react';
import s from "./Select.module.css"

type SelectType = {
    optionsArray: Array<string>

}

function Select(props: SelectType) {
    const onChangeH = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(e.currentTarget.value)
    }

    return (
        <select className={s.Select} onChange={onChangeH}>
            {props.optionsArray.map((op, i) => <option key={i} value={"sas"}>{op}</option>)}
        </select>
    )
};

export default Select;