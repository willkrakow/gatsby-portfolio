import React, { useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from "styled-components"
import useLocalStorage from '../hooks/useLocalStorage';
import { myTheme, darkTheme, ThemeToggleContext } from '../utils/theme';

interface IThemeWrapper {
    children: React.ReactNode;
}

interface Themes {
    light: DefaultTheme,
    dark: (theme: DefaultTheme) => DefaultTheme,
}

const themes: Themes = {
    light: myTheme,
    dark: darkTheme,
}


const ThemeWrapper = ({children}: IThemeWrapper) => {
    const { setItem, getItem } = useLocalStorage<'light' | 'dark'>('preferred_theme');
    const [theme, setTheme] = useState<keyof Themes>("light");
    const [shouldRender, setShouldRender] = useState(false);
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setItem(newTheme);
        setTheme(newTheme);
    }

    useEffect(() => {
        const preferredTheme = getItem();
        if(preferredTheme){
            setTheme(preferredTheme as 'light' | 'dark');
        }
        setShouldRender(true);

        return () => {
            setShouldRender(false);
        }
    }, [])

    return (
      <ThemeToggleContext.Provider value={{ toggleTheme, currentTheme: theme }}>
        <ThemeProvider theme={themes.light}>
          <ThemeProvider theme={themes[theme]}>
            {shouldRender ? children : <></>}
            </ThemeProvider>
        </ThemeProvider>
      </ThemeToggleContext.Provider>
    )
}

export default ThemeWrapper