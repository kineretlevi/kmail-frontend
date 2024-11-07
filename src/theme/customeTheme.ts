import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl', 
  palette: {
    primary: {
      main: '#9c41ff', 
    },
    secondary: {
      main: '#f8f9fa', 
    },
    success: {
        main: '#c2f8cb',
    },
    error: {
        main: '#ed0062',
    },
    info: {
      main: "#d6d640",
    },
    background: {
      default: '#f4f4f4', 
    },
  },
  typography: {
    fontFamily: 'Heebo, Arial, sans-serif', 
  },
});

export { theme };