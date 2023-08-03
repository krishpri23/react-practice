import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//layout
import RootLayout, { RootLoader } from "./layouts/rootLayout";
import CreateLayout from "./pages/signup";

//screens
import HomePage from "./pages/Home/homePage";
import NotFound from "./pages/notFound";
import SearchResults, {
  loadSearchResults,
} from "./pages/searchProvider/searchResults";
import Login from "./pages/login";

//styles
import "./index.css";

//utils
import { loginAction, logoutAction, searchAction } from "./utils/actions";
import Logout from "./pages/logout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} loader={RootLoader}>
      <Route index element={<HomePage />} />
      <Route
        path="searchResults"
        element={<SearchResults />}
        action={searchAction}
        loader={loadSearchResults}
      />

      <Route path="create" element={<CreateLayout />} />
      <Route path="login" element={<Login />} action={loginAction} />
      <Route path="logout" element={<Logout />} action={logoutAction} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
