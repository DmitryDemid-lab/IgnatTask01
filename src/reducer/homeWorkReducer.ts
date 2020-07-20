export type StateType = {
    id: string,
    name: string,
    age: number
}

export type ActionType = {
    type: string,
    payload: any
}

export const hwReducer = (state: Array<StateType>, action:ActionType ) => {

    return [];
};