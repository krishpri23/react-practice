
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
            lineHeight: 1.1,
            fontWeight: 500,
            margin: 0,
        },
        h2: {
            fontSize: '1.2rem'
        },
        h3: {
            fontSize: '0.7rem',
            marginBottom: '0.3rem'
        }
    },
    p: {
        fontSize: '0.9rem',
        fontWeight: '700'
    },


},
)

export default theme