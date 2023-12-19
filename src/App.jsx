import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MainLayouts from "./layouts/MainLayouts";
import CartPage from "./pages/Cart";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayouts/>}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<CartPage />} />

            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
