import React, {useState} from 'react';
import s from "./Layout.module.css"
import Drawer from '../../Components/Navigation/Drawer/Drawer';
import MenuToggle from "../../Components/Navigation/MenuToggle/MenuToggle";

function Layout({...props}) {

    let [state, setState] = useState({
            menu: false,
        }
    )

    const toggleMenuHandler = () => {
        state.menu = !state.menu
        setState({...state})
    }
    const menuCloseHandler = () => {
        state.menu = false;
        setState ({...state})
    }

    return (
        <div className={s.Layout}>

            <Drawer
                isOpen={state.menu}
                onClose={menuCloseHandler}
            />

            <MenuToggle
                onToggle={toggleMenuHandler}
                isOpen={state.menu}
            />
            <main{...props}>
                {props.children}
            </main>
        </div>
    )
};

export default Layout;