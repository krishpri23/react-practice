
import Login from './components/login';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider

} from 'react-router-dom';

import HomePage from './components/home-page';
import CreateLayout from './layouts/create-layout';
import UserSignup from './components/createAccount/user-signup';
import ProviderSignup from './components/createAccount/provider-signup';
import './index.css'
import RootLayout from './layouts/root-layout';
import NotFound from './components/not-found';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={<HomePage />} />
      <Route path='login' element={<Login />} />
      <Route path="create" element={<CreateLayout />} >
        <Route path="userSignup" element={<UserSignup />} />
        <Route path="providerSignup" element={<ProviderSignup />} />
      </Route>

      <Route path='*' element={<NotFound />} />
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
