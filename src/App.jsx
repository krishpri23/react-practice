
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import CreateAccount from './components/CreateAccount';
// import UserSignup from './components/userSignup';
import ProviderSignup from './components/providerSignup';
import UserSignup from './components/userSignup';



function App() {

  return (

    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='create' element={<CreateAccount />} />
          <Route path='user' element={<UserSignup />} />
          <Route path='provider' element={<ProviderSignup />} />
          <Route />
        </Routes>
      </BrowserRouter>

      {/* <UserSignup /> */}
    </div>

  )
}

export default App
