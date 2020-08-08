import React, {ChangeEvent, DetailedHTMLProps, OptionHTMLAttributes, SelectHTMLAttributes} from 'react';
import s from "./Select.module.css"

type SelectType = {
    optionsArray: Array<string | number>
    value: string | number
    onSelectChangeHandler: (value: string ) => void
}

export const Select = React.memo((props: SelectType) => {
    const onChangeH = (e: ChangeEvent<HTMLSelectElement>) => {
        props.onSelectChangeHandler(e.currentTarget.value);
    }

    return (
        <select className={s.Select} onChange={onChangeH} value={props.value}>
            {props.optionsArray.map((op, i) => <option key={i}>{op}</option>)}
        </select>
    )
});
