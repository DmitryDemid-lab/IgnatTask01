import React, {ChangeEvent} from 'react';
import s from "./Range.module.css"

type RangeType ={
    title: string
    minVal: number
    maxVal: number
    onRangeChange: (currentValue: number) => void
    value: number
    step: number
}

export const Range = React.memo((props:RangeType) => {

    const onRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onRangeChange(+e.currentTarget.value)
        console.log(`VALUE INSIDE COMPONENT ${e.currentTarget.value}`)
    }

    return <div className={s.Range}>
            <input
                type="range"
                min={props.minVal}
                max={props.maxVal}
                onChange={onRangeChange}
                value={props.value}
                step={props.step}
            />
            <label>{props.title}</label>
        </div>
});