import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import "./index.css";
import Home from "./Home";
import Cart from "./Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className=" w-full mx-auto bg-green-200">
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
