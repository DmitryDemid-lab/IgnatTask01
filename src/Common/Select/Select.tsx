import React, {ChangeEvent, DetailedHTMLProps, OptionHTMLAttributes, SelectHTMLAttributes} from 'react';
import s from "./Select.module.css"

type SelectType =
    DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
    & DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>
    & {
    optionsArray: Array<string>
    value: string
    onSelectChangeHandler: (value: string) => void
}

const Select: React.FC<SelectType> = (props: SelectType) => {
    const onChangeH = (e: ChangeEvent<HTMLSelectElement>) => {
        props.onSelectChangeHandler(e.currentTarget.value);
    }

    return (
        <select className={s.Select} onChange={onChangeH} value={props.value}>
            {props.optionsArray.map((op, i) => <option key={i}>{op}</option>)}
        </select>
    )
};

export default Select;