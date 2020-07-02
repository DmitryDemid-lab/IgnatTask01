import React, {useState} from 'react';
import s from "./EditableSpan.module.css"
import InputNya from "../../Components/Input(task4)/InputNya/InputNya";


type EditableSpanPropsType = {
    title: string,
    onChange: () => void,
};

function EditableSpan(props: EditableSpanPropsType) {

    const [editMode, setEditMode] = useState<boolean>(false);

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false)
    };

    return (
        <div>
            {editMode
                ? <InputNya
                    onEnter={deactivateEditMode}
                    onBlur={deactivateEditMode}
                    onChange={props.onChange}
                    autoFocus
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
};

export default EditableSpan;