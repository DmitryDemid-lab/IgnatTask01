export type StateType = {
    id: string,
    name: string,
    age: number
}

export type SortStateActionType = {
    type: 'SORT'
    sortType: string
}

export type CheckStateActionType = {
    type: 'CHECK'
    minAge: number
}

const startState: Array<StateType> = [
    {id: '1', name: 'Dmitry', age: 22},
    {id: '2', name: 'Alex', age: 32},
    {id: '3', name: 'Max', age: 12}
]

export type ActionType = SortStateActionType | CheckStateActionType

export const hwReducer = (state: Array<StateType> = startState, action: ActionType) => {
    switch (action.type) {
        case "SORT": {
            let stateCopy = [...state]
            if (action.sortType === 'up') {
                return stateCopy.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
            } else if (action.sortType === 'down') {
                return stateCopy.sort((a, b) => (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0))
            }
            return stateCopy;
        }
        case "CHECK": {
            let stateCopy = [...state]
            return stateCopy.filter(p => p.age >= action.minAge)
        }
        default:
            return state
    }
};

export const sortStateAC = (sortType: string): SortStateActionType => {
    return {type: "SORT", sortType}
}
export const checkStateAC = (minAge: number): CheckStateActionType => {
    return {type: "CHECK", minAge}
}