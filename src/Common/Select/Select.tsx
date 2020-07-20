import React from 'react';

type SelectType = {
    optionsArray: Array<string>
}

function Select(props: SelectType) {
    return (
        <select>
            {props.optionsArray.map((op, i) => <option key={i}>{op}</option>)}
        </select>
    )
};

export default Select;