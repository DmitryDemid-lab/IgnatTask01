import {loadStateReducer, loadStateType, setLoading} from "./loadStateReducer";


test ('array should be sorted by names up', () => {

    const startState: loadStateType = {loading: true}

    const action = setLoading(false)

    const resultState = loadStateReducer(startState, action)

    expect(resultState.loading).toBe(false);
});