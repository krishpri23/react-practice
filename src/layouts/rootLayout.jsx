import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../utils/localStorage";
import NavBar from "../components/NavBar";

export function RootLoader() {
  const login = fetchData("login");
  return { login };
}

function RootLayout() {
  const { login } = useLoaderData();

  return (
    <div className="root">
      <header>
        <NavBar login={login} />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
