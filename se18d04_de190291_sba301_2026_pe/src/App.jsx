import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoesDetails from "./pages/ShoesDetails";
import ShoesForm from "./pages/ShoesForm";
import ShoesPage from "./pages/ShoesPage";
import { ShoesProvider } from "./contexts/ShoesContext";
import AppLayout from "./layouts/AppLayout";

function App() {

  return (
    <BrowserRouter>
      <ShoesProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<ShoesPage />} />
            <Route path="/shoes/:id" element={<ShoesDetails />} />
            <Route path="/shoes/add" element={<ShoesForm />} />
          </Route>
        </Routes>
      </ShoesProvider>
    </BrowserRouter>
  )
}

export default App
