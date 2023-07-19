
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

//layout
import RootLayout, { RootLoader } from './layouts/rootLayout';
import CreateLayout from './layouts/createLayout';

//screens
import HomePage from './pages/Home/homePage';
import UserSignup from './pages/createAccount/userSignup';
import ProviderSignup from './pages/createAccount/providerSignup';
import NotFound from './pages/notFound';
import SearchResults from './pages/searchProvider/searchResults';
import Login from './pages/login';

//styles
import './index.css';

//utils
import { loginAction, logoutAction } from './utils/actions';
import Logout from './pages/logout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} loader={RootLoader} >
      <Route index element={<HomePage />} />
      <Route path='searchProviders' element={<SearchResults />} />

      <Route path="create" element={<CreateLayout />} >
        <Route path="userSignup" element={<UserSignup />} />
        <Route path="providerSignup" element={<ProviderSignup />} />
      </Route>

      <Route path='login' element={<Login />} action={loginAction} />
      <Route path='logout' element={<Logout />} action={logoutAction} />
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
