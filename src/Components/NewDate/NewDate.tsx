import React, {useState} from 'react';
import moment from "moment";
import ButtonNya from "../Input(task4)/ButtonNya/ButtonNya";
import s from './NewDate.module.css';

type NewDateType = {}

function NewDate (props: NewDateType) {

    const [date, setDate] = useState(moment().format('h:mm:ss'))
    const [timerId, setTimerId] = useState (0);
    const [showMode, setShowMode] = useState(false)


    const newDate = () => {
        let date = moment().format('h:mm:ss')
        setDate(date)
        console.log(date)
    }

    const startTime = () => {
        clearInterval(timerId);
        let intervalId = window.setInterval(newDate, 1000)
        setTimerId(intervalId)
    }


    return (
        <div className={s.newDate}>
            <div onMouseOver={()=>setShowMode(true)}
                 onMouseOut={()=>setShowMode(false)}>
                {showMode && <div className={s.date}>{moment().format('MMMM DD YYYY')}</div>}
                <div

                    className={s.time}
                >{date}</div>
            </div>
            <ButtonNya onClick={startTime}>Start Time</ButtonNya>
            <ButtonNya onClick={()=>clearInterval(timerId)}>Stop Time</ButtonNya>
        </div>
    )
};

export default NewDate;