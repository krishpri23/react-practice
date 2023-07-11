
import Login from './components/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './components/create-account';
import UserSignup from './components/user-signup';
import ProviderSignup from './components/provider-signup';
import AppBar from './components/navbar';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route index element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path="create" element={<CreateAccount />} />
          <Route path="userSignup" element={<UserSignup />} />
          <Route path="providerSignup" element={<ProviderSignup />} />
        </Routes>
      </BrowserRouter >


    </div >

  )
}

export default App
