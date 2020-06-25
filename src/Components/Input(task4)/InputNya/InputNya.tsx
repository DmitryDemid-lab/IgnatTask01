import React, {DetailedHTMLProps, InputHTMLAttributes, KeyboardEvent} from 'react';
import s from './InputNya.module.css';

export type InputNyaPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> &
    {
        onEnter: () => void,
        error?: string
    };


const InputNya: React.FC<InputNyaPropsType> = (
    {
        onEnter,
        error,
        ...props
    }) => {

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => (e.charCode === 13) && onEnter();

    return (
        <div>
            <input className={s.InputNya}
                   {...props}
                   type="text"
                   onKeyPress={onKeyPressHandler}
            />
            <span className={s.errorMessage}>{error}</span>
        </div>
    );
};

export default InputNya;