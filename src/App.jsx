import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MainLayouts from "./layouts/MainLayouts";
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayouts/>}>
            <Route index element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
