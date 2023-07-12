
import Login from './components/login';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider

} from 'react-router-dom';

import HomePage from './components/home-page';
import CreateAccount from './components/create-account';
import UserSignup from './components/user-signup';
import ProviderSignup from './components/provider-signup';
import './index.css'
import RootLayout from './components/navbar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={<HomePage />} />
      <Route path='login' element={<Login />} />
      <Route path="create" element={<CreateAccount />} >
        <Route path="userSignup" element={<UserSignup />} />
        <Route path="providerSignup" element={<ProviderSignup />} />
      </Route>
    </Route >
  )
)

function App() {

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div >

  )
}

export default App
