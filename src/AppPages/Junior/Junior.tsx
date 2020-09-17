import React, {useCallback, useState} from 'react';
import s from './Junior.module.css'
import {EditableSpan} from "../../Common/EditableSpan/EditableSpan";
import ButtonNya from "../../Components/Input(task4)/ButtonNya/ButtonNya";
import {Select} from "../../Common/Select/Select";
import {Radio} from "../../Common/Radio/Radio";
import Users from "../../Components/Users/Users";
import NewDate from "../../Components/NewDate/NewDate";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {loadStateType, setLoading} from "../../redux/reducers/loadStateReducer/loadStateReducer";
import Preloader from "../../Common/preloader/Preloader";
import {Range} from "../../Common/Range/Range";
import {DoubleRange} from "../../Common/DoubleRange/DoubleRange";

type LocalStateType = {
    x: string
    y: string
    z: number
}

export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString) as T;
    return defaultState;
}

export const Junior = React.memo(() => {

    const load = useSelector<AppRootStateType, loadStateType>(state => state.loadState)
    const dispatch = useDispatch()

    function changeLoad() {
        dispatch(setLoading(true))
       let stop = () => dispatch(setLoading(false))
        setTimeout(stop, 3000)
    }

    const onSetTitleHandler = () => {
        saveState<LocalStateType>("test", {x: "Hello!", y: "This is task number: ", z: 6});
    }
    const onGetTitleHandler = () => {
        const state: LocalStateType = restoreState<LocalStateType>("test", {x: "", y: "", z: 0});
        alert(Object.values(state).join(' '))
        console.log(state)
    }

    //Params for EditableSpan test
    const [spanValue, setSpanValue] = useState('Hello')
    const onChangeEditableSpanHandler = useCallback((currentSpanValue: string) => {setSpanValue(currentSpanValue)}, [])

    //Params for select test
    const cities = ["Choose city", "Minsk", "Moscow", "Kiev"]
    const [selectedValue, setSelectedValue] = useState("Choose city")
    const onSelectChangeHandler = useCallback((value: string) => {
        setSelectedValue(value)
    }, [])

    //Params for Radio test
    const radioGroup = ["ManUnited", "Chelsea", "Arsenal", "Liverpool"];
    const [selectedRadio, setSelectedRadio] = useState("ManUnited")
    const onRadioChangeHandler = useCallback((currentItem: string) => {
        setSelectedRadio(currentItem)
    }, [])

    //Params for Range test
    const minVal = 0
    const maxVal = 10
    const step = 2
    const [rangeValue, setRangeValue] = useState(minVal)
    const onRangeChange = useCallback((currentValue: number) => {
        setRangeValue(currentValue)
    }, [])

    //Params for DoubleRange test
    const minValDouble = 0
    const maxValDouble = 50
    const doubleStep = 2
    const [upperValue, setUpperValue] = useState(maxVal)
    const [lowerValue, setLowerValue] = useState(minVal)
    const onLowerChange = useCallback((currentValue: number) => {
        setLowerValue(currentValue)
    }, [])
    const onUpperChange = useCallback((currentValue: number) => {
        setUpperValue(currentValue)
    }, [])

    return (
        load.loading ? <Preloader/>
        : <div className={s.Junior}>
            <h1>Junior</h1>
            <hr/>
            <EditableSpan title={spanValue} onChange={onChangeEditableSpanHandler}/>
            <ButtonNya onClick={onSetTitleHandler}>Set title</ButtonNya>
            <ButtonNya onClick={onGetTitleHandler}>Get title</ButtonNya>
            <hr/>
            <Select optionsArray={cities} value={selectedValue} onSelectChangeHandler={onSelectChangeHandler}/>
            <br/><br/>
            <Radio radioGroup={radioGroup} groupName={"football teams"} onRadioChangeHandler={onRadioChangeHandler}/>
            <hr/>
            <Users/>
            <hr/>
            <NewDate/>
            <hr/>
            <ButtonNya onClick={changeLoad}>Start TimeOut</ButtonNya>
            <hr/>
            <Range title={'Test'} maxVal={maxVal} minVal={minVal} onRangeChange={onRangeChange} value={rangeValue} step={step}/>
            <br/>
            <DoubleRange
                step={doubleStep}
                minVal={minValDouble}
                maxVal={maxValDouble}
                valueLower={lowerValue}
                valueUpper={upperValue}
                title={'TEST'}
                onLowerChange={onLowerChange}
                onUpperChange={onUpperChange}
            />
        </div>
    )
});