import React, {ChangeEvent, FormEvent, useState} from 'react';
import s from "./Radio.module.css"

type RadioType = {
    radioGroup: Array<string | number>
    groupName: string
    onRadioChangeHandler: (currentItem: string) => void
}

function Radio(props: RadioType) {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onRadioChangeHandler(e.currentTarget.value)
    }

    return (
        <>
            {props.radioGroup.map(r => {
                    return <div >
                        <label>
                            <input
                                type={'radio'}
                                name={props.groupName}
                                value={r}
                                onChange={onChangeHandler}
                            />
                            {r}
                        </label>
                    </div>
                }
            )}
        </>

    )
};

export default Radio;