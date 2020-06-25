import React, {ButtonHTMLAttributes, DetailedHTMLProps,} from 'react';
import s from './ButtonNya.module.css';

export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const ButtonNya: React.FC<ButtonNyaPropsType> = ({...props}) => {
    return (
        <button
            {...props}
            className={s.ButtonNya}
        />
    )
};

export default ButtonNya;