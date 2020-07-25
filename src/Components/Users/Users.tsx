import {checkStateAC, hwReducer, sortStateAC, StateType} from "../../reducer/homeWorkReducer";
import React, {useState} from "react";
import ButtonNya from "../Input(task4)/ButtonNya/ButtonNya";

type UsersType = {}

function Users(props: UsersType) {
    const [users, setUsers] = useState<Array<StateType>>([
        {id: '1', name: 'Dmitry', age: 22},
        {id: '2', name: 'Alex', age: 32},
        {id: '3', name: 'Max', age: 12}
    ])

    const onDownClickHandler = () => {
        const action = sortStateAC("down")
        const resultState = hwReducer(users, action)
        setUsers(resultState)
    }
    const onUpClickHandler = () => {
        const action = sortStateAC("up")
        const resultState = hwReducer(users, action)
        setUsers(resultState)
    }
    const onAgeSortHandler = () => {
        let age = prompt('Enter min age', "0")
        if (age){
            const action = checkStateAC(+age)
            const resultState = hwReducer(users, action)
            setUsers(resultState)
        }
        return users
    }


    return (
        <>
            <ul>
                {users.map(u => <li key={u.id}>Name: {u.name} age: {u.age}</li>)}
            </ul>
            <ButtonNya onClick={onUpClickHandler}>Sort names UP</ButtonNya>
            <ButtonNya onClick={onDownClickHandler}>Sort names Down</ButtonNya>
            <ButtonNya onClick={onAgeSortHandler}>Sort by age</ButtonNya>
        </>
    )
};

export default Users;