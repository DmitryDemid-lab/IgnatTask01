import React from 'react';
import s from "./Radio.module.css"

type OptionsType = {
    groupName: string
    title: Array<string>
}

type RadioType = {
    radioGroup: OptionsType
}

function Radio(props: RadioType) {
    return (
        <div className={s.Radio}>
            {props.radioGroup.title.map((r, i) => <p key={i}><input type="radio" name={props.radioGroup.groupName}/>{r}</p>)}
        </div>
    )
};

export default Radio;