import React from "react";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {hwReducer} from "../../redux/reducers/HomeWorkReducer/homeWorkReducer";
import {loadStateReducer} from "../../redux/reducers/loadStateReducer/loadStateReducer";
import {themeSwitchReducer} from "../../redux/reducers/themeSwitchReducer/themeSwitchReducer";
import {AppRootStateType} from "../../redux/store";

const rootReducer = combineReducers({
    homeWork: hwReducer,
    loadState: loadStateReducer,
    theme: themeSwitchReducer,
})

const initialGlobalState: AppRootStateType = {
    theme: {
        theme: "dark"
    },
    loadState: {
        loading: false
    },
    homeWork: [
        {id: '1', name: 'Dmitry', age: 22},
        {id: '2', name: 'Alex', age: 32},
        {id: '3', name: 'Max', age: 12}
    ]
};

export const storyBookStore = createStore(rootReducer, initialGlobalState);

export const ReduxStoreProviderDecorator = (storyFn: any) => {
    return <Provider store={storyBookStore}>
        {storyFn()}
    </Provider>
}
