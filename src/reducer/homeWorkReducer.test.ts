import {checkStateAC, hwReducer, sortStateAC, StateType} from "./homeWorkReducer";

test ('array should be sorted by names up', () => {

    const startState: Array<StateType> = [
        {id: '1', name: 'Dmitry', age: 22},
        {id: '2', name: 'Alex', age: 32},
        {id: '3', name: 'Max', age: 12}
    ]

    const action = sortStateAC("up")

    const resultState = hwReducer(startState, action)

    expect(resultState[0].id).toBe('2');
    expect(resultState[1].id).toBe('1');
});

test ('array should be sorted by names down', () => {

    const startState: Array<StateType> = [
        {id: '1', name: 'Dmitry', age: 22},
        {id: '2', name: 'Alex', age: 32},
        {id: '3', name: 'Max', age: 12}
    ]

    const action = sortStateAC("down")

    const resultState = hwReducer(startState, action)

    expect(resultState[0].id).toBe('3');
    expect(resultState[1].id).toBe('1');
});

test ('in result array should be people older than we need', () => {

    const startState: Array<StateType> = [
        {id: '1', name: 'Dmitry', age: 22},
        {id: '2', name: 'Alex', age: 32},
        {id: '3', name: 'Max', age: 12}
    ]

    const action = checkStateAC(18)

    const resultState = hwReducer(startState, action)

    expect(resultState.length).toBe(2);
    expect(resultState.every (p => p.id !== '3')).toBeTruthy()
});