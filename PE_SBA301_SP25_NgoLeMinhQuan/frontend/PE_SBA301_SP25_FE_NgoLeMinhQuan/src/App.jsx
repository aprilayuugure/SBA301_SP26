import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import CarDetail from "./pages/CarDetail";
import CarManagement from "./pages/CarManagement";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<MainLayout />}>
          <Route path = "/" element = {<Home />} />
          <Route path="/cars" element={<CarManagement />} />
          <Route path="/cars/add" element={<CarDetail />} />
          <Route path="/cars/:id" element={<CarDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;