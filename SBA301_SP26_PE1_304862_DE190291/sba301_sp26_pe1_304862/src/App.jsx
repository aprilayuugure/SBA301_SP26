import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RestaurantProvider } from "./contexts/RestaurantContext";
import RestaurantDetails from "./pages/RestaurantDetails";
import RestaurantForm from "./pages/RestaurantForm";
import Restaurants from "./pages/Restaurants";

function App() {
  return (
    <BrowserRouter>
      <RestaurantProvider>
        <Routes>
            <Route path = "/" element = {<Restaurants />} />
            <Route path = "/restaurants/:id" element = {<RestaurantDetails />} />
            <Route path = "/restaurants/add" element = {<RestaurantForm />} />
        </Routes>
      </RestaurantProvider>
    </BrowserRouter>
  )
}

export default App
