

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';


import Login from './components/login'
import CreateAccount from './components/CreateAccount'
import UserSignup from './components/UserSignup'
import ProviderSignup from './components/ProviderSignup';
import theme from './utils/theme'


function App() {

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="create" element={<CreateAccount />} />
            <Route path="userSignup" element={<UserSignup />} />
            <Route path="providerSignup" element={<ProviderSignup />} />
          </Routes>
        </BrowserRouter >
      </ThemeProvider>

    </div >

  )
}

export default App
