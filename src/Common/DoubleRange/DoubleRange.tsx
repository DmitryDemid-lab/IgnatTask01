import React, {ChangeEvent} from 'react';
import s from "./DoubleRange.module.css"

type RangeType = {
    title: string
    minVal: number
    maxVal: number
    valueLower: number
    valueUpper: number
    onLowerChange: (currentValue: number) => void
    onUpperChange: (currentValue: number) => void
    step: number
}

export const DoubleRange = React.memo((props: RangeType) => {

    if (props.valueUpper < props.valueLower + 4){
        props.onLowerChange(props.valueUpper - 4)
        if (props.valueLower == props.minVal){
            props.onUpperChange(4)
        }
    }

    if (props.valueLower > props.valueUpper - 4){
        props.onUpperChange(props.valueLower + 4)
        if (props.valueUpper == props.maxVal){
            props.onLowerChange(46)
        }
    }

    const onLowerChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onLowerChange(+e.currentTarget.value)
        console.log(`VALUE Lower INSIDE COMPONENT ${e.currentTarget.value}`)
    }
    const onUpperChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onUpperChange(+e.currentTarget.value)
        console.log(`VALUE Upper INSIDE COMPONENT ${e.currentTarget.value}`)
    }

    return <div className={s.DoubleRange} id={'DoubleRange'}>
        <input type="range" min={props.minVal} max={props.maxVal} value={props.valueLower} id={"lower"}
               step={props.step} onChange={onLowerChange}/>
        <input type="range" min={props.minVal} max={props.maxVal} value={props.valueUpper} id={"upper"}
               step={props.step} onChange={onUpperChange}/>
        <span className={s.title}>{props.title}</span>

    </div>
});