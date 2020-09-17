import {setTheme, setThemeStateType, themeSwitchReducer} from "./themeSwitchReducer";

test ('correct theme should be setted', () => {

    const startState: setThemeStateType = {theme: "light"}

    const action = setTheme("dark")

    const resultState = themeSwitchReducer(startState, action)

    expect(resultState.theme).toBe("dark");
});