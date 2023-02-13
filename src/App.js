import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Container/HomePage";
import Dashboard from "./Container/Dashboard";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="" element={<HomePage />} />
            <Route path="/shop" element={<div>Shop</div>} />
            <Route path="/contact" element={<div>Contact</div>} />
            <Route path="/signin" element={<div>Signin</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
