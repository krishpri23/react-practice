
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/login'
import CreateAccount from './components/CreateAccount'
import UserSignup from './components/userSignup'
import ProviderSignup from './components/providerSignup'

function App() {

  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="create" element={<CreateAccount />} />
          <Route path="userSignup" element={<UserSignup />} />
          <Route path="providerSignup" element={<ProviderSignup />} />
        </Routes>
      </BrowserRouter >
    </div >

  )
}

export default App
