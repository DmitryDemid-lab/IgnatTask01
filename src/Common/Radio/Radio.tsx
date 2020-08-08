import React, {ChangeEvent, FormEvent, useState} from 'react';
import s from "./Radio.module.css"

type RadioType = {
    radioGroup: Array<string | number>
    groupName: string
    onRadioChangeHandler: (currentItem: string) => void
}

export const Radio = React.memo((props: RadioType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onRadioChangeHandler(e.currentTarget.value)
    }

    return (
        <>
            {props.radioGroup.map((r, i) => {
                    return <div key={i} className={s.Radio}>
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
});