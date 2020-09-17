const SET_THEME = "SET_THEME"

const initialState: setThemeStateType = {theme: 'light'}

export const themeSwitchReducer = (state: setThemeStateType = initialState, action: loadActionType) => {
    switch (action.type) {
        case SET_THEME: {

            return {...state, theme: action.theme}
        }
        default:
            return state
    }
}

export const setTheme = (theme: themeType) => ({type: SET_THEME, theme} as const)

//TYPES
export type themeType = 'light' | 'dark' | 'color'
export type setThemeStateType = {
    theme: themeType
}
export type loadActionType = ReturnType<typeof setTheme>