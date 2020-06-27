import React from 'react';
import s from "./Backdrop.module.css"

type BackdropTypes = {
    onClick: () => void
}

function Backdrop (props: BackdropTypes) {
    return (
        <div
        className={s.Backdrop}
        onClick={props.onClick}
        />
    )
};

export default Backdrop;