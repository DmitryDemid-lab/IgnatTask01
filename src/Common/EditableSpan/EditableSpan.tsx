import React, {ChangeEvent, useState} from 'react';
import s from "./EditableSpan.module.css"
import InputNya from "../../Components/Input(task4)/InputNya/InputNya";


type EditableSpanPropsType = {
    title: string,
    onChange: (currentSpanValue: string) => void
};

export const EditableSpan = React.memo((props: EditableSpanPropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false);

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false)
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.value)
    }

    return (
        <div>
            {editMode
                ? <InputNya
                    onEnter={deactivateEditMode}
                    onBlur={deactivateEditMode}
                    autoFocus
                    onChange={onChangeHandler}
                    value={props.title}
                />
                : <span
                    className={s.EditableSpan}
                    onDoubleClick={activateEditMode}
                >
                    {props.title}
            </span>
            }
        </div>
    )
});