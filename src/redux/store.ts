import {combineReducers, createStore} from 'redux';
import {hwReducer} from "./reducers/HomeWorkReducer/homeWorkReducer";
import {loadStateReducer} from "./reducers/loadStateReducer/loadStateReducer";

const rootReducer = combineReducers({
    homeWork: hwReducer,
    loadState: loadStateReducer
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;