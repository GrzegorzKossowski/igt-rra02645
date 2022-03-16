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
            main: '#006699',
            light: '#0cf',
        },
    },
    colors: {
        white: '#fff',
        lightBlue: '#0cf',
        blue: '#069',
        mediumBlue: '#005ea1',
        darkBlue: '#036',
    },
    footer: {
        backgroundColor: '#222',
    },
});
