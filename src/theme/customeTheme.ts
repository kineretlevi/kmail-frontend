import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  direction: 'rtl', // Set direction to RTL
  palette: {
    primary: {
      main: '#973aa8', // Custom primary color
    },
    secondary: {
      main: '#bcb8b1', // Custom secondary color
    },
    success: {
        main: '#c2f8cb',
    },
    error: {
        main: '#ed0062'

    },
    background: {
      default: '#f4f4f4', // Custom background color
    },
  },
  typography: {
    fontFamily: 'Heebo, Arial, sans-serif', // Custom font family
  },
});

export { theme };