import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Container/HomePage";
import Dashboard from "./Container/Dashboard";
import SigninPage from "./Container/SigninPage";
import ShopPage from "./Container/Shop";
import { UserProvider } from './Contexts/UserContext';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Dashboard />}>
              <Route path="" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/contact" element={<div>Contact</div>} />
              <Route path="/signin" element={<SigninPage />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
