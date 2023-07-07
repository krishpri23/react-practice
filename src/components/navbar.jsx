// import React from 'react'
import { AppBar, Box, Toolbar } from '@mui/material';
import { styled } from '@mui/material';
import Logo from '../assets/sb-logo-resized.png';
import '../styles/NavBar.css'
function NavBar() {
    const StyledToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between'
    })
    return (
        <AppBar position='static' color='primary' >
            <StyledToolbar>
                <Box
                    className='logo'
                    src={Logo}
                    component='img'
                    sx={{
                        width: '180px',
                        height: '60px',
                        m: 0,
                    }} />
            </StyledToolbar>

        </AppBar >
    )
}

export default NavBar