
import { createTheme } from '@mui/material';


const theme = createTheme({
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
            fontSize: '2rem',
            fontWeight: 700,
            margin: 0,
            color: 'black',
        },
        h2: {
            fontSize: '1.6rem',
            fontWeight: 700,
            lineHeight: 1.2,
            // marginBottom: '0.5rem'
        },
        h3: {
            fontSize: '1rem',
            // marginBottom: '0.3rem',
            fontWeight: 500,
        },
        // error texts
        h4: {
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'red',
            margin: '0.2rem auto 0 0.5rem'
        },
        body2: {
            fontSize: '0.9rem',
            fontWeight: '500',
            lineHeight: 1.1,
            margin: '0.5rem 0'
        },
    },
    components: {
        // MuiTextField: {
        //     styleOverrides: {
        //         '& .MuiOutlinedInput-input': {
        //             padding: '0.1rem',
        //             marginTop: '1rem',
        //             marginLeft: '10rem',
        //             width: '100%',
        //             size: 'small',
        //             variant: 'filled',
        //         }
        //     }
        // },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    border: '1px solid transparent ',
                    padding: '0.62rem 4.3rem',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    background: 'primary',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    color: 'primary',
                    marginTop: '1rem'
                },
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                asterisk: {
                    color: "#d32f2f"
                },
            },
        },

    },

})

export default theme