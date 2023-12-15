import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import "./index.css";
import Home from "./Home";
import Cart from "./Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className=" w-full mx-auto bg-green-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
