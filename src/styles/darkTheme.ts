import { createTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
    interface Theme {
        colors: {
            white: string;
            blue: string;
            mediumBlue: string;
            darkBlue: string;
            lightBlue: string;
        };
        footer: {
            backgroundColor: string;
        };
    }
    interface ThemeOptions {
        colors?: {
            white?: string;
            blue?: string;
            mediumBlue?: string;
            darkBlue?: string;
            lightBlue?: string;
        };
        footer?: {
            backgroundColor?: string;
        };
    }
}

export default createTheme({
    palette: {
        primary: {
            main: '#5a5a5a',
            light: '#a9a9a9',
        },
        warning: {
            main: '#9f9f9f'
        }
    },
    colors: {
        blue: '#069',
        white: '#fff',
        lightBlue: '#0cf',
        mediumBlue: '#005ea1',
        darkBlue: '#036',
    },
    footer: {
        backgroundColor: '#222',
    },
});