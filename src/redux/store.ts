import {combineReducers, createStore} from 'redux';
import {hwReducer} from "./reducers/HomeWorkReducer/homeWorkReducer";
import {loadStateReducer} from "./reducers/loadStateReducer/loadStateReducer";
import {themeSwitchReducer} from "./reducers/themeSwitchReducer/themeSwitchReducer";

const rootReducer = combineReducers({
    homeWork: hwReducer,
    loadState: loadStateReducer,
    theme: themeSwitchReducer,
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;