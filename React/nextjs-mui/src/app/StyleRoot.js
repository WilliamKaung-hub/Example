"use client"

import{ ThemeProvider} from '@mui/material/styles';
import theme from './theme';

export default function StyleRoot({children}){
    return<ThemeProvider theme={theme}>{children}</ThemeProvider>

}

