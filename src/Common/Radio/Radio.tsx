import React, {ChangeEvent, useState} from 'react';
import s from "./Radio.module.css"

type RadioGroupType = {
    id: number
    groupName: string
    title: string
}

type RadioType = {
    radioGroup: Array<RadioGroupType>
}

function Radio(props: RadioType) {
    const [editMode, setMode] = useState<boolean>(true)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        alert('want to change')
        // setTitle(e.currentTarget.value)
    }

    return (
        <>
            {props.radioGroup.map(r => {
                   return !editMode
                        ? <div key={r.id} onDoubleClick={() => {
                            setMode(true)
                        }}>
                            <input
                                type={'radio'}
                                name={r.groupName}
                            />
                            <label>{r.title}</label>
                        </div>
                        : <input
                            key={r.id}
                            type={'text'}
                            value={r.title}
                            onBlur={() => {
                                setMode(false)
                            }}
                            autoFocus
                            onChange={onChangeHandler}
                />
                }
             )}
        </>

    )
};

export default Radio;