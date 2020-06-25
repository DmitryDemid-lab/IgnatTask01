import React, {ButtonHTMLAttributes, DetailedHTMLProps,} from 'react';

export type ButtonNyaPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const ButtonNya = ({...props}) => {
    return (
        <button {...props}/>
    )
};

export default ButtonNya;