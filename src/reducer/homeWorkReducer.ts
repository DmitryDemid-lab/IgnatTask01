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

export type ActionType = SortStateActionType | CheckStateActionType

export const hwReducer = (state: Array<StateType>, action: ActionType) => {
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
            throw new Error("Can't find this type")
    }
};

export const sortStateAC = (sortType: string): SortStateActionType => {
    return {type: "SORT", sortType}
}
export const checkStateAC = (minAge: number): CheckStateActionType => {
    return {type: "CHECK", minAge}
}