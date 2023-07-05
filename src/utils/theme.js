
import { createTheme } from '@mui/material';


const theme = createTheme({

    components: {
        MuiTextField: {
            styleOverrides: {
                padding: '0.5rem 0.5rem 0.5rem 0',
                marginTop: '0.5rem'
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                asterisk: {
                    color: "#d32f2f"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                borderRadius: '8px',
                border: '1px solid transparent ',
                padding: '0.62rem 4.3rem',
                fontSize: '0.8rem',
                fontWeight: '700',
                background: 'primary',
                textTransform: 'uppercase',
                cursor: 'pointer',
                color: 'primary',
                fullWidth: '100%',
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                asterisk: {
                    color: "#d32f2f"
                }
            }
        },

    },
    palette: {
        primary: {
            main: '#9575cd',
            error: 'red'
        },
        secondary: {
            main: '#5100E8',
        },

    },
    typography: {
        fontFamily: 'Raleway, sans-serif',
        lineHeight: 1.5,
        fontWeight: 400,
        fontSize: 16,
        h1: {
            fontSize: '3.2rem',
            fontWeight: 500,
            margin: 0,
        },
        h2: {
            fontSize: '1.6rem',
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: '0.5rem'
        },
        h3: {
            fontSize: '1rem',
            marginBottom: '0.3rem',
            fontWeight: 500,
        },
        body2: {
            fontSize: '1rem',
            fontWeight: '500',
            lineHeight: 1.1,
            margin: '1rem 0'
        },
    },



},
)

export default theme