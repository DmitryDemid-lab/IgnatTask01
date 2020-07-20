import {hwReducer, StateType} from "./homeWorkReducer";

test ('array should be sorted by names up', () => {

    const startState: Array<StateType> = [
        {id: '1', name: 'Dmitry', age: 22},
        {id: '2', name: 'Alex', age: 32}
    ]

    const action = {
        type: 'SORT',
        payload: 'up'
    }

    const resultState = hwReducer(startState, action)

    expect(resultState[0]).toBe(resultState[1]);
});