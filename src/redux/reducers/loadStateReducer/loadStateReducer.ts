import React from "react";

const SET_LOADING = "SET_LOADING"

export type loadStateType = {
    loading: boolean
}

export type setLoadingType = {
    type: typeof SET_LOADING
    isLoading: boolean
}

export type loadActionType = setLoadingType

const initialState = {loading: false}

export const loadStateReducer = (state: loadStateType = initialState, action: loadActionType) => {
    switch (action.type) {
        case SET_LOADING: {
            return {...state, loading: action.isLoading}
        }
        default:
            return state
    }
}

export const setLoading = (isLoading: boolean): setLoadingType => {
    return {type: SET_LOADING, isLoading}
}