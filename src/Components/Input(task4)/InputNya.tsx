import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './InputNya.module.css';

export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
    {
        onEnter: () => void,
        error: string
    };



const InputNya: React.FC<InputNyaPropsType> = (
    {
        onEnter,
        error,
        ...props
    }) => {

    return (
        <div className={s.InputNya}>
            <div >
                <input className={s.inputNya}
                       {...props}
                       type="text"
                       onKeyPress={onEnter}
                />
                <span>{error}</span>
            </div>
        </div>
    );
};

export default InputNya;